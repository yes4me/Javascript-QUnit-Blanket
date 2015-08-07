/* =====================================================================================
Created:	2015/07/24
Author:		Thomas Nguyen - thomas_ejob@hotmail.com
Location:	https://github.com/yes4me/
Purpose:	Learn Javascript Object and...
	------------------------------------------------------------------------------------
	Function #1: function range(numbers)
	------------------------------------------------------------------------------------
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

	When the parameters are invalid, the function should return undefined.

	------------------------------------------------------------------------------------
	Function #2: function removeDuplicates(numbers)
	------------------------------------------------------------------------------------

	The function takes an array of numbers (sorted or not) and removes duplicates
	from that array. It returns an array of numbers with duplicates removed (i.e.
	every element appears exactly once)

	e.g. removeDuplicates([1,1,2,2,3,3,3,3,4]) --> [1,2,3,4]
	removeDuplicates([1,2,3]) --> [1,2,3]
	removeDuplicates([1,3,2,4,3,2,1,1,2,4,3,2,5]) --> [1,2,3,4,5]

	It is not assumed that numbers passed to the function will be sorted
	Though, you may find that if you sort the numbers before working on them yield
	better implementation

	------------------------------------------------------------------------------------
	Function #3: function hasDuplicates(numbers)
	------------------------------------------------------------------------------------

	The function takes an array of numbers and returns whether there were duplicates
	or not (returns true if there are duplicates, false otherwise)

	e.g. hasDuplicates([3,5,7,1,9]) --> false
	hasDuplicates([3,1,4,3]) --> true
	hasDuplicates([]) --> false

	This function will also be helpful in writing your tests. Can you think of a way
	to incorporate the hasDuplicates function while writing tests for removeDuplicates?

	------------------------------------------------------------------------------------
	Function #4: function areConsecutive(numbers, [allowDuplicates])
	------------------------------------------------------------------------------------

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
Others:		https://api.qunitjs.com/category/assert/
			http://stackoverflow.com/questions/17989270/for-loop-performance-storing-array-length-in-a-variable
			http://stackoverflow.com/questions/1458633/how-to-deal-with-floating-point-number-precision-in-javascript
===================================================================================== */

function MyArray(numbers) {
	if (numbers instanceof Array)
		this.numbers = numbers;
	else
		this.numbers = null;
};

//Getters and setters
MyArray.prototype.checkArray = function(numbers) {
	if (!(numbers instanceof Array))
		return false;
	if (numbers.length==0)
		return false;
	return true;
}

//Getters and setters
MyArray.prototype.getArray = function(numbers) {
	if ( this.checkArray(numbers) )
		return numbers;
	return this.numbers;
}
MyArray.prototype.setArray = function(numbers) {
	if ( this.checkArray(numbers) )
	{
		this.numbers = numbers;
		return true;
	}
	return false;
}

// Given start, end and step, returns an array with start and end both inclusive and seperated by step (positive or negative)
MyArray.prototype.range = function(start, end, step) {
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

//The function takes an array of numbers (sorted or not) and returns an array of numbers with duplicates removed
MyArray.prototype.removeDuplicates = function(numbers) {
	numbers = this.getArray(numbers);
	if (!numbers)
		throw new Error('Argument is expected to be an array');

	var counter = 0;
	var resultArray		= [];
	var noDuplicateArray	= [];
	var numbersLength	= numbers.length;		//This reduces memory
	for (i=0; i<numbersLength; i++)
	{
		if (noDuplicateArray[ numbers[i] ] != 1)
		{
			noDuplicateArray[ numbers[i] ] = 1;
			resultArray[counter++] = numbers[i];
		}
	}
	return resultArray;
};
//The function takes an array of numbers and returns whether there were duplicates or not (returns true if there are duplicates, false otherwise)
MyArray.prototype.hasDuplicates = function(numbers) {
	numbers = this.getArray(numbers);
	if (!numbers)
		throw new Error('Argument is expected to be an array');

	var noDuplicateArray	= [];
	var numbersLength	= numbers.length;		//This reduces memory
	for (i=0; i<numbersLength; i++)
	{
		if (noDuplicateArray[ numbers[i] ] != 1)
			noDuplicateArray[ numbers[i] ] = 1;
		else
			return true;
	}
	return false;
}
//The function takes an array of numbers and return the identical difference between them.
MyArray.prototype.getStep = function(numbers) {
	numbers = this.getArray(numbers);
	if (!numbers)
		throw new Error('Argument is expected to be an array');

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
			//alert(8.3-7.3) did not return 1 but 1.000009 in Javascript => Hence why I use BigNumber
			numbersSteps[counter++] = new BigNumber( numbers[i+1] ).minus( numbers[i] );
		}
	}
	numbersSteps = this.removeDuplicates(numbersSteps);
	return (numbersSteps.length==1)? Number(numbersSteps[0]) : undefined;
}
//The function takes an array of sorted NUMBERS, and determines if the numbers are consecutive (within 1 digit) or not.
//MyArray.prototype.areConsecutiveNumbersSorted = function(numbers) {
MyArray.prototype.areConsecutiveSorted = function(numbers) {
	numbers = this.getArray(numbers);
	if (!numbers)
		throw new Error('Argument is expected to be an array');

	if (numbers.length==1)
		return true;
	var allowDuplicates = (arguments[1] == true)? true:false;

	var step = this.getStep(numbers, allowDuplicates);
	return (Math.abs(step)==1)? true: false;
}
//The function takes an array of UNsorted NUMBERS, and determines if the NUMBERS are consecutive (within 1 digit) or not.
MyArray.prototype.areConsecutiveUnSorted = function(numbers) {
	numbers = this.getArray(numbers);
	if (!numbers)
		throw new Error('Argument is expected to be an array');

	if (numbers.length==1)
		return true;
	var allowDuplicates = (arguments[1] == true)? true:false;

	var noDuplicateArray		= [];
	var noDuplicateArrayLength	= 0;
	var min_value			= numbers[0];
	var max_value			= numbers[0];
	var numbersLength		= numbers.length;		//This reduces memory
	for (i=0; i<numbersLength; i++)
	{
		if ( numbers[i]<min_value )
			min_value = numbers[i];
		if ( max_value<numbers[i] )
			max_value = numbers[i];

		if (noDuplicateArray[ numbers[i] ] != 1)
		{
			noDuplicateArray[ numbers[i] ] = 1;
			noDuplicateArrayLength++;

			//Make sure the difference is within integer values (ex: no 0.5 difference)
			var value	= new BigNumber( min_value ).minus( numbers[i] );
			var pattern	= new RegExp("[\.]");
			if ( pattern.test(value) )
				return false;
		}
		else if (!allowDuplicates)
			return false;
	}

	var numberOfValues = new BigNumber(max_value).minus(min_value).add(1);
	if (noDuplicateArrayLength != numberOfValues)
		return false;

	return true;
}