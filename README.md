[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/7eEMzrNd)
# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

### Response

Generally, the runtime complexity of the brute force sort algorithm falls under
$T(n) \in \Theta(n * n!)$. This comes as a result of iterating through the elements of
an array, $n$, where the same function is recursively called inside each iteration
with $n - 1$ more iterations. Thus, we would have 
$n * (n - 1) * (n - 2) * ... * 2 * 1$, which is $n!$ by definition.

When checking if the array is sorted, the algorithm iterates through each element 
of the array. Every permutation of the array is checked in the worst case
scenario, and the algorithm will stop at the point where one element is greater
than another.
