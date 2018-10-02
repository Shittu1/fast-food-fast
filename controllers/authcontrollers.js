
import express from 'express';
import bodyParser from 'body-parser';
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
import jwt from 'jsonwebtoken';
import bcrypt from'bcryptjs';
import config from '../config';
import users from '../db/users';


export const signup = (req, res) => {
  //encrypt password with Bcrypt’s hashing method
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  
  User.create({
    firstName : req.body.firstname,
    lastName : req.body.lastname,
    email : req.body.email,
    password : hashedPassword
  },
  (err, user) => {
    if (err) return res.status(500).send("There was a problem registering the user.")
    // create a token
    let token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token: token });
  }); 
}


export const login = (req, res) => {
	let token = req.headers['x-access-token'];
  	if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  	jwt.verify(token, config.secret, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    
    res.status(200).send(decoded);
  });
}
router.get('/login', login) 


