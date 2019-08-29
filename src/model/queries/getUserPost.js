const dbConnection = require('../config/db_connection');


const getUserPost = (id) => {
  const sql = {
    text: 'SELECT * FROM post WHERE user_id =$1',
    values: [id],
  };

  return dbConnection.query(sql);
};
module.exports = getUserPost;
