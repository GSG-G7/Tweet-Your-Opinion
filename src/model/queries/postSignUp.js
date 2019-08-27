const dbConnection = require('../config/db_connection');

const postSignUp = (data) => {
  const {
    username, email, password, date_of_birth: DOB, mobile_no: mobileNo,
  } = data;
  const sql = {
    text: 'INSERT INTO client (username,email,password,date_of_birth,mobile_no) VALUES ($1,$2,$3,$4,$5)',
    values: [
      username,
      email,
      password,
      DOB,
      mobileNo,
    ],
  };
  return dbConnection.query(sql);
};

module.exports = { postSignUp };
