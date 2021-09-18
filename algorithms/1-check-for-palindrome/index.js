// 1. Check For Palindrome

// A palindrome is, for our purposes:

/*
A word, phrase, number or any other sequence of units which has the property
of reading the same forwards as it does backwards, character for character,
sometimes disregarding punctuation, capitalization and diacritics.
*/

// I just wonder if for really big strings whether comparing the chunks
// might be faster than comparing by character.

// Oh, creating palindromes that long is actually non-trivial, and this turns
// into a longer exercise than I want to go through

const isPalindrome = input => {
	const regex = /[\W_]/g;
	const ping = function () {
		console.log(new Date().getTime());
	};
	const palindromeComparisonByCharacter = str => {
		ping();
		for (let i = 0; i < str.length / 2; i++) {
			if (str[i] !== str[str.length - 1 - i]) {
				ping();
				return false;
			}
			ping();
			return true;
		}
	};
	if (typeof input === 'string' || input instanceof String) {
		if (input.length === 0) {
			return true;
		} else {
			const lowercaseNoMarks = input.toLowerCase().replace(regex, '');
			return palindromeComparisonByCharacter(lowercaseNoMarks);
		}
	}
	if (typeof input === 'number' || input instanceof Number) {
		const whats = [NaN, Infinity, -Infinity];
		if (whats.includes(input.valueOf())) {
			return false;
		} else {
			const strNoMarks = input.toString().replace(regex, '');
			return palindromeComparisonByCharacter(strNoMarks);
		}
	}
	return false;
};

const testInputs = [
	'',
	'sad',
	'racecar',
	'abba',
	'Are we not pure? “No sir!” Panama’s moody Noriega brags. “It is garbage!” Irony dooms a man; a prisoner up to new era.',
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
