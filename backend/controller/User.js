const { execTrans } = require("../db/DB");
const { _getNewSqlParamEntity } = require("../db/DBHelper");

class UserController {
    insert = (public_address, nonce, callback) => {
        let sql = `INSERT INTO user(public_address, nonce) VALUES(?,?)`;

        execTrans([
            _getNewSqlParamEntity(sql, [public_address, nonce])
        ], callback)
    }

    update = (public_address, nonce, callback) => {
        let sql = `UPDATE user SET nonce = ? WHERE public_address = ?`;

        execTrans([
            _getNewSqlParamEntity(sql, [nonce, public_address])
        ], callback)
    }

    query = (public_address, callback) => {
        let sql = `SELECT * FROM user WHERE public_address = ?`;

        execTrans([
            _getNewSqlParamEntity(sql, [public_address])
        ], callback);
    }
}

module.exports = new UserController();