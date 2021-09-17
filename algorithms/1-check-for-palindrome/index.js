// 1. Check For Palindrome

// How I'd Do It

// A palindrome is, for our purposes:

/*
A word, phrase, number or any other sequence of units which has the property
of reading the same forwards as it does backwards, character for character,
sometimes disregarding punctuation, capitalization and diacritics.
*/

/*
And I think we can assume that the programmer would reasonably try to pass in
a string or a number, but that an array or somehow an object should be
expected to be massaged before input.
*/

const isPalindrome = input => {
	// if input is not number or string, throw that it's not
	// if it's a number, strip the decimal point and stringify
	// if it's a string, string punctuation and capitalization
	// for half of char in string, compare to opposite half
	// return true or false
	console.log(input);
	// typeof and instanceof:
	// if (typeof myVar === 'string' || myVar instanceof String) {
	// yada yada
	//}
};

const testInputs = [
	'sad',
	'racecar',
	'abba',
	42,
	44244,
	{
		get: 'one',
	},
	['ab', 'bc', 'dffd'],
];

testInputs.forEach(input => isPalindrome(input));
