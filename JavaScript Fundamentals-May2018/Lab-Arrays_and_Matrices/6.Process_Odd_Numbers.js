let solve = (arr) => arr.filter((e, i) => i % 2 === 1).map(a => a * 2).reverse().join(' ');

console.log(solve([3, 0, 10, 4, 7, 3]));