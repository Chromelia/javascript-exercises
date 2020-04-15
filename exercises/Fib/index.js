/**
 * Fib
 *
 * Write a function which print out the n-th entry in the fibonacci series.
 * The fibonacci series is an ordering of numbers where
 * each number is the sum of the preceeding two.
 * Example sequence: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
 *
 * Examples:
 * fib(4) === 3
 * fib(15) === 610
 */

function fib(n) {
    var f = new Array(n+2);
    f[0] = 0;
    f[1] = 1;
    for (i = 2; i <= n; i++){
        f[i] = f[i-1]+f[i-2];
    }
    return f[n];
}

module.exports = fib;
