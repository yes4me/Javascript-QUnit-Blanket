/* ===========================================================================
Created:	2015/07/24
Author:		Thomas Nguyen - thomas_ejob@hotmail.com
Location:	https://github.com/yes4me/
Purpose:
	you will see how you can use helper functions to develop you tests
	You will also how see code written somewhere else (range.js) can be used to develop
	you test data.
=========================================================================== */

QUnit.config.testTimeout = 3000;
QUnit.begin(function(details) {
	console.log("step FIRST: Starting Tests: there are " + details.totalTests + " tests");
});
QUnit.log(function(details) {
	console.log("step 2: Asserting -- " + details.name + " (" + details.runtime + ")");
});
QUnit.done(function(details) {
	console.log("step LAST: Test Execution Ended in "+ details.runtime +" milliseconds");
	console.log("Passed / Failed (total assertions): " + details.passed + "/" +  details.failed +"("+ details.total +")");
});



QUnit.module( "removeDuplicates Tests");
QUnit.test('special cases', function(assert) {
	expect(3);
	assert.throws(function() { removeDuplicates() }, "no argument = undefined");
	assert.throws(function() { removeDuplicates('a') }, "argument not array = undefined");
	assert.throws(function() { removeDuplicates([1,2,3], [1,2,3]) }, "too many arguments = undefined");
});
QUnit.test('no duplicate value', function(assert) {
	expect(4);
	assert.deepEqual(removeDuplicates([1,2,3,4,5]), [1,2,3,4,5], "removeDuplicates([1,2,3,4,5]) == [1,2,3,4,5]");
	assert.deepEqual(removeDuplicates([-1,-2,-3,-4,-5]), [-1,-2,-3,-4,-5], "removeDuplicates([-1,-2,-3,-4,-5]) == [-1,-2,-3,-4,-5]");
	assert.deepEqual(removeDuplicates([-1,2,-3,4,8]), [-1,2,-3,4,8], "removeDuplicates([-1,2,-3,4,8]) == [-1,2,-3,4,8]");
	assert.deepEqual(removeDuplicates([-1.4,2.9,-3.2,4.4,-2.9]), [-1.4,2.9,-3.2,4.4,-2.9], "removeDuplicates([-1.4,2.9,-3.2,4.4,-2.9]) == [-1.4,2.9,-3.2,4.4,-2.9]");
});
QUnit.test('duplicate values', function(assert) {
	expect(6);
	assert.deepEqual(removeDuplicates([1,2,3,2,5]), [1,2,3,5], "removeDuplicates([1,2,3,2,5]) == [1,2,3,5]");
	assert.deepEqual(removeDuplicates([-1,-2,-3,-2,-5]), [-1,-2,-3,-5], "removeDuplicates([-1,-2,-3,-2,-5]) == [-1,-2,-3,-5]");
	assert.deepEqual(removeDuplicates([-1,2,-3,4,2]), [-1,2,-3,4], "removeDuplicates([-1,2,-3,4,2]) == [-1,2,-3,4]");
	assert.deepEqual(removeDuplicates([-1.4,2.9,-3.2,4.4,2.9]), [-1.4,2.9,-3.2,4.4], "removeDuplicates([-1.4,2.9,-3.2,4.4,2.9]) == [-1.4,2.9,-3.2,4.4]");
	assert.deepEqual(removeDuplicates([-1.4,2.9,2.9,2.9,-3.2,4.4,2.9]), [-1.4,2.9,-3.2,4.4], "removeDuplicates([-1.4,2.9,2.9,2.9,-3.2,4.4,2.9]) == [-1.4,2.9,-3.2,4.4]");
	assert.deepEqual(removeDuplicates([1,1,2,2,3,3,2,3,1,3]), [1,2,3], "removeDuplicates([1,1,2,2,3,3,2,3,1,3]) == [1,2,3]");
});



QUnit.module( "hasDuplicates Tests");
QUnit.test('special cases', function(assert) {
	expect(3);
	assert.throws(function() { hasDuplicates() }, "no argument = undefined");
	assert.throws(function() { hasDuplicates('a') }, "argument not array = undefined");
	assert.throws(function() { hasDuplicates([1,2,3], [1,2,3]) }, "too many arguments = undefined");
});
QUnit.test('no duplicate value', function(assert) {
	expect(4);
	assert.deepEqual( hasDuplicates([2,4,3,1]), false, "hasDuplicates([2,4,3,1] == false");
	assert.deepEqual( hasDuplicates([-2,-4,-3,-1]), false, "hasDuplicates([-2,-4,-3,-1] == false");
	assert.deepEqual( hasDuplicates([-2,-5,1,9]), false, "hasDuplicates([-2,-5,-5,9] == false");
	assert.deepEqual( hasDuplicates([-2.3,5.34,1.03,6.9,5.35,9]), false, "hasDuplicates([-2.3,5.34,1.03,6.9,5.35,9] == false");
});
QUnit.test('duplicate values', function(assert) {
	expect(4);
	assert.deepEqual( hasDuplicates([2,1,3,1]), true, "hasDuplicates([2,1,3,1] == true");
	assert.deepEqual( hasDuplicates([-2,-1,-3,-1]), true, "hasDuplicates([-2,-1,-3,-1] == true");
	assert.deepEqual( hasDuplicates([-2,-5,-5,9]), true, "hasDuplicates([-2,-5,1,9] == true");
	assert.deepEqual( hasDuplicates([-2.3,5.34,1.03,6.9,5.34,9]), true, "hasDuplicates([-2.3,5.34,1.03,6.9,5.34,9] == true");
});



