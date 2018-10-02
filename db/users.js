const users = `create table if not exist users (
	id SERIAL PRIMARY KEY,
	firstName varchar(20) NOT NULL,
	lastName varchar(20) NOT NULL,
	phone integer NOT NULL,
	email varchar(30) NOT NULL,
	password varchar(150) NOT NULL
);`;


export default users;