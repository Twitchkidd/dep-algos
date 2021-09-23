// * The Primality Test

// * A prime number is any positive integer that is only divisable by 1 and itself.

const isPrime = number => {
	// Early returns spare us some processing later
	if (!Number.isInteger(number)) {
		return false;
	}
	if (number <= 1) {
		return false;
	}
	// Looping from 3 on is fine because we know that 2 and 3 are prime numbers
	if (number <= 3) {
		return true;
	}
	if (number % 2 === 0) {
		return false;
	}
	const limit = Math.sqrt(number);
	for (let divisor = 3; divisor <= limit; divisor += 2) {
		if (number % divisor === 0) {
			return false;
		}
	}
	return true;
};

console.log([...Array(101).keys()].filter(num => isPrime(num)));
