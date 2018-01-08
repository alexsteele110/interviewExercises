// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

module.exports = fib;

// function fib(n) {
//   const sequence = [0, 1];
//
//   if (n > 1) {
//     for (let i = 2; i <= n; i++) {
//       sequence.push(sequence[i - 2] + sequence[i - 1]);
//     }
//     return sequence[n];
//   } else {
//     return sequence[n];
//   }
// }

// function fib(n) {
//   const result = [0, 1];
//
//   for (let i = 2; i <= n; i++) {
//     const a = result[i - 1];
//     const b = result[i - 2];
//
//     result.push(a + b);
//   }
//
//   return result[n];
// }

// function fib(n, result = [0, 1], index = 2) {
//   if (n < index) {
//     return result[n];
//   }
//
//   result.push(result[index - 1] + result[index - 2]);
//   index++;
//   return fib(n, result, index);
// }
