// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const arr = [root, 's'];
  const counters = [0];

  while (arr.length > 1) {
    const node = arr.shift();

    if (node === 's') {
      counters.push(0);
      arr.push('s');
    } else {
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }

  return counters;
}

module.exports = levelWidth;

// function levelWidth(root) {
//   const results = [1];
//   let arr = [root];
//   let temp = [];
//
//   while (arr.length) {
//     for (let node of arr) {
//       temp.push(...node.children);
//     }
//
//     if (temp.length) {
//       results.push(temp.length);
//       arr = temp;
//       temp = [];
//     } else {
//       return results;
//     }
//   }
//
//   return results;
// }
