let db = require('./db');


module.exports.handleSignup = (email, password) => {
	// check if the emial exists

	db.saveUser({ email, password });

	// send welcome email
};