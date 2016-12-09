var names = ['a', 's', 'c', 'd'];

// names.forEach( function (name) {
// 	console.log('forEach',name);
// }); 


// names.forEach( (name) => {
// 	console.log('arrowFunc', name);
// } );

// names.forEach( (name) => console.log(name) );

// var returnMe = (name) => name + '!';
// console.log( returnMe('Marcin'));

var person = {
	name: 'Marcin',
	greet: function () {
		names.forEach( (name) => {
			console.log(this.name + ' says hi to ' + name)
		});
	}
};


// .bind(this)

// var person = {
// 	name: 'Marcin',
// 	greet: function () {
// 		// var that = this;


// 		names.forEach( function(name) {
// 			console.log(this.name + ' says hi to ' + name)
// 		}.bind(this) );
// 	}
// };

// person.greet();

function add(a,b) {
	return a + b;
}

var addStatement = (a,b) => {
	return a + b;
}

var addExpresion = (a,b ) => a + b;

console.log(addStatement(7,13));
console.log(addStatement(50,13));

console.log(addExpresion(3,-20));

// console.log(add(1,3));
// console.log(add(9,0));