**Quicksort** relies on the `partition` operation to sort things out. The cases of sorting the empty list and one-element lists are not difficult, as we hope you see easily. For other lists, we choose the `head` as *pivot*, and split the `tail` using `partition`. Since `partition` does not sort the resulting lists, we sort them using quicksort itself (using wishful thinking), before we combine them into the sorted overall result.

Use the template given to implement your **quicksort**. *Note*: you need to copy-and-paste the `partition` function from Task 1 to here and make use of it.