QUnit.module( "areConsecutive Tests");
QUnit.test('special cases', function(assert) {
	expect(2);
	assert.throws(function() { areConsecutive() }, "no argument = undefined");
	assert.throws(function() { areConsecutive('a') }, "argument not array = undefined");
});
QUnit.test('positive values', function(assert) {
	expect(9);
	assert.deepEqual( areConsecutive([4]), true, "areConsecutive([4]) == true");
	assert.deepEqual( areConsecutive([3,4]), true, "areConsecutive([3,4]) == true");
	assert.deepEqual( areConsecutive([4,3]), true, "areConsecutive([4,3]) == true");
	assert.deepEqual( areConsecutive([4,4]), false, "areConsecutive([4,4]) == false");
	assert.deepEqual( areConsecutive([2,3,4]), true, "areConsecutive([2,3,4]) == true");
	assert.deepEqual( areConsecutive([4,3,2]), true, "areConsecutive([4,3,2]) == true");
	assert.deepEqual( areConsecutive([3,4,2]), false, "areConsecutive([4,3,2]) == false");
	assert.deepEqual( areConsecutive([4,2,3]), false, "areConsecutive([4,3,2]) == false");
	assert.deepEqual( areConsecutive([4,4,4]), false, "areConsecutive([4,4,4]) == false");
});
QUnit.test('negative values', function(assert) {
	expect(9);
	assert.deepEqual( areConsecutive([-4]), true, "areConsecutive([-4]) == true");
	assert.deepEqual( areConsecutive([-3,-4]), true, "areConsecutive([-3,-4]) == true");
	assert.deepEqual( areConsecutive([-4,-3]), true, "areConsecutive([-4,-3]) == true");
	assert.deepEqual( areConsecutive([-4,-4]), false, "areConsecutive([-4,-4]) == false");
	assert.deepEqual( areConsecutive([-2,-3,-4]), true, "areConsecutive([-2,-3,-4]) == true");
	assert.deepEqual( areConsecutive([-4,-3,-2]), true, "areConsecutive([-4,-3,-2]) == true");
	assert.deepEqual( areConsecutive([-3,-4,-2]), false, "areConsecutive([-4,-3,-2]) == false");
	assert.deepEqual( areConsecutive([-4,-2,-3]), false, "areConsecutive([-4,-3,-2]) == false");
	assert.deepEqual( areConsecutive([-4,-4,-4]), false, "areConsecutive([-4,-4,-4]) == false");
});
QUnit.test('positive and negative values', function(assert) {
	expect(6);
	assert.deepEqual( areConsecutive([-1,0,1]), true, "areConsecutive([-1,0,1]) == true");
	assert.deepEqual( areConsecutive([1,0,-1]), true, "areConsecutive([1,0,-1]) == true");
	assert.deepEqual( areConsecutive([1,-1,-3]), false, "areConsecutive([1,-1,-3]) == false");
	assert.deepEqual( areConsecutive([4.1,3.1,2.1]), true, "areConsecutive([4.1,3.1,2.1]) == true");
	assert.deepEqual( areConsecutive([-4.1,-3.1,-2.1]), true, "areConsecutive([-4.1,-3.1,-2.1]) == true");
	assert.deepEqual( areConsecutive([-3.1,-4.1,-2.1]), false, "areConsecutive([-4.1,-3.1,-2.1]) == false");
});
QUnit.test('positive and negative values NOT allowing duplicates', function(assert) {
	expect(6);
	assert.deepEqual( areConsecutive([0,1,2,2,3], false), false, "areConsecutive([0,1,2,2,3], false) == false");
	assert.deepEqual( areConsecutive([3,2,2,1,0], false), false, "areConsecutive([3,2,2,1,0], false) == false");
	assert.deepEqual( areConsecutive([-0,-1,-2,-2,-3], false), false, "areConsecutive([-0,-1,-2,-2,-3], false) == false");
	assert.deepEqual( areConsecutive([-3,-2,-2,-1,-0], false), false, "areConsecutive([-3,-2,-2,-1,-0], false) == false");
	assert.deepEqual( areConsecutive([-2,-1,0,1,1,2], false), false, "areConsecutive([-2,-1,0,1,1,2], false) == false");
	assert.deepEqual( areConsecutive([2,1,1,0,-1,-2], false), false, "areConsecutive([2,1,1,0,-1,-2], false) == false");
});
QUnit.test('positive and negative values allowing duplicates', function(assert) {
	expect(6);
	assert.deepEqual( areConsecutive([0,1,2,2,3], true), true, "areConsecutive([0,1,2,2,3], true) == true");
	assert.deepEqual( areConsecutive([3,2,2,1,0], true), true, "areConsecutive([3,2,2,1,0], true) == true");
	assert.deepEqual( areConsecutive([-0,-1,-2,-2,-3], true), true, "areConsecutive([-0,-1,-2,-2,-3], true) == true");
	assert.deepEqual( areConsecutive([-3,-2,-2,-1,-0], true), true, "areConsecutive([-3,-2,-2,-1,-0], true) == true");
	assert.deepEqual( areConsecutive([-2,-1,0,1,1,2], true), true, "areConsecutive([-2,-1,0,1,1,2], true) == true");
	assert.deepEqual( areConsecutive([2,1,1,0,-1,-2], true), true, "areConsecutive([2,1,1,0,-1,-2], true) == true");
});