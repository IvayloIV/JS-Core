function buildWall(arr) {
    let currentArr = arr.map(Number);

    let sum = [];
    let countSum = 0;
    while (true)
    {
        currentArr = currentArr.filter(a => a < 30);
        if (currentArr.length == 0)
        {
            break;
        }
        sum[countSum] = 0;
        for (var i = 0; i < currentArr.length; i++) {
            currentArr[i]++;
            sum[countSum] += 195;
        }
        countSum++;
    }
    console.log(sum.join(', '));
    console.log(sum.reduce((a, b) => a + b) * 1900 + " pesos");
}
buildWall(['21', '25', '28']);