// 用户相关数据库操作
import db from '../index'
import md5 from 'md5'

function login(data) {
  return new Promise((resolve, reject) => {
    const sql = `SELECT password FROM user WHERE user_name = '${data.username}'`;
    db.query(sql).then((res) => {
      if (res[0].password === md5(data.password)) {
        resolve({ code: 0, msg: `Welcome ${data.username}` })
      } else {
        reject({ code: 1, msg: `Incorrect password or account` })
      }
    }).catch((err) => {
      reject({ code: 1, msg: `Incorrect password or account` })
    })
  })
}

function register(data) {
  const sql = `INSERT INTO user (user_name,password,nick_name,type) VALUES ('${data.username}','${md5(data.password)}','${data.nickname || ''}',2)`;
  return db.query(sql)
}

export default {
  login,
  register
}