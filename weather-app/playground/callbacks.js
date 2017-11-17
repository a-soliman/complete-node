let getUser = (id, callback) => {
	let user = {
		id: id,
		name: 'John'
	};

	setTimeout(()=> {
		callback(user);
	}, 3000)
};

getUser(13, (user) => {
	console.log(user);
});

