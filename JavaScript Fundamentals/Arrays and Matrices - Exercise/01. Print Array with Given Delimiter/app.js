function printArray(arr) {
    let delimeter = arr.pop();

    let result = `${arr.shift()}`;
    for (let current of arr) {
        result += delimeter + current;
    }
    console.log(result);
}
printArray(['One', 'Two', 'Three', 'Four', 'Five', '-']);