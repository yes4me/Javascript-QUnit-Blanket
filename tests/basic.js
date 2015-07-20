/* ===========================================================================
Created: 2015/07/20 Thomas Nguyen - thomas_ejob@hotmail.com
Purpose: Learning
Original source: http://code.tutsplus.com/tutorials/how-to-test-your-javascript-code-with-qunit--net-9077
=========================================================================== */

/*
QUnit.test('basic: isEven()', function(assert) {
    assert.ok(isEven(0), "0 is an even number");
    assert.ok(isEven(2), "2 is an even number");
    assert.ok(isEven(-4), "-4 is an even number");
    assert.ok(!isEven(1), "1 is NOT an even number");
    assert.ok(!isEven(-7), "-7 is NOT an even number");
    assert.ok(!isEven(-7), "-7 is NOT an even number");
})
*/

//easier way to write the test cases
test('basic: isEven()', function() {
    ok(isEven(0), "0 is an even number");
    ok(isEven(2), "2 is an even number");
    ok(isEven(-4), "-4 is an even number");
    ok(!isEven(1), "1 is NOT an even number");
    ok(!isEven(-7), "-7 is NOT an even number");
    ok(!isEven(-7), "-7 is NOT an even number");
})