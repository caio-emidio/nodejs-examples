var MongoClient = require('mongodb').MongoClient;
var BASE = 'EmployeeDB'
var url = `mongodb://localhost/${BASE}`;
MongoClient.connect(url, function(err,db){
    console.log("Connected");
    db.close();
});