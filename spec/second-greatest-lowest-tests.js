/* ===========================================================================
Created:	2015/07/22
Author:		Thomas Nguyen - thomas_ejob@hotmail.com
Location:	https://github.com/yes4me/
Purpose:	Learning QUnit - https://api.qunitjs.com/category/assert/
=========================================================================== */

QUnit.config.testTimeout = 3000;


QUnit.test('Range Tests', function(assert){
	expect(14);
	assert.deepEqual(compute([3]), undefined, "1 number = undefined")
	assert.deepEqual(compute([]), undefined, "0 number = undefined")
	assert.throws(function(){ compute([1,2,3,4], [1,2,3,4]) }, "throw exception when using 2 arguments")
	assert.throws(function(){ compute('a') }, "throw exception error when not an array")

	assert.deepEqual(compute([1,2,3,4]), [2,3], "4 positive numbers in order")
	assert.deepEqual(compute([4,3,2,1]), [2,3], "4 positive numbers in various order")
	assert.deepEqual(compute([-4,-2,-3,-1]), [-3,-2], "4 negative numbers in various order")
	assert.deepEqual(compute([4,-3,-2,1]), [-2,1], "2 positive numbers & 2 negative numbers")
	assert.deepEqual(compute([3,3,3,3]), [3,3], "4 identical positive numbers")
	assert.deepEqual(compute([-3,-3,-3,-3]), [-3,-3], "4 identical negative numbers")
	assert.deepEqual(compute([4,2,3,4]), [3,4], "4 positive numbers in order")
	assert.deepEqual(compute([1,2,3,1]), [1,2], "4 positive numbers in order")
	assert.deepEqual(compute([3,-3,2]), [2,2], "3 numbers")
	assert.deepEqual(compute([3,-3]), [-3,3], "2 numbers")
});