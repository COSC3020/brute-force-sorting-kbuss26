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

Generally, the worst runtime complexity of the brute force sort algorithm falls under
$T(n) \in \Theta(n \cdot n!)$. This comes as a result of iterating through the elements of
an array, $n$, where the same function is recursively called inside each iteration
with $n - 1$ more iterations. Thus, we would have 
$n \cdot (n - 1) \cdot (n - 2) \cdot ... \cdot 2 \cdot 1$, which is $n!$ by definition. 

When checking if the array is sorted, the algorithm iterates through each element 
of the array to see if the element is greater than the previous element. Worst case scenario
would have be $n$, which is already inside the $n!$ loop. Thus, if every permutation is checked
per the worst case scenario, the runtime complexity is $T(n) \in (n \cdot n!)$.

In the best case scenario, the algorithm is checked in linear time, $T(n) \in \Theta(n)$.
This is because the code recursively calls the permutation n times, then checks one
permutation. Since we're assuming is the best case scenario, the permutation checked 
would be sorted, so the time would change to $T(n) = 2n \in \Theta(n)$.

If we generated permutations randomly, the same unsorted permutations could be generated
forever in theory since we do not systemically try permutations nor store them in any memory
to check. While the best case scenario remains to be $T(n) \in \Theta(n)$ since the sorted
permutation is the first to be checked in that case, the worst case changes from $T(n) \in \Theta(n \cdot n!)$
to $T(n) \in \Theta(\infty)$ since the algorithm could keep generating the same unsorted permutations forever.

# Sources
- https://www.pcc.edu/instructional-support/accessibility/mathscience/latex/
