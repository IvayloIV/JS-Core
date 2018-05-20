function solveBill(arr) {
    let names = arr.filter((a, i) => i % 2 == 0).join(', ');
    let sum = arr.filter((a, i) => i % 2 == 1).map(Number).reduce((a, b) => a + b);
    console.log(`You purchased ${names} for a total sum of ${sum}`);
}
solveBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69']);