const inquirer = require('inquirer');
const express = require('express');
// import and require mysql2
const mysql = require('mysql2');

const table = require('console.table')

require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        password: 'Kansasis123@',
        database: 'company_db'
       
        
    },
);
