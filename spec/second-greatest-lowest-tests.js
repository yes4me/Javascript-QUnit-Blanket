/* =====================================================================================
Created:	2015/07/25
Author:		Thomas Nguyen - thomas_ejob@hotmail.com
Location:	https://github.com/yes4me/
Purpose:	Learning Jasmine - https://www.npmjs.com/package/jasmine-expect
===================================================================================== */


describe("second-greatest-lowest Tests", function() {
	it("special cases", function() {
		expect( compute([]) ).toBeUndefined();
		expect( compute([3]) ).toBeUndefined();
		expect(function(){ compute([1,2,3,4], [1,2,3,4]) }).toThrow();
		expect(function(){ compute() }).toThrow();
		expect(function(){ compute("") }).toThrow();
		expect(function(){ compute("a") }).toThrow();
	});
	it("typical values", function() {
		expect( compute([1,2,3,4]) ).toEqual([2,3]);
		expect( compute([4,3,2,1]) ).toEqual([2,3]);
		expect( compute([-4,-2,-3,-1]) ).toEqual([-3,-2]);
		expect( compute([4,-3,-2,1]) ).toEqual([-2,1]);
		expect( compute([3,3,3,3]) ).toEqual([3,3]);
		expect( compute([-3,-3,-3,-3]) ).toEqual([-3,-3]);
		expect( compute([4,2,3,4]) ).toEqual([3,4]);
		expect( compute([1,2,3,1]) ).toEqual([1,2]);
		expect( compute([3,-3,2]) ).toEqual([2,2]);
		expect( compute([3,-3]) ).toEqual([-3,3]);
	});
	it("Others", function() {
		expect( compute([1,2,3,4]) ).toEqual([2,3]);
	});
});