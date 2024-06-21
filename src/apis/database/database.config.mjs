import mysql from 'mysql2/promise';
// const mysql = require('mysql2');
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'be_sgroup',
//   });

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'be_sgroup',
// });

  //   try{
  //   const [results, fields] = await connection.query('SELECT * FROM `user`');
  //   console.log('Query Results:', results);
  //   console.log('Query Fields:', fields);
  //   const insertQuery = `INSERT INTO user (id, name, email, password, gender, age) VALUES (?, ?, ?, ?, ?, ?)`;
  //   const insertValues = ['4', 'Phuc Truong Xuan', 'user4@gmail.com', '123456', '1', '21'];
  //   await connection.query(insertQuery, insertValues);
  //   console.log("Record inserted successfully");
  // } catch (err) {
  //   console.error('Error:', err);
  // } finally {
  //   await connection.end();
  // }
  // connection.connect(error => {
  //   if (error) {
  //       console.error('Database connection failed: ' + error.stack);
  //       return;
  //   }
  //   console.log('Connected to database.');
  // });

  // connection.query(
  //   'SELECT * FROM `user`',
  //   function (err, results, fields) {
  //     console.log(results); // results contains rows returned by server
  //     console.log(fields); // fields contains extra meta data about results, if available
  //   }
  // );
              
  // RAWS
  // QUERRY BUILDER - Nằm giữa ORM và câu lệnh SQL - Key word "knex"
  // ORM = Object Relationship Mapping - Key word "sequelize"

  const pool = mysql.createPool({
    host: 'localhost',  // Thay đổi với thông tin host của bạn
    user: 'root',       // Thay đổi với thông tin user của bạn
    password: '', // Thay đổi với thông tin password của bạn
    database: 'be_sgroup',  // Thay đổi với thông tin database của bạn
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection((err, connection) => {
  if (err) {
      if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.');
      }
      if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections.');
      }
      if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused.');
      }
  }
  
  if (connection) console.log("Connect Success"); connection.release();
  
  return;
  }
);

export default pool;