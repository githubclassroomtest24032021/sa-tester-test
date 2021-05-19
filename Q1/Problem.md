**Quicksort** is considered to be:
- Easy to understand;
- Moderately not simple to implement correctly;
- A little hard to analyze;
- Challenging to further optimize.

However, with the magic power of Source, **quicksort** can be easily understood and implemented. In order to implement quicksort using the List library in Source, we first need to implement a `partition` operation on a list that adheres to the following specification.

The function `partition` is applied to a possibly unsorted list `xs` and an element `p` that we call *pivot*. It returns a pair of two possibly unsorted lists, that when combined contain all elements of `xs`. The head of the pair contains all elements of `xs` that are smaller than or identical to `p` and the tail of the pair contains all elements of `xs` that are larger than `p`. In this task, it is irrelevant in what order the elements of `xs` appear in the result lists.

For example, `partition(list(5,6,1,7,9,2), 6)` may return a result that is equal to `pair(list(2, 1, 6, 5), list(9, 7))`. The order does not matter. A result that is equal to `pair(list(5, 6, 1, 2), list(7, 9))` is also allowed.

Please fill in the template given and implement the `partition` operation on a list.

Use the test environment (airplane icon) to run some test cases that we provide, but
do not rely only on these test cases. Because the sort order in the lists returned by partition is not specified, the test cases make use of a special function `sort_pair_of_lists`. This function sorts the result of partition to enable testing.
