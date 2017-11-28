const MongoClient = require('mongodb').MongoClient;

const dbURL = 'mongodb://ahmed_soliman:abc123@ds123556.mlab.com:23556/node-todo-api';


MongoClient.connect(dbURL, ( err, db ) => {
	if( err ) {
		return console.log('Unable to connect to DB');
	}
	console.log('Succssefully Connected to DB');

	db.collection('Todos').find().toArray().then((docs) => {
		console.log( JSON.stringify(docs, null, 2 ));
	}, ( err ) => {
		console.log('An error has occured!');
	})

	

	db.close()

});
// MongoClient.connect(dbURL, (err, db) => {
// 	if( err ) {
// 		return console.log('Unable to connect to MongoDB server.');
// 	}
// 	console.log('Connected to MongoDB.');

// 	db.collection('Todos').find().toArray().then((docs) => {
// 		console.log(docs);
// 	}, ( err ) => {
// 		console.log('An error has occured ', err);
// 	})

// 	db.close();
// });