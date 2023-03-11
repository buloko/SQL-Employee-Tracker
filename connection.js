const mysql = require('mysql2');
const cTable = require('console.table');
require('dotenv').config();

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: process.env.DB_USER,

        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
       
        
    },
    console.log("Connected to the database!")
);

module.exports= db;