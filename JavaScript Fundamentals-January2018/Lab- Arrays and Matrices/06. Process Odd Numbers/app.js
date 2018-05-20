let solve = a => a.filter((e, i) => i % 2 == 1).map(d => d * 2).reverse().join(' ');

console.log(solve([3, 0, 10, 4, 7, 3]));