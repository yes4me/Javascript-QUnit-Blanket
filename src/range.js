/* ===========================================================================
Created:	2015/07/22
Author:		Thomas Nguyen - thomas_ejob@hotmail.com
Location:	https://github.com/yes4me/
Purpose:
	Function takes two arguments (start and end) and optionally takes a third
	argument called step. The function should return an array containing all the
	numbers from start up to end (including both start as well as end).

	The step if provided indicates the "step" value used to build up the array.

	If step is not provided, it should return an array which increments (or decrements)
	the elements by 1.

	Examples:
	=========

	range(2,5) --> [2,3,4,5]
	range(5,3) --> [5,4,3]
	range(3,10,3) --> [3,6,9]

	In all the cases where the parameters are invalid,
	the function should return undefined
=========================================================================== */

// Given start, end and step, returns an array with start and end both inclusive and seperated by step (positive or negative)
function range(start, end, step) {
	numArgs = arguments.length;
	if (numArgs < 2)
		return undefined;
	if (step==0)
		return undefined;

	if (step==undefined)
		step = (start>end)? -1:1;		//If start=end, the default value must be 1 to avoid infinite loop later on
	if ((start<end) && (step<0))
		return undefined;
	if ((start>end) && (step>0))
		return undefined;

	var nbValues	= (start-end)/step;
	nbValues		= Math.floor(Math.abs(nbValues))+1;

	var myArray		= [];
	var counter		= 0;
	var value		= start;
	for (counter=0; counter<nbValues; counter++)
	{
		myArray.push(value);
		value += step;
	}
	return myArray;
}