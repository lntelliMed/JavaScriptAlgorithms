function bubbleSort(arr) {

    for (var i = 0;  i < arr.length-1; i++) {
        for (var j = 0; j < arr.length-1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
            }
        }

    }

    return arr;
}


function swap(array, i, j) {
    var replacement = array[i];
    array[i] = array[j];
    array[j] = replacement;
}

