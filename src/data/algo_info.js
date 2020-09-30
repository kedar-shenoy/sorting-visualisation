import React from "react";
const data = {
    IS: (
        <p>
            Insertion sort is a simple sorting algorithm that builds the final
            sorted array (or list) one item at a time. It is much less efficient
            on large lists than more advanced algorithms such as quicksort,
            heapsort, or merge sort.
            <br /> <strong>Time Complexity: O(n^2)</strong>
            <br />
            <a
                href="https://en.wikipedia.org/wiki/Insertion_sort"
                target="_blank"
            >
                More...
            </a>
        </p>
    ),
    QS: (
        <p>
            Quicksort (sometimes called partition-exchange sort) is an efficient
            sorting algorithm. Developed by British computer scientist Tony
            Hoare in 1959[1] and published in 1961,[2] it is still a commonly
            used algorithm for sorting. When implemented well, it can be about
            two or three times faster than its main competitors, merge sort and
            heapsort.
            <br /> <strong>Time Complexity: O(n*log(n))</strong>
            <br />
            <a href="https://en.wikipedia.org/wiki/Quicksort" target="_blank">
                More...
            </a>
        </p>
    ),
    BS: (
        <p>
            Bubble sort, sometimes referred to as sinking sort, is a simple
            sorting algorithm that repeatedly steps through the list, compares
            adjacent elements and swaps them if they are in the wrong order. The
            pass through the list is repeated until the list is sorted. The
            algorithm, which is a comparison sort, is named for the way smaller
            or larger elements "bubble" to the top of the list.
            <br /> <strong>Time Complexity: O(n*2)</strong>
            <br />
            <a href="https://en.wikipedia.org/wiki/Bubble_sort" target="_blank">
                More...
            </a>
        </p>
    ),
};

export default data;
