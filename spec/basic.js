/* ===========================================================================
Created:	2015/07/20 Thomas Nguyen - thomas_ejob@hotmail.com
Purpose:	Learning QUnit
Inspired:	http://code.tutsplus.com/tutorials/how-to-test-your-javascript-code-with-qunit--net-9077
PS:
			assert.equal/not Equal:				same as == for primitive ONLY (check for value of )
			assert.strictEqual/notStrictEqual:	same as === for primitive ONLY (check for value and type)
			assert.deepEqual:					same as == but this is for Objects ex: [1,2,3] !== [2,3,1]
			assert.throws						check for exception
=========================================================================== */

QUnit.config.testTimeout = 3000;


QUnit.module("Testing Cars and Robots", {
  beforeEach : function(){
    console.log("=== Starting tests ===");
  },
  afterEach: function(){
    console.log("=== test completed ===");
  }
});

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

QUnit.skip('basic: skip test', function(assert) {
    assert.equal( sum(1,2,3), 6, "sum = 6");
});