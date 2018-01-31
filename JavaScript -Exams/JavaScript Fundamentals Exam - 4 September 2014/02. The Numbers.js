function solve(arr) {
    let currentText = arr[0].match(/[0-9]+/g);
    let book = [];
    for(let element of currentText){
        let hexElement = Number(element).toString(16).toUpperCase();
        while(hexElement.length < 4){
            hexElement = "0" + hexElement;
        }
        book.push(`0x${hexElement}`);
    }
    console.log(book.join('-'));
}
solve([`20`]);