const dbConnection = require('../config/db_connection');

exports.getUserId = (username) => dbConnection.query({
  text: 'SELECT user_id FROM client WHERE username=$1',
  values: [username],
});


exports.queryAddPost = (object, userId) => {
  const { 'post-text': postText, 'post-category': postCategory, 'post-img': postImg } = object;

  const sql = {
    text: 'INSERT INTO post(category,content,img_url,user_id) VALUES($1,$2,$3,$4)',
    values: [
      postCategory,
      postText,
      postImg,
      userId,
    ],
  };

  return dbConnection.query(sql);
};
