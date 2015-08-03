/* =====================================================================================
Created:	2015/07/22
Author:		Thomas Nguyen - thomas_ejob@hotmail.com
Location:	https://github.com/yes4me/
Purpose:
 * The function takes an array of numbers and find the following
 * 1. The second lowest number
 * 2. The second largest nunber
 *
 * Returns an array of two elements where
 * First element: second smallest number
 * Second element: second largest number
 *
 * e.g. compute(1,2,3,4) --> [2,3]
 *      compute (5,2,7,1,9,10) --> [2, 9]
 *
 * If an passed in array is empty, return undefined
 * If there is no second largest element in the array [2,2,2] return the largest
 * If there is no second smallest element in the array [4,4] return the smallest
 * It may be possible that second largest and second smallest are the same [1,2,3]
 *
 * Be sure to think of all the different permutations and combinations and
 * provide test suite that covers many of them
===================================================================================== */

function sortNumber(a,b) {
    return a - b;
}
//The function returns the second largest and second lowest from the array of numbers passed to it.
function compute(numbers) {
	numArgs = arguments.length;
	if (numArgs != 1)
		throw new Error('One argument expected');
	if (!(numbers instanceof Array))
		throw new Error('Argument is expected to be an array');
	if (numbers.length<2)
		return undefined;
	if (numbers.length==2)
		return [ numbers[1], numbers[numbers.length-2] ];

	numbers.sort(sortNumber);
	//sort method sorts elements alphabetically by default
	return [ numbers[1], numbers[numbers.length-2] ];
}