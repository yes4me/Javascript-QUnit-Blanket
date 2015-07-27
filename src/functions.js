/* ===========================================================================
Created:	2015/07/24
Author:		Thomas Nguyen - thomas_ejob@hotmail.com
Location:	https://github.com/yes4me/
Purpose:	Learn Javascript Object and...
	What is needed
	==============
	In this exercise, you will be writing three functions and providing tests for
	these three functions.

	What is provided
	================
	No files are provided.

	Function # 1
	============
	Write a function with the following signature:
	  function removeDuplicates(numbers)

	The function takes an array of numbers (sorted or not) and removes duplicates
	from that array. It returns an array of numbers with duplicates removed (i.e.
	every element appears exactly once)

	e.g. removeDuplicates([1,1,2,2,3,3,3,3,4]) --> [1,2,3,4]
	removeDuplicates([1,2,3]) --> [1,2,3]
	removeDuplicates([1,3,2,4,3,2,1,1,2,4,3,2,5]) --> [1,2,3,4,5]

	It is not assumed that numbers passed to the function will be sorted
	Though, you may find that if you sort the numbers before working on them yield
	better implementation

	Function # 2
	=============
	Write a function with the following signature:
	   function hasDuplicates(numbers)

	The function takes an array of numbers and returns whether there were duplicates
	or not (returns true if there are duplicates, false otherwise)

	e.g. hasDuplicates([3,5,7,1,9]) --> false
	hasDuplicates([3,1,4,3]) --> true
	hasDuplicates([]) --> false

	This function will also be helpful in writing your tests. Can you think of a way
	to incorporate the hasDuplicates function while writing tests for removeDuplicates?

	Function # 3
	============
	Write a function with the following signature:
		function areConsecutive(numbers, [allowDuplicates])

	The function takes an array of numbers and determines if the numbers are consecutive
	or not.

	Following numbers are considered consecutive:
	[2,3,4,5]
	[1,2,3,4,5,6,7,8,9]

	Following numbers are not considred consecutive:
	[1,2,3,5]

	The optional argument "allowDuplicates" tells the function whether to allow
	duplicate numbers when determining "consecutiveness"

	This following numbers are consecutive if allowDuplicates is true
	[1,1,2,3,3,4]

	However, above numbers are not considered consecutive if allowDuplicates if false

	You will see that you will use "removeDuplicates" and "hasDuplicate" function
	inside this functions. And hence it is imperative that those two functions are
	well tested.

	Note: The range function developed in first question can be used to generate
	consecutive numbers as well (if the step == +1 / -1)

	You can use that function while writing your tests

	Why this exercise
	=================
	By developing these three small functions, you will see how they work together
	Also you will see how you can use helper functions to develop you tests
	You will also how see code written somewhere else (range.js) can be used to develop
	you test data.
Others:		https://api.qunitjs.com/category/assert/
			http://stackoverflow.com/questions/17989270/for-loop-performance-storing-array-length-in-a-variable
			http://stackoverflow.com/questions/1458633/how-to-deal-with-floating-point-number-precision-in-javascript
=========================================================================== */

function MyArray(numbers) {
	if (numbers instanceof Array)
		this.numbers = numbers;
	else
		this.numbers = null;
};
//Getters and setters
MyArray.prototype.getArray = function() {
	return this.numbers;
}
MyArray.prototype.setArray = function(numbers) {
	if (numbers instanceof Array)
	{
		this.numbers = numbers;
		return true;
	}
	return false;
}
//The function takes an array of numbers (sorted or not) and returns an array of numbers with duplicates removed
MyArray.prototype.removeDuplicates = function(numbers) {
	if (!(numbers instanceof Array))
		numbers = this.getArray();
	if (!(numbers instanceof Array))
		throw new Error('Argument is expected to be an array');
	if (numbers.length==0)
		throw new Error('Argument is empty');

	var counter = 0;
	var resultArray		= [];
	var compareArray	= [];
	var numbersLength	= numbers.length;
	for (i=0; i<numbersLength; i++)
	{
		if (compareArray[ numbers[i] ] == undefined)
		{
			compareArray[ numbers[i] ] = 1;
			resultArray[counter++] = numbers[i];
		}
	}
	return resultArray;
};
//The function takes an array of numbers and returns whether there were duplicates or not (returns true if there are duplicates, false otherwise)
MyArray.prototype.hasDuplicates = function(numbers) {
	if (!(numbers instanceof Array))
		numbers = this.getArray();
	if (!(numbers instanceof Array))
		throw new Error('Argument is expected to be an array');
	if (numbers.length==0)
		throw new Error('Argument is empty');

	var compareArray	= [];
	var numbersLength	= numbers.length;
	for (i=0; i<numbersLength; i++)
	{
		if (compareArray[ numbers[i] ] == undefined)
			compareArray[ numbers[i] ] = 1;
		else
			return true;
	}
	return false;
}
//The function takes an array of numbers and return the identical difference between them.
MyArray.prototype.getStep = function(numbers) {
	if (!(numbers instanceof Array))
		numbers = this.getArray();
	if (!(numbers instanceof Array))
		throw new Error('Argument is expected to be an array');
	if (numbers.length==0)
		throw new Error('Argument is empty');

	if (numbers.length==1)
		return 0;

	var allowDuplicates = (arguments[1] == true)? true:false;
	var numbersSteps	= [];
	var counter			= 0;
	var numbersLength	= numbers.length;
	for (i=0; i<numbersLength-1; i++)
	{
		tmp = numbers[i+1] - numbers[i];
		if (!allowDuplicates || (tmp!=0))
		{
			//alert(8.3-7.3) did not return 1 but 1.000009 in Javascript
			numbersSteps[counter++] = new BigNumber( numbers[i+1] ).minus( numbers[i] );
		}
	}
	numbersSteps = this.removeDuplicates(numbersSteps);
	return (numbersSteps.length==1)? numbersSteps[0] : undefined;
}
//The function takes an array of numbers and determines if the numbers are consecutive (within 1 digit) or not.
MyArray.prototype.areConsecutive = function(numbers) {
	if (!(numbers instanceof Array))
		numbers = this.getArray();
	if (!(numbers instanceof Array))
		throw new Error('Argument is expected to be an array');
	if (numbers.length==1)
		return true;
	var allowDuplicates = (arguments[1] == true)? true:false;

	//undefined is a value in Javascript. If numbers==undefined, it is passed to getStep(), and QUnit cannot check for no argument
	var step = this.getStep(numbers, allowDuplicates);
	return (Math.abs(step)==1)? true: false;
}