
import express from 'express';
import bodyParser from 'body-parser';
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
import jwt from 'jsonwebtoken';
import bcrypt from'bcryptjs';
import config from '../config';
import users from '../db/users';
import pool from '../db/dbsetup';
// import tokenVerification from '..middlewares/tokenverification';


export const signup = (req, res) => {
  //encrypt password with Bcrypt’s hashing method
  let hashedPassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));
  pool.query('INSERT INTO users(firstName, lastName, email, password) values($1, $2, $3, $4)', 
  	  [req.body.firstname, req.body.lastname, req.body.email, hashedPassword])
	  .then((user) => {
		let token = jwt.sign({ id: user._id }, config.secret, {
      		expiresIn: 86400 // expires in 24 hours
    	});
    	return res.status(200).send({ auth: true, token: token });
	}).catch((error) => {
		return res.status(500).send({ msg: "There was a problem registering the user.", error })
	})
  };


  export const login = (req, res) => {
  pool.query('SELECT * FROM users where email = $1', 
  	  [req.body.email])
	  .then((user) => {
	  	const validPasword = bcrypt.compareSync(req.body.password, user.rows[0].password);
	  	if(!validPasword) {
	  		return res.json({ message: 'fake password' });
	  	}
		let token = jwt.sign({ id: user.rows[0].id }, config.secret, {
      			expiresIn: 86400 // expires in 24 hours
    		});
    	return res.status(200).send({ auth: true, token: token });
	}).catch((error) => {
		return res.status(500).send({ msg: "There was a problem login in the user.", error })
	})
  };


