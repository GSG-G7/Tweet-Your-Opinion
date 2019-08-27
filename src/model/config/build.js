const dbConnection = require('./db_connection');
const { readFileSync } = require('fs');

const { join } = require('path');

const dbInit = readFileSync(join(__dirname,'build.sql')).toString();

dbConnection.query(dbInit);

