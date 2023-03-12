const inquirer = require('inquirer');
const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        PORT: 3001,
        // MySQL username,
        user: process.env.DB_USER,

        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
       
        
    },
    console.log("Connected to the database!")
);

module.exports = db;





