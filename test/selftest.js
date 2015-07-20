/* ===========================================================================
Created:	2015/07/17 Thomas Nguyen - thomas_ejob@hotmail.com
Purpose:	This is the bare minimum to run QUnit
PS:			https://api.qunitjs.com/category/assert/
=========================================================================== */

/*
//Can also be written like this
test("selftest: example", function(){
	ok(true);
    ok(1==1, "This test checks for true");
	equal(5, 5, "This test checks for equality");
});*/

QUnit.test("selftest: example", function(assert){
	assert.ok(true);		//Return "Okay" by default
    assert.ok(1==1, "This test checks for 1==1");
	assert.equal(5, 5, "equal 5=5");						//Compare the value of two primitives, having the same value. Does not work on Objects (i.e. arrays)
	assert.equal(2+3, 5, "equal 2+3=5");					//Compare the value of two primitives, having the same value. Does not work on Objects (i.e. arrays)
	assert.equal("abc", "abc", "equal 'abc'=='abc'");
	assert.equal(0, false, "0 equal false");
	assert.notStrictEqual(0, false, "0 equal false");		//Compare the value of two primitives, having the same value and type.
});