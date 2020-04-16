const Pool = require('pg').Pool;


const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'cloudmark_api',
  password: 'pass',
  port: 5432,
});

module.exports = pool;