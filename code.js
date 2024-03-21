/*
    Keifer Buss 
    COSC-3020-01 
    Last modified Mar. 20 2024
    Sources: 
    - None for this program
*/

// The main function
function permutationSort(a) {
    return getPerms(a, 0);
}

// Second main function with more parameters for recursive calls
function getPerms(a, lo) {
    // Done swapping to the last element - go back to swapping previous elements
    if (a.length <= lo + 1) {
        return 1;
    }
    // Recursive case
    var accum = 0;
    for(var i = lo; i < a.length; i++) {

        // Avoid swapping same elements
        if (a[lo] != a[i]) {
            swap(a, lo, i);
        }

        // Recursive call
        accum += getPerms(a, lo + 1);

        // Check with the new array if sorted
        if (checkSorted(a)) {
            return accum;
        }

        // Avoid swapping same elements
        if (a[lo] != a[i]) {
            swap(a, lo, i);
        }

    }
    return accum;
}

// Swap function of array elements
function swap(a, b, c) {
    var temp = a[b];
    a[b] = a[c];
    a[c] = temp;
    return;
}

// Check if whole list is sorted by recursion
function checkSorted(a) {
    if (a.length === 1) {return true;}
    return ((a[0] <= a[1]) ? checkSorted(a.slice(1, a.length)) : false);
}

// Factorial to check number of permutations (iteratively to avoid repetitive methods)
function factorial(n) {
    if (n <= 1) {return 1};
    var mul = 1;
    for (var i = 1; i <= n; i++) {
        mul *= i;
    }
    return mul;
}
