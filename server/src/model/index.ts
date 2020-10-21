import mysql from 'mysql'
const db: { query: (sqlstr: string) => Promise<any> } = {
  query: () => Promise.resolve()
}
const mysqlConnection = mysql.createConnection({//创建mysql实例'127.0.0.1','3306','root','123456','uCode'
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: '123456',
  database: 'uCode'
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  }else{
    mysqlConnection.query(`CREATE TABLE IF NOT EXISTS user (
      id int AUTO_INCREMENT,
      user_name VARCHAR(50) NOT NULL,
      password VARCHAR(50) NOT NULL,
      nick_name VARCHAR(50) DEFAULT '',
      create_time timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
      update_time timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      type int,
      PRIMARY KEY (id)
    )CHARSET=utf8;`)
  }
});

db.query = (sqlstr): Promise<any> => {
  return new Promise((resolve, reject) => {
    mysqlConnection.query(sqlstr, (err: any, result: any) => {
      if (err) {
        reject(err)
      } else {
        resolve(result);
      }
    })
  })
}

export default db