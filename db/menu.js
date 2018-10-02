
const menu = `create table if not exists menu (
	id SERIAL PRIMARY KEY,
	name varchar(20) NOT NULL,
	price varchar(20) NOT NULL,
	phone integer NOT NULL,
	details varchar(30) NOT NULL,
	date varchar(150) NOT NULL
);`;


export default menu;
