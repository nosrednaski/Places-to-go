// - Import (require) connection.js into orm.jsX
// - In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
//   - selectAll()
//   - insertOne()
//   - updateOne()
// - Export the ORM object in module.exports.X

const connection = require("../config/connection.js");

const orm = {
    selectAll: function(tableInput, cb) {
      let queryString = `SELECT * FROM places`;
      connection.query(queryString, function(err, res) {
        if (err) {
          throw err;
        }
        cb(res);
      });
    },
    insertOne: function(table, cols, cb) {
      let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (?)`
      connection.query(queryString, function(err, res) {
        if(err) {
            throw err;
        }
        cb(res);
      });
    },
    updateOne: function(table, val, condition, cb) {
        let queryString = `UPDATE ${table} SET ${val} WHERE ${condition}`
        connection.query(queryString, function(err, res) {
            if(err) {
                throw err;
            }
            cb(res);
        });
    }
};

module.exports = orm;