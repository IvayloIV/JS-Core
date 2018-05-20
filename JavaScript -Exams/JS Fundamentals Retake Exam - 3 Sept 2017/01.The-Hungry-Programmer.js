function solve(products, commands) {
    let eatenFood = 0;
    for (let command of commands) {
        if (command === "End"){
            break;
        }
        if (command === 'Serve'){
            if (products.length > 0) {
                console.log(`${products.pop()} served!`);
            }
        } else if (command === 'Eat'){
            if (products.length > 0) {
                console.log(`${products.shift()} eaten`);
                eatenFood++;
            }
        }
        let tokens = command.split(' ');
        if (tokens.length === 2 && tokens[0] === 'Add'){
            products.unshift(tokens[1]);
        } else if (tokens.length === 3 && tokens[0] === 'Consume'){
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            if (startIndex >= 0 && startIndex <= products.length - 1 && endIndex >= 0 && endIndex <= products.length - 1){
                products.splice(startIndex, endIndex - startIndex + 1);
                eatenFood += endIndex - startIndex + 1;
                console.log(`Burp!`);
            }
        } else if(tokens.length === 3 && tokens[0] === 'Shift'){
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            if (startIndex >= 0 && startIndex <= products.length - 1 && endIndex >= 0 && endIndex <= products.length - 1){
                let tepm = products[startIndex];
                products[startIndex] = products[endIndex];
                products[endIndex] = tepm;
            }
        }
    }
    if (products.length === 0){
        console.log(`The food is gone`);
    } else {
        console.log(`Meals left: ${products.join(', ')}`);
    }
    console.log(`Meals eaten: ${eatenFood}`);
}
solve(['chicken', 'steak', 'eggs'],
    ['Serve',
        'Eat',
        'End',
        'Consume 0 1']

);