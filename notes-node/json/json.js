let obj = {
	name: 'Andrew'
};

let stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);
let backToObj = JSON.parse(stringObj);
console.log(typeof backToObj)