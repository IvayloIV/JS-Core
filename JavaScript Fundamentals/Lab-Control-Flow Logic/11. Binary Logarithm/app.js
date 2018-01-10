function binaty(arr) {
    for (let num of arr) {
        let result = Math.log2(num);
        console.log(result);
    }
}

binaty([1024,
1048576,
256,
1,
2,
50,
100]);