const { readFileSync } = require('fs');

const { join } = require('path');
const dbConnection = require('./db_connection');

const dbInit = readFileSync(join(__dirname, 'build.sql')).toString();

module.exports = dbConnection.query(dbInit);
