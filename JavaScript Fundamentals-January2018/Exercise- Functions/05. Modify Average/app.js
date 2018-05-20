function modifyAverage(num) {
    let sum = (a, b) => a + b;

    function averageSum(num) {
        let length = num.length;
        let sumAll = 0;
        for (var i = 0; i < num.length; i++) {
            let currentNum = num[i];
            sumAll = sum(sumAll, Number(currentNum));
        }
        return sumAll / length;
    }

    while (true) {
        let average = averageSum(num.toString());

        if (average > 5) {
            break;
        }

        num += "9";
    }
    console.log(num);
}
modifyAverage(101);