import { Pool } from 'pg';
const connectionString = 'postgres://kmtybgrw:WjqXY18ishmZYWaGHAVTpwBMZ6rcC9eK@pellefant.db.elephantsql.com:5432/kmtybgrw'

const pool = new Pool({
  connectionString: connectionString,
})


export default pool;