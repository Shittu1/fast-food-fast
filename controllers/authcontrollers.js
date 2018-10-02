
import express from 'express';
import bodyParser from 'body-parser';
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
import jwt from 'jsonwebtoken';
import bcrypt from'bcryptjs';
import config from '../config';
import users from '../db/users';
// import tokenVerification from '..middlewares/tokenverification';


export const signup = (req, res) => {
  //encrypt password with Bcrypt’s hashing method
  let hashedPassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));
  pool.query('INSERT INTO users(firstName, lastName, email, password) values($1, $2, $3, $4)', 
  			[req.body.firstname, req.body.lastname, req.body.email, hashedPassword], (err, res) => {
	  console.log(err, res)
	  pool.end()
	})
  (err, user) => {
    if (err) return res.status(500).send("There was a problem registering the user.")
    // create a token
    let token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token: token });
  }; 



export const me = (req, res) => {
	let token = req.headers['x-access-token'];
  		if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  	jwt.verify(token, config.secret, (err, decoded) => {
    	if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    
    //To make sure that the id really belongs to me
    	User.findById(decoded.id, 
	    	{ password: 0 }, // projection to the query and omit the password
	    	(err, user) => {
				if (err) return res.status(500).send("There was a problem finding the user.");
				if (!user) return res.status(404).send("No user found.");
	  
	  res.status(200).send(user);
	});
  });
}



export const login = (req, res) => {
  	User.findOne({ email: req.body.email }, (err, user) => {
	    if (err) return res.status(500).send('Error on the server.');
	    if (!user) return res.status(404).send('No user found.');
    	let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    	if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
    	let token = jwt.sign({ id: user._id }, config.secret, {
      	expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token: token });
  });
}





