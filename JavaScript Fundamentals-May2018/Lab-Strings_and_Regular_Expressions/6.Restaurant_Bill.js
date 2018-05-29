function solve(arr) {
    let products = arr.filter((e, i) => i % 2 === 0).join(', ');
    let sum = arr.filter((e, i) => i % 2 === 1).map(Number).reduce((a, b) => a + b);
    console.log(`You purchased ${products} for a total sum of ${sum}`);
}

solve(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);