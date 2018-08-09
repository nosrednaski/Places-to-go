//   - selectAll()
//   - insertOne()
//   - updateOne() 

const orm = require("../config/orm.js");

const place = { 
    selectAll: function(cb) {
        orm.selectAll("places", function(res) {
            cb(res);
        });
    },
    insertOne: function (cols, cb) {
        orm.insertOne("places", cols, function(res) {
            cb(res);
        });
    },
    updateOne: function(val, condition, cb) {
        orm.updateOne("places", val, condition, function(res) {
            cb(res);
        })
    }
};

module.exports = place;