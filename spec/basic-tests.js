/* =====================================================================================
Created:	2015/07/17
Author:		Thomas Nguyen - thomas_ejob@hotmail.com
Location:	https://github.com/yes4me/
Purpose:	Learning QUnit - https://api.qunitjs.com/category/assert/
Inspired:	http://code.tutsplus.com/tutorials/how-to-test-your-javascript-code-with-qunit--net-9077
PS:
			assert.equal/not Equal:				same as == for primitive ONLY (check for value of )
			assert.strictEqual/notStrictEqual:	same as === for primitive ONLY (check for value and type)
			assert.deepEqual:					same as == but this is for Objects ex: [1,2,3] !== [2,3,1]
			assert.throws						check for exception
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


/*
QUnit.module( "basic", {
	beforeEach : function() {
		console.log("step 1: Starting test");
	},
	afterEach: function() {
		console.log("step 3: test completed");
	}
});
*/


QUnit.module("basic");
QUnit.test("DIFFERENCE", function(assert) {
	var value1 = 2+3;
	var value3 = 5;
	var array1 = [1,2,3];
	var array2 = [1,2,3];

    assert.ok(1==1, "1==1");
	assert.equal(2+3, "5", "2+3==5");
	assert.deepEqual(5, 5, "5 === 5");
	assert.strictEqual(5, 5, "5 === 5");
});
QUnit.test("assert.ok", function(assert) {
	expect(3); //optional
	assert.ok(true);										//Return "Okay" by default
    assert.ok(1==1, "1==1");
    assert.ok(2+3=='5', "2+3=='5'");
});
QUnit.test("assert.equal", function(assert) {				//Compare ONLY the value 2 primitives(including arrays). Does not work on Objects (i.e. arrays)
	expect(6); //optional
	assert.equal("abc", "abc", "'abc' == 'abc'");
	assert.equal(5, 5, "5==5");
	assert.equal(2+3, 5, "2+3==5");
	assert.equal(2+3, "5", "2+3==5");
	assert.equal(0, false, "0 == false");
	assert.equal(null, undefined, "null == undefined");
});
QUnit.test("assert.deepEqual", function(assert) {			//Compare the value & the type of 2 primitives(including arrays). Does not work on Objects (i.e. arrays)
	expect(7); //optional
	assert.deepEqual("abc", "abc", "'abc' === 'abc'");
	assert.deepEqual(5, 5, "5 === 5");
	assert.deepEqual(2+3, 5, "2+3 === 5");
	assert.notDeepEqual(2+3, "5", "2+3 !== 5");
	assert.deepEqual([1,2,3], [1,2,3], "[1,2,3] === [1,2,3]");
	assert.notDeepEqual(0, false, "0 !== false");
	assert.notDeepEqual(null, undefined, "null !== undefined");
});
QUnit.test("assert.strictEqual", function(assert) {			//Compare the value & the type & THE OBJECT of 2 primitives(including arrays). Does not work on Objects (i.e. arrays)
	expect(7); //optional
	assert.strictEqual("abc", "abc", "'abc' === 'abc'");
	assert.strictEqual(5, 5, "5 === 5");
	assert.strictEqual(2+3, 5, "2+3 === 5");
	assert.notStrictEqual(2+3, "5", "2+3 !== 5");
	assert.notStrictEqual([1,2,3], [1,2,3], "[1,2,3] !== [1,2,3]");
	assert.notStrictEqual(0, false, "0 !== false");
	assert.notStrictEqual(null, undefined, "null !== undefined");
});
QUnit.skip("How to skip a test", function(assert) {
    assert.equal( sum(1,2,3), 6, "sum = 6");
});
QUnit.test("Testing a function()", function(assert) {
	expect(8); //optional
    assert.ok(isEven(0), "0 is an even number");
    assert.ok(isEven(2), "2 is an even number");
    assert.ok(isEven(-4), "-4 is an even number");
    assert.ok(!isEven(1), "1 is NOT an even number");
    assert.ok(!isEven(-7), "-7 is NOT an even number");
    assert.equal( sum(1,2,3), 6, "sum = 6");
    assert.throws( function() {sum()}, "throw exception error when no argument");
    assert.throws( function() {sum("")}, "throw exception error when argument not a number");
});
QUnit.test("OTHERS: what is FALSE(by default) in Javascript", function(assert) {
	expect(6); //optional
	assert.equal(0, false);
	assert.equal(false, false);
	assert.equal("", false);
	assert.notEqual(null, false);			//This is different from Jasmine
	assert.notEqual(NaN, false);			//This is different from Jasmine
	assert.notEqual(undefined, false);		//This is different from Jasmine
});