const mysql = require('mysql')

const db = mysql.createPool({
  host: 'IP地址',
  user: '用户名',
  password: '密码',
  database: '数据库名字',
})

module.exports = db
