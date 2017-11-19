let somePromise = new Promise((resolve, reject) => {
	
	setTimeout(()=> {
		//resolve('Hey, It worked!');
		reject('unable to fulfill promise');
	}, 2500)
});

somePromise.then((data)=> {
	console.log(data);
}).catch((message) => {
	console.log(message)
})