/* ===========================================================================
Created:	2015/07/20
Author:		Thomas Nguyen - thomas_ejob@hotmail.com
Location:	https://github.com/yes4me/
Inspired:	http://code.tutsplus.com/tutorials/how-to-test-your-javascript-code-with-qunit--net-9077
=========================================================================== */

function isEven(val) {
	return val % 2 === 0;
}
function sum() {
	var total = 0,
	num = 0,
	numArgs = arguments.length;

	if (numArgs === 0) {
		throw new Error('Arguments expected');
	}

	for (var i = 0; i < numArgs; i++) {
		num = arguments[i];
		if (typeof (num) !== 'number') {
			throw new Error('Only numbers are allowed but found ', typeof (num));
		}
		total += num;
	}
	return total;
}