/* ===========================================================================
Created:	2015/07/24
Author:		Thomas Nguyen - thomas_ejob@hotmail.com
Location:	https://github.com/yes4me/
Purpose:
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
	dupliacet numbers when determining "consecutiveness"

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
=========================================================================== */

//The function takes an array of numbers (sorted or not) and returns an array of numbers with duplicates removed
function removeDuplicates(numbers) {
	numArgs = arguments.length;
	if (numArgs != 1)
		throw new Error('One argument expected');
	if (!(numbers instanceof Array))
		throw new Error('Argument is expected to be an array');

	var counter = 0;
	var resultArray		= [];
	var compareArray	= [];
	for (i=0; i<numbers.length; i++)
	{
		if (compareArray[ numbers[i] ] == undefined)
		{
			compareArray[ numbers[i] ] = 1;
			resultArray[counter++] = numbers[i];
		}
	}
	return resultArray;
}

//The function takes an array of numbers and returns whether there were duplicates or not (returns true if there are duplicates, false otherwise)
function hasDuplicates(numbers) {
	numArgs = arguments.length;
	if (numArgs != 1)
		throw new Error('One argument expected');
	if (!(numbers instanceof Array))
		throw new Error('Argument is expected to be an array');

	var compareArray	= [];
	for (i=0; i<numbers.length; i++)
	{
		if (compareArray[ numbers[i] ] == undefined)
			compareArray[ numbers[i] ] = 1;
		else
			return true;
	}
	return false;
}

//The function takes an array of numbers and determines if the numbers are consecutive or not.
function areConsecutive(numbers) {
	numArgs = arguments.length;
	if (numArgs < 1)
		throw new Error('At least one argument expected');
	if (!(numbers instanceof Array))
		throw new Error('Argument is expected to be an array');

	allowDuplicates = (arguments[1] == true)? true:false;
}