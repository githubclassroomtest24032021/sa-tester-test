function sort_pair_of_lists(p) {
    function sort(lst) {
        function insert(e, lst) {
        return is_null(lst) 
            ? list(e) 
            : e < head(lst)
                ? pair(e, lst)
                : pair(head(lst), insert(e, tail(lst))); 
    } 
    return is_null(lst)
        ? lst 
        : insert(head(lst), sort(tail(lst)));
    }
    return pair(sort(head(p)), sort(tail(p)));
}
