/**
 * 
 */

function findMissingArrayElement(arr) {
	var expectedLength = arr.length + 1;

	var expectedTotal = expectedLength * (expectedLength + 1) / 2;

	var actualTotal = 0;
	for (var i = 0; i < arr.length; i++) {
		actualTotal += arr[i];
	}

	var missingNumber = expectedTotal - actualTotal;
	return missingNumber;
}

var arr = [ 1, 3, 4, 5, 6 ];

findMissingArrayElement(arr);