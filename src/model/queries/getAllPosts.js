const dbConnection = require('../config/db_connection');

const getAllPosts = () => dbConnection.query('SELECT * FROM post inner join client on post.user_id=client.user_id');

module.exports = getAllPosts;
