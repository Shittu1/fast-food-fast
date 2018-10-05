import pool from './dbsetup';
import menu from './menu';
import users from './users';


const tables = `${menu}${users}`;
pool.query(tables, (err, res) => {
	if(err){
		console.log(err);
	}
});