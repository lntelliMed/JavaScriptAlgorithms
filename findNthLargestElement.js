/**
 * 
 */

function findNthLargestElement(arr, n) {

	return arr.sort()[arr.length - n];
}

findNthLargestElement([ 2, 4, 42, 1, 55 ], 2);