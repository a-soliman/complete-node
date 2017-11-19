let asyncAdd = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(()=> {
			if( typeof a === 'number' && typeof b === 'number') {
				resolve(a + b);
			}
			else {
				reject('Arguments must be numbers');
			}

		}, 1500);
	});
}

asyncAdd(5, 'f')
	.then((data)=> {
		console.log(data);
	})
	.catch((message) => {
		console.log('Error: ', message)
	}
);
// let somePromise = new Promise((resolve, reject) => {
	
// 	setTimeout(()=> {
// 		//resolve('Hey, It worked!');
// 		reject('unable to fulfill promise');
// 	}, 2500)
// });

// somePromise.then((data)=> {
// 	console.log(data);
// }).catch((message) => {
// 	console.log(message)
// })