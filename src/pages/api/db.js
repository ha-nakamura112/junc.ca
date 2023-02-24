// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }


import mysql from 'mysql';

export default (req, res) => {
  // データベース接続の設定
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'junc_db'
  });

  // データベースにクエリを送信
  connection.query('SELECT * FROM users', (error, results, fields) => {
    if (error) throw error;
    res.status(200).json(results);
  });

  // データベース接続を切断
  connection.end();
};
