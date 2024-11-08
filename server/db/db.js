const { Pool } = require('pg');

const db = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'todoappl_db',
    password: '',
    port: 5432,
})

module.exports = db