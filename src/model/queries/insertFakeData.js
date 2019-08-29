const dbConnection = require('../config/db_connection');


const text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ut repudiandae eos, vel corporis adipisci magnam maxime dolores modi cupiditate voluptas perferendis inventore consequatur, eius mollitia quia. Aut, a accusantium.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ut repudiandae eos, vel corporis adipisci magnam maxime dolores modi cupiditate voluptas perferendis inventore consequatur, eius mollitia quia. Aut, a accusantium.';

const imgUrl = 'https://www.lovestemsd.org/sites/default/files/sd-science-festival-2019.png';

const sql = `INSERT INTO client (username,email,password,date_of_birth,mobile_no) VALUES
    ('FadiAa','fadi@gmail.com',123456789,'12/12/1994',12345678),
    ('MossaA','mossa@gmail.com',123456789,'12/12/1994',12345678),
    ('AlaaAa','alaa@gmail.com',123456789,'12/12/1994',12345678),
    ('AsemAa','asem@gmail.com',123456789,'12/12/1994',12345678);
    INSERT INTO post(category,content,img_url,user_id) VALUES
    ('Science','${text}','${imgUrl}',1),
    ('Science','${text}','${imgUrl}',1),
    ('Science','${text}','${imgUrl}',1),
    ('Science','${text}','${imgUrl}',1),
    ('Science','${text}','${imgUrl}',1),
    ('Science','${text}','${imgUrl}',1),
    ('Science','${text}','${imgUrl}',2),
    ('Science','${text}','${imgUrl}',2),
    ('Science','${text}','${imgUrl}',2),
    ('Science','${text}','${imgUrl}',2),
    ('Science','${text}','${imgUrl}',2),
    ('Science','${text}','${imgUrl}',2),
    ('Science','${text}','${imgUrl}',3),
    ('Science','${text}','${imgUrl}',3),
    ('Science','${text}','${imgUrl}',3),
    ('Science','${text}','${imgUrl}',3),
    ('Science','${text}','${imgUrl}',3),
    ('Science','${text}','${imgUrl}',3);
    `;

module.exports = dbConnection.query(sql);
