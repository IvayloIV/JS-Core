function pairs(arr) {
    let count = 0;

    for (var i = 0; i < arr.length; i++) {
        for (var k = 0; k < arr[i].length; k++) {
            if (k < arr[i].length - 1) {           
                if (arr[i][k] == arr[i][k + 1]) {
                    count++;
                }
            }
            if (i < arr.length - 1) {
                if (arr[i][k] == arr[i + 1][k]) {
                    count++;
                }
            }
        }
    }
    console.log(count);
}
pairs([[2, 2, 5, 7, 4], [4, 0, 5, 3, 4], [2, 5, 5, 4, 2]]);