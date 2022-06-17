var mysql = require('mysql')
var async = require('async');


/**
 * 
 * @param {*} sqlparamsEntities 
 * @param {*} callback 
 */
function execTrans(sqlparamsEntities, callback) {
    let pool = mysql.createPool({
        host: "doorian.co9qgfr0rub2.ap-northeast-2.rds.amazonaws.com",
        user: "kkm0585",
        password: "rudals0586",
        database: "NFTproject",
        port: "3306",
        maxConnLimit: 60,
        waitForConnections: false
    });
    pool.getConnection(function (err, connection) {
        if (err) {
            return callback(err, null);
        }
        connection.beginTransaction(function (err) {
            if (err) {
                return callback(err, null);
            }

            var funcAry = [];
            sqlparamsEntities.forEach(function (sql_param) {
                var temp = function (cb) {
                    var sql = sql_param.sql;
                    var param = sql_param.params;
                    connection.query(sql, param, function (tErr, rows, fields) {
                        if (tErr) {
                            connection.rollback(function () {
                                console.log("事务失败，" + sql_param + "，ERROR：" + tErr);
                                return cb(tErr, null);
                            });
                        } else {
                            return cb(null, rows);
                        }
                    })
                };
                funcAry.push(temp);
            });

            async.series(funcAry, function (err, result) {
                if (err) {
                    connection.rollback(function (err1) {
                        console.log("transaction error: " + err);
                        connection.release();
                        return callback(err, null);
                    });
                } else {
                    connection.commit(function (err, info) {
                        // console.log("transaction info: " + JSON.stringify(info));
                        if (err) {
                            console.log("执行事务失败，" + err);
                            connection.rollback(function (err1) {
                                console.log("transaction error: " + err);
                                connection.release();
                                return callback(err, null);
                            });
                        } else {
                            connection.release();
                            return callback(null, result);
                        }
                    })
                }
            })
        });
    });
}

module.exports = {
    execTrans
}