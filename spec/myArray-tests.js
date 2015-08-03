/* =====================================================================================
Created:	2015/07/24
Author:		Thomas Nguyen - thomas_ejob@hotmail.com
Location:	https://github.com/yes4me/
Purpose:
	you will see how you can use helper functions to develop you tests
	You will also how see code written somewhere else (range.js) can be used to develop
	you test data.
===================================================================================== */

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
var myArray;



QUnit.module("Range Tests", {
	beforeEach : function() {
		console.log("beforeEach: Starting Range test");
		myArray = new MyArray();
	},
	afterEach: function() {
		console.log("afterEach: test Range completed");
		myArray = null;
	}
});
QUnit.test('special cases', function(assert) {
	expect(11);

	// The first two arguments are required, skipping them returns undefined
	assert.equal( myArray.range(), undefined, 'Range invoked with no arguments results in undefined');
	assert.equal( myArray.range(1), undefined, 'Range invoked with just one argument results in undefined');

	// Make sure that this is a valid range
	assert.equal( myArray.range(3,2,1), undefined, 'For positive values of step, start must be smaller than end');
	assert.equal( myArray.range(2,4,-1), undefined, 'For negative value of step, start must be smaller than end');

	// Step == 0 results in undefined
	assert.equal( myArray.range(2,5,0), undefined, 'Step == 0 results in undefined');

	assert.equal( myArray.range(5,1,1), undefined, " myArray.range(5,1,1) == undefined (results in infinite sequence)");
	assert.equal( myArray.range(5,-6,1), undefined, " myArray.range(5,-6,1) == undefined (results in infinite sequence)");
	assert.equal( myArray.range(-2,-6,1), undefined, " myArray.range(-2,-6,1) == undefined (results in infinite sequence)");
	assert.equal( myArray.range(1,5,-1), undefined, " myArray.range(1,5,-1) == undefined (results in infinite sequence)");
	assert.equal( myArray.range(-6,5,-1), undefined, " myArray.range(-6,5,-1) == undefined (results in infinite sequence)");
	assert.equal( myArray.range(-6,-2,-1), undefined, " myArray.range(-6,-2,-1) == undefined (results in infinite sequence)");
});
QUnit.test('typical values - step is skipped', function(assert) {
	expect(9);

	// Step is skipped, we deduce the step from start and end
	// test # 1: start == end
	// Test # 2: start < end
	// Test # 3: start > end
	assert.deepEqual( myArray.range(3,3), [3], 'If start and end are same, we return the single element array');
	assert.deepEqual( myArray.range(0,0), [0], 'If start and end are same, we return the single element array');
	assert.deepEqual( myArray.range(-3,-3), [-3], 'If start and end are same, we return the single element array');

	// Step is skipped, provide negative and positive values for range
	assert.deepEqual( myArray.range(2,6), [2,3,4,5,6], 'Skip step.  myArray.range(2,6) == [2,3,4,5,6]');
	assert.deepEqual( myArray.range(6,2), [6,5,4,3,2], 'Skip step.  myArray.range(6,2) == [6,5,4,3,2]');
	assert.deepEqual( myArray.range(-2,2), [-2,-1,0,1,2], 'Skip step.  myArray.range(-2,2) == [-2,-1,0,1,2]');
	assert.deepEqual( myArray.range(2,-2), [2,1,0,-1,-2], 'Skip step. start == 2, end == -2. Expect: [2,1,0,-1,-2]');
	assert.deepEqual( myArray.range(-2,-6), [-2,-3,-4,-5,-6], 'Skip step.  myArray.range(-2,-6) == [-2,-3,-4,-5,-6]');
	assert.deepEqual( myArray.range(-6,-2), [-6,-5,-4,-3,-2], 'Skip step.  myArray.range(-6,-2) == [-6,-5,-4,-3,-2]');
});
QUnit.test('typical values - step is provided', function(assert) {
	expect(24);

	// provide step == -1. Valid and invalid range
	assert.deepEqual( myArray.range(2,6,1), [2,3,4,5,6], 'step=1  myArray.range(2,6,1) == [2,3,4,5,6]');
	assert.deepEqual( myArray.range(-2,2,1), [-2,-1,0,1,2], 'step=1  myArray.range(-2,2,1) == [-2,-1,0,1,2]');
	assert.deepEqual( myArray.range(-6,-2,1), [-6,-5,-4,-3,-2], 'step=1  myArray.range(-6,-2,1) == [-6,-5,-4,-3,-2]');
	assert.deepEqual( myArray.range(6,2,-1), [6,5,4,3,2], 'step=-1  myArray.range(6,2,-1) == [6,5,4,3,2]');
	assert.deepEqual( myArray.range(2,-2,-1), [2,1,0,-1,-2], 'step=-1  myArray.range(2,-2,-1) == [2,1,0,-1,-2]');
	assert.deepEqual( myArray.range(-2,-6,-1), [-2,-3,-4,-5,-6], 'step=-1  myArray.range(-2,-6,-1) == [-2,-3,-4,-5,-6]');

	// +ve step
	assert.deepEqual( myArray.range(1,9,2), [1,3,5,7,9], " myArray.range(1,9,2) == [1,3,5,7,9]");
	assert.deepEqual( myArray.range(1,3,15), [1], " myArray.range(1,3,15) == [1]");
	assert.deepEqual( myArray.range(1,8,2.5), [1,3.5,6], " myArray.range(1,8,2.5) == [1,3.5,6]");
	assert.deepEqual( myArray.range(-4,6,2), [-4,-2,0,2,4,6], " myArray.range(-4,6,2), [-4,-2,0,2,4,6]");
	assert.deepEqual( myArray.range(-4,6,15), [-4], " myArray.range(-4,6,15) == [-4]");
	assert.deepEqual( myArray.range(-6,-2,2), [-6,-4,-2], " myArray.range(-6,-2,2) == [-6,-4,-2]");
	assert.deepEqual( myArray.range(-4,5,2.5), [-4,-1.5,1,3.5], " myArray.range(-4,5,2.5) == [-4,-1.5,1,3.5]");
	assert.deepEqual( myArray.range(-6,-2,15), [-6], " myArray.range(-6,-2,15) == [-6]");
	assert.deepEqual( myArray.range(-2,-6,-2.5), [-2,-4.5], " myArray.range(-2,-6,-2.5) == [-2,-4.5]");

	// -ve step
	assert.deepEqual( myArray.range(9,1,-2), [9,7,5,3,1], " myArray.range(9,1,-2) == [9,7,5,3,1]");
	assert.deepEqual( myArray.range(3,1,-15), [3], " myArray.range(3,1,-15) == [3]");
	assert.deepEqual( myArray.range(8,1,-2.5), [8,5.5,3], " myArray.range(8,1,-2.5) == [8,5.5,3]");
	assert.deepEqual( myArray.range(6,-4,-2), [6,4,2,0,-2,-4], " myArray.range(6,-4,-2) == [6,4,2,0,-2,-4]");
	assert.deepEqual( myArray.range(6,-4,-15), [6], " myArray.range(6,-4,-15) == [6]");
	assert.deepEqual( myArray.range(-2,-6,-2), [-2,-4,-6], " myArray.range(-2,-6,-2), [-2,-4,-6]");
	assert.deepEqual( myArray.range(5,-4,-2.5), [5,2.5,0,-2.5], " myArray.range(6,-5,-2.5) == [6,3.5,1,-1.5,-4]");
	assert.deepEqual( myArray.range(-2,-6,-15), [-2], "step=15  myArray.range(-2,-6,-15) == [-2]");
	assert.deepEqual( myArray.range(-6,-2,2.5), [-6,-3.5], " myArray.range(-2,-6,-2.5) == [-2,-4.5]");
});
QUnit.test('Others', function(assert) {
	expect(6);
	assert.deepEqual( myArray.range(2,6), [2,3,4,5,6], 'If step is skipped and if start < end we get increasing array');
	assert.deepEqual( myArray.range(6,2), [6,5,4,3,2], 'If step is skipped and if start > end we get decreasing array');

	assert.deepEqual( myArray.range(-2,2), [-2,-1,0,1,2], 'Skip step. start == -2, end == 2. Expect: [-2,-1,0,1,2]');
	assert.deepEqual( myArray.range(2,-2), [2,1,0,-1,-2], 'Skip step. start == 2, end == -2. Expect: [2,1,0,-1,-2]');

	// Provide step == 1. valid range
	assert.deepEqual( myArray.range(1,5,1), [1,2,3,4,5], " myArray.range(1,5,1) == [1,2,3,4,5]");
	assert.equal( myArray.range(5,1,1), undefined, "tange(5,1,1) == undefined (results in infinite sequence)");
});



QUnit.module("removeDuplicates Tests", {
	beforeEach : function() {
		console.log("beforeEach: Starting removeDuplicates test");
		myArray = new MyArray();
	},
	afterEach: function() {
		console.log("afterEach: test removeDuplicates completed");
		myArray = null;
	}
});
QUnit.test('special cases: MyArray is defined', function(assert) {
	expect(6);
	myArray = new MyArray([1,2,3,1]);
	assert.deepEqual( myArray.removeDuplicates(), [1,2,3], "default parameters is used");
	assert.deepEqual( myArray.removeDuplicates('a'), [1,2,3], "default parameters is used");

	myArray.setArray([5,4,2,2,3,1]);
	assert.deepEqual( myArray.removeDuplicates(), [5,4,2,3,1], "default parameters is used");
	assert.deepEqual( myArray.removeDuplicates('a'), [5,4,2,3,1], "default parameters is used");

	myArray.setArray('asd');
	assert.deepEqual( myArray.removeDuplicates(), [5,4,2,3,1], "default parameters is used");
	assert.deepEqual( myArray.removeDuplicates('a'), [5,4,2,3,1], "default parameters is used");
});
QUnit.test('special cases: MyArray is undefined', function(assert) {
	expect(4);
	assert.throws(function() { myArray.removeDuplicates() }, "no argument = undefined");
	assert.throws(function() { myArray.removeDuplicates('a') }, "argument not array = undefined");
	assert.throws(function() { myArray.removeDuplicates([]) }, "argument is empty array");
	assert.deepEqual( myArray.removeDuplicates([1,2,3], 'xxx', [4,5,6]), [1,2,3], "all additional parameters are skipped");
});
QUnit.test('no duplicate value', function(assert) {
	expect(4);
	assert.deepEqual( myArray.removeDuplicates([1,2,3,4,5]), [1,2,3,4,5], "removeDuplicates([1,2,3,4,5]) == [1,2,3,4,5]");
	assert.deepEqual( myArray.removeDuplicates([-1,-2,-3,-4,-5]), [-1,-2,-3,-4,-5], "removeDuplicates([-1,-2,-3,-4,-5]) == [-1,-2,-3,-4,-5]");
	assert.deepEqual( myArray.removeDuplicates([-1,2,-3,4,8]), [-1,2,-3,4,8], "removeDuplicates([-1,2,-3,4,8]) == [-1,2,-3,4,8]");
	assert.deepEqual( myArray.removeDuplicates([-1.4,2.9,-3.2,4.4,-2.9]), [-1.4,2.9,-3.2,4.4,-2.9], "removeDuplicates([-1.4,2.9,-3.2,4.4,-2.9]) == [-1.4,2.9,-3.2,4.4,-2.9]");
});
QUnit.test('duplicate values', function(assert) {
	expect(6);
	assert.deepEqual( myArray.removeDuplicates([1,2,3,2,5]), [1,2,3,5], "removeDuplicates([1,2,3,2,5]) == [1,2,3,5]");
	assert.deepEqual( myArray.removeDuplicates([-1,-2,-3,-2,-5]), [-1,-2,-3,-5], "removeDuplicates([-1,-2,-3,-2,-5]) == [-1,-2,-3,-5]");
	assert.deepEqual( myArray.removeDuplicates([-1,2,-3,4,2]), [-1,2,-3,4], "removeDuplicates([-1,2,-3,4,2]) == [-1,2,-3,4]");
	assert.deepEqual( myArray.removeDuplicates([-1.4,2.9,-3.2,4.4,2.9]), [-1.4,2.9,-3.2,4.4], "removeDuplicates([-1.4,2.9,-3.2,4.4,2.9]) == [-1.4,2.9,-3.2,4.4]");
	assert.deepEqual( myArray.removeDuplicates([-1.4,2.9,2.9,2.9,-3.2,4.4,2.9]), [-1.4,2.9,-3.2,4.4], "removeDuplicates([-1.4,2.9,2.9,2.9,-3.2,4.4,2.9]) == [-1.4,2.9,-3.2,4.4]");
	assert.deepEqual( myArray.removeDuplicates([1,1,2,2,3,3,2,3,1,3]), [1,2,3], "removeDuplicates([1,1,2,2,3,3,2,3,1,3]) == [1,2,3]");
});



