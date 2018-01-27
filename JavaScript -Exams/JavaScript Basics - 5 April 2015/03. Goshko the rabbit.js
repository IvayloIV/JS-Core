function solve(arr) {
    let commands = arr.shift().split(", ");
    let matrix = [];

    for(let element of arr){
        matrix.push(element.split(", "));
    }
    let food = [0, 0, 0, 0, 0];
    let text = [];

    let currentRow = 0;
    let currentCow = 0;
    for(let element of commands){
        if (element == "right"){
            if(!isInside(currentRow, currentCow + 1)){
                food[4]++;
                continue;
            }
            currentCow++;
        }
        else if (element == "left"){
            if(!isInside(currentRow, currentCow - 1)){
                food[4]++;
                continue;
            }
            currentCow--;
        }
        else if (element == "up"){
            if(!isInside(currentRow - 1, currentCow)){
                food[4]++;
                continue;
            }
            currentRow--;
        }
        else if (element == "down"){
            if(!isInside(currentRow + 1, currentCow)){
                food[4]++;
                continue;
            }
            currentRow++;
        }
        matrix[currentRow][currentCow] = eatThis(matrix[currentRow][currentCow]);
        text.push(matrix[currentRow][currentCow]);
    }
    console.log(`{"&":${food[0]},"*":${food[1]},"#":${food[2]},"!":${food[3]},"wall hits":${food[4]}}`);
    if (text.length == 0){
        console.log("no");
        return;
    }
    console.log(text.join("|"));

    function eatThis(product){
        product = replaceAlm(/\{\&\}/g, "{&}", 0, product);
        product = replaceAlm(/\{\*\}/g, "{*}", 1, product);
        product = replaceAlm(/\{\#\}/g, "{#}", 2, product);
        product = replaceAlm(/\{\!\}/g, "{!}", 3, product);
        return product;
    }

    function replaceAlm(pattern, currentSym, currentFood, product){
        let kiwi = pattern.exec(product);
        while(kiwi != null){
            product = product.replace(currentSym, '@');
            food[currentFood]++;
            kiwi = pattern.exec(product);
        }
        return product;
    }

    function isInside(currentRow, currentCow){
        return currentRow >= 0 && currentRow <= matrix.length - 1 && currentCow >= 0 && currentCow <= matrix[currentRow].length - 1;
    }
}
solve([ 'up, right, left, down',
'as{!}xnk' ]);