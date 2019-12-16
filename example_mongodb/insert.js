var MongoClient = require('mongodb').MongoClient;
var BASE = 'EmployeeDB'
var url = `mongodb://localhost/${BASE}`;
MongoClient.connect(url, function(err, db) {

    db.collection('Employee').insertOne({
        Employeeid: 4,
        EmployeeName: "NewEmployee"
    });
}); 