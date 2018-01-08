// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
  if (n === row) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  if (n - 1 - row <= level.length && n - 1 + row >= level.length) {
    level += '#';
  } else {
    level += ' ';
  }
  pyramid(n, row, level);
}

module.exports = pyramid;

// function pyramid(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(
//       constructPieces(n - i, ' ') +
//         constructPieces(2 * i - 1, '#') +
//         constructPieces(n - i, ' ')
//     );
//   }
// }
//
// function constructPieces(n, symbol) {
//   let pieces = '';
//
//   for (let i = 0; i < n; i++) {
//     pieces += symbol;
//   }
//
//   return pieces;
// }

// function pyramid(n) {
//   const midpoint = n - 1;
//
//   for (let row = 0; row < n; row++) {
//     let level = '';
//
//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }
