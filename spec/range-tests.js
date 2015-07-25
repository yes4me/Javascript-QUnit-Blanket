/* ===========================================================================
Created:	2015/07/22
Author:		Thomas Nguyen - thomas_ejob@hotmail.com
Location:	https://github.com/yes4me/
Purpose:
	Test Driven Development
	=======================
	Start by running the tests in the browser. Initially majority of tests will
	fail. Start by adding implementation and making tests succeed one after the another.
	Once all the test passes, you can be assured that your function works as expected.

	Adding more Tests
	=================
	After you have developed the function such that all the tests passes, please
	add few more tests that you may think tests areas not tested by tests provided
	by me.
=========================================================================== */

QUnit.config.testTimeout = 3000;
QUnit.begin(function(details){
	console.log("step FIRST: Starting Tests: there are " + details.totalTests + " tests");
});
QUnit.log(function(details){
	console.log("step 2: Asserting -- " + details.name + " (" + details.runtime + ")");
});
QUnit.done(function(details){
	console.log("step LAST: Test Execution Ended in "+ details.runtime +" milliseconds");
	console.log("Passed / Failed (total assertions): " + details.passed + "/" +  details.failed +"("+ details.total +")");
});



QUnit.module( "Range Tests");
QUnit.test('special cases', function(assert){
	expect(11);

	// The first two arguments are required, skipping them returns undefined
	assert.equal(range(), undefined, 'Range invoked with no arguments results in undefined');
	assert.equal(range(1), undefined, 'Range invoked with just one argument results in undefined');

	// Make sure that this is a valid range
	assert.equal(range(3,2,1), undefined, 'For positive values of step, start must be smaller than end');
	assert.equal(range(2,4,-1), undefined, 'For negative value of step, start must be smaller than end');

	// Step == 0 results in undefined
	assert.equal(range(2,5,0), undefined, 'Step == 0 results in undefined');

	assert.equal(range(5,1,1), undefined, "range(5,1,1) == undefined (results in infinite sequence)");
	assert.equal(range(5,-6,1), undefined, "range(5,-6,1) == undefined (results in infinite sequence)");
	assert.equal(range(-2,-6,1), undefined, "range(-2,-6,1) == undefined (results in infinite sequence)");
	assert.equal(range(1,5,-1), undefined, "range(1,5,-1) == undefined (results in infinite sequence)");
	assert.equal(range(-6,5,-1), undefined, "range(-6,5,-1) == undefined (results in infinite sequence)");
	assert.equal(range(-6,-2,-1), undefined, "range(-6,-2,-1) == undefined (results in infinite sequence)");
});
QUnit.test('typical values - step is skipped', function(assert){
	expect(9);

	// Step is skipped, we deduce the step from start and end
	// test # 1: start == end
	// Test # 2: start < end
	// Test # 3: start > end
	assert.deepEqual(range(3,3), [3], 'If start and end are same, we return the single element array');
	assert.deepEqual(range(0,0), [0], 'If start and end are same, we return the single element array');
	assert.deepEqual(range(-3,-3), [-3], 'If start and end are same, we return the single element array');

	// Step is skipped, provide negative and positive values for range
	assert.deepEqual(range(2,6), [2,3,4,5,6], 'Skip step. range(2,6) == [2,3,4,5,6]');
	assert.deepEqual(range(6,2), [6,5,4,3,2], 'Skip step. range(6,2) == [6,5,4,3,2]');
	assert.deepEqual(range(-2,2), [-2,-1,0,1,2], 'Skip step. range(-2,2) == [-2,-1,0,1,2]');
	assert.deepEqual(range(2,-2), [2,1,0,-1,-2], 'Skip step. start == 2, end == -2. Expect: [2,1,0,-1,-2]');
	assert.deepEqual(range(-2,-6), [-2,-3,-4,-5,-6], 'Skip step. range(-2,-6) == [-2,-3,-4,-5,-6]');
	assert.deepEqual(range(-6,-2), [-6,-5,-4,-3,-2], 'Skip step. range(-6,-2) == [-6,-5,-4,-3,-2]');
});
QUnit.test('typical values - step is provided', function(assert){
	expect(24);

	// provide step == -1. Valid and invalid range
	assert.deepEqual(range(2,6,1), [2,3,4,5,6], 'step=1 range(2,6,1) == [2,3,4,5,6]');
	assert.deepEqual(range(-2,2,1), [-2,-1,0,1,2], 'step=1 range(-2,2,1) == [-2,-1,0,1,2]');
	assert.deepEqual(range(-6,-2,1), [-6,-5,-4,-3,-2], 'step=1 range(-6,-2,1) == [-6,-5,-4,-3,-2]');
	assert.deepEqual(range(6,2,-1), [6,5,4,3,2], 'step=-1 range(6,2,-1) == [6,5,4,3,2]');
	assert.deepEqual(range(2,-2,-1), [2,1,0,-1,-2], 'step=-1 range(2,-2,-1) == [2,1,0,-1,-2]');
	assert.deepEqual(range(-2,-6,-1), [-2,-3,-4,-5,-6], 'step=-1 range(-2,-6,-1) == [-2,-3,-4,-5,-6]');

	// +ve step
	assert.deepEqual(range(1,9,2), [1,3,5,7,9], "range(1,9,2) == [1,3,5,7,9]");
	assert.deepEqual(range(1,3,15), [1], "range(1,3,15) == [1]");
	assert.deepEqual(range(1,8,2.5), [1,3.5,6], "range(1,8,2.5) == [1,3.5,6]");
	assert.deepEqual(range(-4,6,2), [-4,-2,0,2,4,6], "range(-4,6,2), [-4,-2,0,2,4,6]");
	assert.deepEqual(range(-4,6,15), [-4], "range(-4,6,15) == [-4]");
	assert.deepEqual(range(-4,5,2.5), [-4,-1.5,1,3.5], "range(-4,5,2.5) == [-4,-1.5,1,3.5]");
	assert.deepEqual(range(-6,-2,2), [-6,-4,-2], "range(-6,-2,2) == [-6,-4,-2]");
	assert.deepEqual(range(-6,-2,15), [-6], "range(-6,-2,15) == [-6]");
	assert.deepEqual(range(-6,-2,2.5), [-6,-3.5], "range(-6,-2,2.5) == [-6,-3.5]");

	// -ve step
	assert.deepEqual(range(9,1,-2), [9,7,5,3,1], "range(9,1,-2) == [9,7,5,3,1]");
	assert.deepEqual(range(3,1,-15), [3], "range(3,1,-15) == [3]");
	assert.deepEqual(range(8,1,-2.5), [8,5.5,3], "range(8,1,-2.5) == [8,5.5,3]");
	assert.deepEqual(range(6,-4,-2), [6,4,2,0,-2,-4], "range(6,-4,-2) == [6,4,2,0,-2,-4]");
	assert.deepEqual(range(6,-4,-15), [6], "range(6,-4,-15) == [6]");
	assert.deepEqual(range(6,-5,-2.5), [6,3.5,1,-1.5,-4], "range(6,-5,-2.5) == [6,3.5,1,-1.5,-4]");
	assert.deepEqual(range(-2,-6,-2), [-2,-4,-6], "range(-2,-6,-2), [-2,-4,-6]");
	assert.deepEqual(range(-2,-6,-15), [-2], "step=15 range(-2,-6,-15) == [-2]");
	assert.deepEqual(range(-2,-6,-2.5), [-2,-4.5], "range(-2,-6,-2.5) == [-2,-4.5]");
});