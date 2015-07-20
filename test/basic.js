/* ===========================================================================
Created:	2015/07/20 Thomas Nguyen - thomas_ejob@hotmail.com
Purpose:	Learning QUnit
Inspired:	http://code.tutsplus.com/tutorials/how-to-test-your-javascript-code-with-qunit--net-9077
=========================================================================== */

/*
//Previous way to write the test cases in QUnit 1.0
test('basic: isEven()', function() {
    ok(isEven(0), "0 is an even number");
    ok(isEven(2), "2 is an even number");
    ok(isEven(-4), "-4 is an even number");
    ok(!isEven(1), "1 is NOT an even number");
    ok(!isEven(-7), "-7 is NOT an even number");
    ok(!isEven(-7), "-7 is NOT an even number");
});
*/

QUnit.test('basic: isEven()', function(assert) {
    assert.ok(isEven(0), "0 is an even number");
    assert.ok(isEven(2), "2 is an even number");
    assert.ok(isEven(-4), "-4 is an even number");
    assert.ok(!isEven(1), "1 is NOT an even number");
    assert.ok(!isEven(-7), "-7 is NOT an even number");
    assert.ok(!isEven(-7), "-7 is NOT an even number");
});

QUnit.test('basic: sum()', function(assert) {
    assert.equal( sum(1,2,3), 6, "sum = 6");
    assert.throws( function(){sum()}, "throw exception error when no argument");
    assert.throws( function(){sum("")}, "throw exception error when argument not a number");
});