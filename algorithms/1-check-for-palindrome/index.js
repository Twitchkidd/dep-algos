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
	// typeof and instanceof:
	// if (typeof myVar === 'string' || myVar instanceof String) {
	// yada yada
	//}
	// === ''
	// So Number.prototype.toString() will either give the number, or
	// with a decimal point, or NaN, because we'll remember NaN is a Number,
	// as are Number.POSITIVE_INFINITY (Infinity) and Number.NEGATIVE_INFINITY (-Infinity)
	// Integers in JavaScript are only accurate to 15 digits, and 17 is the
	// max for decimals, but floating point arithmatic is to be distrusted,
	// multiply to get to integers and divide at the end to be sure
	// console.log(input);
	// if number and not crazy, stringify, return whether it's a palindromic number
	// if string, return whether it's a palindrome
	// if it's not, return it's not
	const regex = /[\W_]/g;
	if (typeof input === 'string' || input instanceof String) {
		if (input.length === 0) {
			// Empty strings aren't palindromes!
			// ... wait, actually, don't they read the same from the front or the back?
			// Not how properties work?
			// return false;
			return true;
		} else {
			const lowercaseNoMarks = input.toLowerCase().replace(regex, '');
			for (let i = 0; i < input.length / 2; i++) {
				if (lowercaseNoMarks[i] !== lowercaseNoMarks[input.length - 1 - i]) {
					return false;
				}
			}
			return true;
		}
	}
	if (typeof input === 'number' || input instanceof Number) {
		const whats = [NaN, Infinity, -Infinity];
		if (whats.includes(input.valueOf())) {
			return false;
		} else {
			const strNoMarks = input.toString().replace(regex, '');
			for (let i = 0; i < strNoMarks.length / 2; i++) {
				if (strNoMarks[i] !== strNoMarks[strNoMarks.length - 1 - i]) {
					return false;
				}
			}
			return true;
		}
	}
	return false;
};

const testInputs = [
	'',
	'sad',
	'racecar',
	'abba',
	42385,
	44244,
	Number.POSITIVE_INFINITY,
	Number.NEGATIVE_INFINITY,
	Number.NaN,
	new Number(97778),
	{
		get: 'one',
	},
	['ab', 'bc', 'dffd'],
];

testInputs.forEach(input => console.log(input, isPalindrome(input)));
