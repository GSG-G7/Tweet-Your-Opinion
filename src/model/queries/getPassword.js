const dbConnection = require('../config/db_connection');


const getPassword = (username) => {
  const sql = {
    text: 'SELECT password FROM client WHERE username=$1',
    values: [username],
  };

  return dbConnection.query(sql);
};
module.exports = getPassword;
