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


QUnit.test('removeDuplicates Tests', function(assert){
	//expect(44);

	assert.throws(function(){ removeDuplicates() }, "no argument = undefined")
	assert.throws(function(){ removeDuplicates('a') }, "argument not array = undefined")
	assert.throws(function(){ removeDuplicates([1,2,3], [1,2,3]) }, "too many arguments = undefined")
	assert.deepEqual(removeDuplicates([1,2,3,4,5]), [1,2,3,4,5], "removeDuplicates([1,2,3,4,5]) == [1,2,3,4,5]");
	assert.deepEqual(removeDuplicates([1,2,3,2,5]), [1,2,3,5], "removeDuplicates([1,2,3,2,5]) == [1,2,3,5]");
});
QUnit.test('hasDuplicates Tests', function(assert){
	//expect(44);

	assert.throws(function(){ hasDuplicates() }, "no argument = undefined")
	assert.throws(function(){ hasDuplicates('a') }, "argument not array = undefined")
	assert.throws(function(){ hasDuplicates([1,2,3], [1,2,3]) }, "too many arguments = undefined")
	assert.deepEqual( hasDuplicates([2,1,3,1]), true, "hasDuplicates([2,1,3,1] == true")
	assert.deepEqual( hasDuplicates([2,4,3,1]), false, "hasDuplicates([2,4,3,1] == false")
});

QUnit.test('areConsecutive Tests', function(assert){
	//expect(44);

	assert.throws(function(){ areConsecutive() }, "no argument = undefined")
	assert.throws(function(){ areConsecutive('a') }, "argument not array = undefined")
	assert.deepEqual( areConsecutive([1,2,3], true), [1,2,3], "areConsecutive([1,2,3], true) == [1,2,3]")
	assert.deepEqual( areConsecutive([1,2,3], false), [1,2,3], "areConsecutive([1,2,3], false) == [1,2,3]")
	assert.deepEqual( areConsecutive([1,2,3], [1,2,3]), [1,2,3], "areConsecutive([1,2,3], [1,2,3]) == [1,2,3]")
});