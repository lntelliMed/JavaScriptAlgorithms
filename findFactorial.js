/**
 * 
 */

function findFactorial(num) {
	var fact = 1;
	for (var i = 1; i <= num; i++) {
		fact *= i;
	}

	return fact;
}

findFactorial(0);
findFactorial(3);