var Promise = require('promise');
var MongoClient = require('mongodb').MongoClient;
var BASE = 'EmployeeDB'
var url = `mongodb://localhost/${BASE}`;

MongoClient.connect(url)
    .then(function(err, db) {
        db.collection('Employee').updateOne({
            "EmployeeName": "Martin"
        }, {
            $set: {
                "EmployeeName": "Mohan"
            }
        });
    }); 