const users = `create table if not exists users (
	id SERIAL PRIMARY KEY,
	firstName varchar(20) NOT NULL,
	lastName varchar(20) NOT NULL,
	email varchar(30) NOT NULL,
	password varchar(150) NOT NULL
);`;


export default users;