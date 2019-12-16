var BASE = 'EmployeeDB'
var url = `mongodb://localhost/${BASE}`;

MongoClient.connect(url, function(err, db) {

    db.collection('Employee').updateOne({
        "EmployeeName": "NewEmployee"
    }, {
        $set: {
            "EmployeeName": "Mohan"
        }
    });
}); 