import { Pool } from 'pg';
import dotenv from 'dotenv';

import usersTableMigration from './users';

dotenv.config();
const connectionString = 'postgres://kmtybgrw:WjqXY18ishmZYWaGHAVTpwBMZ6rcC9eK@pellefant.db.elephantsql.com:5432/kmtybgrw'

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})

// pool.query(usersTableMigration);

export default pool;
