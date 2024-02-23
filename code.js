/*
    Keifer Buss 
    COSC-3020-01 
    Last modified Feb. 22 2024
    Sources: 
    - None for this program
*/

// Block of permutation check testing - run if you want
/*
array1 = [[2, 3, 4, 5, 1], // Worst case
          [1, 2, 3, 4, 5], // Best case
          [5, 4, 4, 2, 2, 1], // Stability check
          [7, 6, 3, 4, 5, 2, 1], // Random number from keyboard slam check
          [-3], // One element check
          [], // Zero element check
          [2, 4, 7, 10, 14, 19, 25, 32, 39, 1, 2, 3]]; // Inadvertent computer benchmark
var temp = [];
for(var i = 0; i < array1.length; i++) {
    temp = [];
    for (var j = 0; j < array1[i].length; j++) {
        temp.push((array1[i])[j]);
    }
    console.log("Array " + (i + 1) + " sorted in " + permutationSort(array1[i], 0) + 
                " out of " + factorial(array1[i].length) + " permutations\n [" + 
                temp + "] ---> [" + array1[i] + "]");
}
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
