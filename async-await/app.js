const users = [{
	id: 1,
	name: 'ahmed',
	schoolId: 101
},
{
	id: 2,
	name: 'Mike',
	schoolId: 999
}];


const grads = [{
	id: 1,
	schoolId: 101,
	grade: 86
},
{
	id: 2,
	schoolId: 999,
	grade: 96
},
{
	id: 3,
	schoolId: 101,
	grade: 55
}];

const getUser = ( id ) => {
	return new Promise((resolve, reject) => {
		const user = users.find((user) => user.id === id );

		if ( user ) {
			resolve(user);
		}
		else {
			reject(`Unable to find user with id: ${id}`);
		}
	});
};

const getGrades = ( schoolId ) => {
	return new Promise(( resolve, reject ) => {
		const gradsArr = grads.filter(( grade ) => grade.schoolId === schoolId );

		resolve(gradsArr)
	});
};

getUser(1)
	.then((user) => {
		console.log(user)
	})
	.catch((e) => {
		console.log(e);
	})

getGrades(9995)
	.then((grads) => {
		console.log(grads);
	})