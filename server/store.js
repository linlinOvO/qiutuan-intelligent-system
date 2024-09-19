/*
 初始化数据库

 */
const {createPool} = require('mysql');

// 要连接的数据库
const pool = createPool({
    host: "localhost",
    port: 3306, // default port for mysql is 3306
    user: "root",
    password: "password",
    connectionLimit: 10,
    timezone: 'cst', //<-- here
    multipleStatements: true
});

pool.query(
    'SELECT * FROM DaGuShan.oxygenDetection;',
    (error, results) => {
        if (error) {
            throw error;
        }
        // console.log(results)
    }
);


module.exports = pool
