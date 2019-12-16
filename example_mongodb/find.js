var MongoClient = require('mongodb').MongoClient;
var BASE = 'EmployeeDB'
var url = `mongodb://localhost/${BASE}`;

MongoClient.connect(url, function(err, db) {

    var cursor = db.collection('Employee').find();

    cursor.each(function(err, doc) {

        console.log(doc);

    });
}); 