QUnit.module("hasDuplicates Tests", {
	beforeEach : function() {
		console.log("beforeEach: Starting hasDuplicates test");
		myArray = new MyArray();
	},
	afterEach: function() {
		console.log("afterEach: test hasDuplicates completed");
		myArray = null;
	}
});
QUnit.test('special cases: MyArray is undefined', function(assert) {
	expect(4);
	assert.throws(function() { myArray.hasDuplicates() }, "no argument = undefined");
	assert.throws(function() { myArray.hasDuplicates('a') }, "argument not array = undefined");
	assert.throws(function() { myArray.hasDuplicates([]) }, "argument is empty array");
	assert.deepEqual( myArray.hasDuplicates([1,2,3], 'xxx', [4,5,6]), false, "all additional parameters are skipped");
});
QUnit.test('no duplicate value', function(assert) {
	expect(4);
	assert.deepEqual( myArray.hasDuplicates([2,4,3,1]), false, "hasDuplicates([2,4,3,1] == false");
	assert.deepEqual( myArray.hasDuplicates([-2,-4,-3,-1]), false, "hasDuplicates([-2,-4,-3,-1] == false");
	assert.deepEqual( myArray.hasDuplicates([-2,-5,1,9]), false, "hasDuplicates([-2,-5,-5,9] == false");
	assert.deepEqual( myArray.hasDuplicates([-2.3,5.34,1.03,6.9,5.35,9]), false, "hasDuplicates([-2.3,5.34,1.03,6.9,5.35,9] == false");
});
QUnit.test('duplicate values', function(assert) {
	expect(4);
	assert.deepEqual( myArray.hasDuplicates([2,1,3,1]), true, "hasDuplicates([2,1,3,1] == true");
	assert.deepEqual( myArray.hasDuplicates([-2,-1,-3,-1]), true, "hasDuplicates([-2,-1,-3,-1] == true");
	assert.deepEqual( myArray.hasDuplicates([-2,-5,-5,9]), true, "hasDuplicates([-2,-5,1,9] == true");
	assert.deepEqual( myArray.hasDuplicates([-2.3,5.34,1.03,6.9,5.34,9]), true, "hasDuplicates([-2.3,5.34,1.03,6.9,5.34,9] == true");
});



