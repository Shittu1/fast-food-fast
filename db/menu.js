
const menu = `create table if not exists menu (
	id SERIAL PRIMARY KEY,
	name varchar(120) NOT NULL,
	price integer,
	details varchar(250),
	date TIMESTAMP DEFAULT now()
);`;


export default menu;
