/* ===========================================================================
Created:	2015/07/18
Author:		Thomas Nguyen - thomas_ejob@hotmail.com
Location:	https://github.com/yes4me/
Purpose:	Learning QUnit - https://api.qunitjs.com/category/assert/
Inspired:	http://www.sitepoint.com/getting-started-qunit/
=========================================================================== */

QUnit.config.testTimeout = 3000;


QUnit.module("sitepoint");
QUnit.test("sitepoint: max()", function (assert) {
	//OPTIONAL: Number of asserts expected to be tested in this test (useful when dealing with asynchronous code)
	expect(6);
	//assert.strictEqual:		Verify the value provided is equal to the expected parameter using a strict comparison (===)
    assert.strictEqual( App.max(), -Infinity, 'No parameters');
    assert.strictEqual( App.max(3, 1, 2), 3, 'All positive numbers');
    assert.strictEqual( App.max(-14, -22, -5), -5, 'All negative numbers');
    assert.strictEqual( App.max(-10, 5, 3, 99), 99, 'Positive and negative numbers');
    assert.strictEqual( App.max(14, 14, 14), 14, 'All identical numbers');
	//assert.notStrictEqual:	Same as strictEqual() but tests for inequality;
    assert.notStrictEqual(App.max(14, 14, 14), 2, 'notStrictEqual test just for fun');
});

QUnit.test('sitepoint: isOdd()', function (assert) {
	expect(5);
	//ok(value[, message]: An assertion that passes if the first argument is truthy;
	assert.ok( !App.isOdd(0), '0 is not odd');
	assert.ok( !App.isOdd(2), '2 is not odd');
	assert.ok( App.isOdd(5), '5 is odd');
	assert.ok( !App.isOdd(null), 'null is not odd');
	assert.ok( !App.isOdd([]), '[] is not odd');
});

QUnit.test('sitepoint: sortObj()', function (assert) {
    var timestamp = Date.now();
	var array = [
		{
			id:1,
			timestamp:timestamp
		},
		{
			id:3,
			timestamp:timestamp + 1000
		},
		{
			id:11,
			timestamp:timestamp - 1000
		}];
	App.sortObj(array);
	//alert( array[0].id )

	//A strict comparison of the properties and values of an object. The assertion passes if all the properties and the values are identical
    assert.propEqual(array, [{
        id: 11,
        timestamp: timestamp - 1000
    }, {
        id: 1,
        timestamp: timestamp
    }, {
        id: 3,
        timestamp: timestamp + 1000
    }]);
	//Same as propEqual() but tests for inequality
	assert.notPropEqual(App.sortObj(array), array, "sortObj() does not return an array");
	//Verify the value provided is equal to the expected parameter using a strict comparison (===)
    assert.strictEqual(App.sortObj(array), undefined, "sortObj() returns undefined");
});