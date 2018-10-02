onst { Pool, Client } = require('pg')
const connectionString = 'postgres://kmtybgrw:WjqXY18ishmZYWaGHAVTpwBMZ6rcC9eK@pellefant.db.elephantsql.com:5432/kmtybgrw'

const pool = new Pool({
  connectionString: connectionString,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

const client = new Client({
  connectionString: connectionString,
})
client.connect()

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})