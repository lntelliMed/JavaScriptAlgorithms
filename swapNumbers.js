/**
 * 
 */
function swapNumbersTemp(a, b) {
	console.log("Before swapping, the values of (a,b) are: (" + a + ", " + b
			+ ")");

	var temp = a;
	a = b;
	b = temp;
	console.log("After invoking swapNumbersTemp(), the values of (a,b) are: ("
			+ a + ", " + b + ")");

}

swapNumbersTemp(10, 20);

function swapNumbersAdd(a, b) {
	console.log("Before swapping, the values of (a,b) are: (" + a + ", " + b
			+ ")");

	a = a + b;
	b = a - b;
	a = a - b;
	console.log("After invoking swapNumbersAdd(), the values of (a,b) are: ("
			+ a + ", " + b + ")");

}

swapNumbersAdd(10, 20);

function swapNumbersMultiply(a, b) {
	console.log("Before swapping, the values of (a,b) are: (" + a + ", " + b
			+ ")");

	a = a * b;
	b = a / b;
	a = a / b;
	console
			.log("After invoking swapNumbersMultiply(), the values of (a,b) are: ("
					+ a + ", " + b + ")");

}

swapNumbersMultiply(10, 20);