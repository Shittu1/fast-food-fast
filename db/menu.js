
const menu = `create table if not exists menu (
	id SERIAL PRIMARY KEY,
	name varchar(20) NOT NULL,
	price integer NOT NULL,
	details varchar(150) NOT NULL,
	date varchar(20) NOT NULL
);`;


export default menu;