QUnit.module("getStep Tests", {
	beforeEach : function() {
		console.log("beforeEach: Starting getStep test");
		myArray = new MyArray();
	},
	afterEach: function() {
		console.log("afterEach: test getStep completed");
		myArray = null;
	}
});
QUnit.test('special cases: MyArray is undefined', function(assert) {
	expect(5);
	assert.throws(function() { myArray.getStep() }, "no argument = undefined");
	assert.throws(function() { myArray.getStep('a') }, "argument not array = undefined");
	assert.throws(function() { myArray.getStep([]) }, "argument is empty array");
	assert.deepEqual( myArray.getStep([6]), 0, "Only one value");
	assert.deepEqual( myArray.getStep([6,4,2], 'xxx', [4,5,6]), -2, "all additional parameters are skipped");
});



QUnit.module("areConsecutive Tests", {
	beforeEach : function() {
		console.log("beforeEach: Starting areConsecutive test");
		myArray = new MyArray();
	},
	afterEach: function() {
		console.log("afterEach: test areConsecutive completed");
		myArray = null;
	}
});
QUnit.test('special cases: MyArray is undefined', function(assert) {
	expect(4);
	assert.throws(function() { myArray.areConsecutive() }, "no argument = undefined");
	assert.throws(function() { myArray.areConsecutive('a') }, "argument not array = undefined");
	assert.throws(function() { myArray.areConsecutive([]) }, "argument is empty array");
	assert.deepEqual( myArray.areConsecutive([1,2,3], 'xxx', [4,5,6]), true, "all additional parameters are skipped");
});
QUnit.test('positive values', function(assert) {
	expect(9);
	assert.deepEqual( myArray.areConsecutive([4]), true, "areConsecutive([4]) == true");
	assert.deepEqual( myArray.areConsecutive([3,4]), true, "areConsecutive([3,4]) == true");
	assert.deepEqual( myArray.areConsecutive([4,3]), true, "areConsecutive([4,3]) == true");
	assert.deepEqual( myArray.areConsecutive([4,4]), false, "areConsecutive([4,4]) == false");
	assert.deepEqual( myArray.areConsecutive([2,3,4]), true, "areConsecutive([2,3,4]) == true");
	assert.deepEqual( myArray.areConsecutive([4,3,2]), true, "areConsecutive([4,3,2]) == true");
	assert.deepEqual( myArray.areConsecutive([3,4,2]), false, "areConsecutive([4,3,2]) == false");
	assert.deepEqual( myArray.areConsecutive([4,2,3]), false, "areConsecutive([4,3,2]) == false");
	assert.deepEqual( myArray.areConsecutive([4,4,4]), false, "areConsecutive([4,4,4]) == false");
});
QUnit.test('negative values', function(assert) {
	expect(9);
	assert.deepEqual( myArray.areConsecutive([-4]), true, "areConsecutive([-4]) == true");
	assert.deepEqual( myArray.areConsecutive([-3,-4]), true, "areConsecutive([-3,-4]) == true");
	assert.deepEqual( myArray.areConsecutive([-4,-3]), true, "areConsecutive([-4,-3]) == true");
	assert.deepEqual( myArray.areConsecutive([-4,-4]), false, "areConsecutive([-4,-4]) == false");
	assert.deepEqual( myArray.areConsecutive([-2,-3,-4]), true, "areConsecutive([-2,-3,-4]) == true");
	assert.deepEqual( myArray.areConsecutive([-4,-3,-2]), true, "areConsecutive([-4,-3,-2]) == true");
	assert.deepEqual( myArray.areConsecutive([-3,-4,-2]), false, "areConsecutive([-4,-3,-2]) == false");
	assert.deepEqual( myArray.areConsecutive([-4,-2,-3]), false, "areConsecutive([-4,-3,-2]) == false");
	assert.deepEqual( myArray.areConsecutive([-4,-4,-4]), false, "areConsecutive([-4,-4,-4]) == false");
});
QUnit.test('positive and negative values', function(assert) {
	expect(6);
	assert.deepEqual( myArray.areConsecutive([-1,0,1]), true, "areConsecutive([-1,0,1]) == true");
	assert.deepEqual( myArray.areConsecutive([1,0,-1]), true, "areConsecutive([1,0,-1]) == true");
	assert.deepEqual( myArray.areConsecutive([1,-1,-3]), false, "areConsecutive([1,-1,-3]) == false");
	assert.deepEqual( myArray.areConsecutive([4.1,3.1,2.1]), true, "areConsecutive([4.1,3.1,2.1]) == true");
	assert.deepEqual( myArray.areConsecutive([-4.1,-3.1,-2.1]), true, "areConsecutive([-4.1,-3.1,-2.1]) == true");
	assert.deepEqual( myArray.areConsecutive([-3.1,-4.1,-2.1]), false, "areConsecutive([-4.1,-3.1,-2.1]) == false");
});
QUnit.test('positive and negative values NOT allowing duplicates', function(assert) {
	expect(6);
	assert.deepEqual( myArray.areConsecutive([0,1,2,2,3], false), false, "areConsecutive([0,1,2,2,3], false) == false");
	assert.deepEqual( myArray.areConsecutive([3,2,2,1,0], false), false, "areConsecutive([3,2,2,1,0], false) == false");
	assert.deepEqual( myArray.areConsecutive([-0,-1,-2,-2,-3], false), false, "areConsecutive([-0,-1,-2,-2,-3], false) == false");
	assert.deepEqual( myArray.areConsecutive([-3,-2,-2,-1,-0], false), false, "areConsecutive([-3,-2,-2,-1,-0], false) == false");
	assert.deepEqual( myArray.areConsecutive([-2,-1,0,1,1,2], false), false, "areConsecutive([-2,-1,0,1,1,2], false) == false");
	assert.deepEqual( myArray.areConsecutive([2,1,1,0,-1,-2], false), false, "areConsecutive([2,1,1,0,-1,-2], false) == false");
});
QUnit.test('positive and negative values allowing duplicates', function(assert) {
	expect(6);
	assert.deepEqual( myArray.areConsecutive([0,1,2,2,3], true), true, "areConsecutive([0,1,2,2,3], true) == true");
	assert.deepEqual( myArray.areConsecutive([3,2,2,1,0], true), true, "areConsecutive([3,2,2,1,0], true) == true");
	assert.deepEqual( myArray.areConsecutive([-0,-1,-2,-2,-3], true), true, "areConsecutive([-0,-1,-2,-2,-3], true) == true");
	assert.deepEqual( myArray.areConsecutive([-3,-2,-2,-1,-0], true), true, "areConsecutive([-3,-2,-2,-1,-0], true) == true");
	assert.deepEqual( myArray.areConsecutive([-2,-1,0,1,1,2], true), true, "areConsecutive([-2,-1,0,1,1,2], true) == true");
	assert.deepEqual( myArray.areConsecutive([2,1,1,0,-1,-2], true), true, "areConsecutive([2,1,1,0,-1,-2], true) == true");
});