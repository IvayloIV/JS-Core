function solve(arr) {
    let bill = Number(arr[0]);
    let mood = arr[1];

    if (mood == "happy"){
        bill *= 0.1;
    } else if (mood == "married"){
        bill *= 0.0005;
    } else if (mood == "drunk"){
        let currentBill = bill * 0.15;
        let firstNumStr = currentBill.toString();
        let firstNum = Number(firstNumStr[0]);
        let startBil = 1;
        for(let i = 0; i < firstNum; i++){
            startBil *= currentBill;
        }
        bill = startBil;
    } else {
        bill *= 0.05;
    }
    console.log(bill.toFixed(2));
}
solve(['200', 'drunk']);