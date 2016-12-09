// function getTemCallback(loc, call) {
// 	call(undefined, 78);
// 	call('City not found');
// }


// getTemCallback('Philadelphia', function (err, temp){
// 	if (err) {
// 		console.log('error', err);
// 	}
// 	else {
// 		console.log("success", temp);
// 	}
// });

// function getTemCallback(loc) {
// 	return new Promise(function(resolve, reject){

// 		setTimeout( function() {
// 			resolve(79);
// 			reject('not found');
// 		}, 1000);
		
// 	});
// }

// getTemCallback('Philadelphia').then(function(temp){
// console.log('promise success', temp);
// }, function(err) {
// console.log('promise error', err);
// } );

function addPromise (a,b) {
	return new Promise(function(resolve,reject){
		if (typeof a === 'number' && typeof b === 'number') {
			resolve(a+b);
		}
		else {
			reject("not a `nr`");
		}
	
	});
}

addPromise(3,9).then(function(sum){
	console.log('number= ', sum);
}, function(notOk) {
	console.log('not muber', notOk);
} )

addPromise(1,'s').then(function(sum){
	console.log('number= ', sum);
}, function(notOk) {
	console.log('not muber', notOk);
} )
