function solve(arr) {
    let count = 0;
    let position = 0;
    for(let element of arr){
        if (count == 0 || position == -1){
            position = element.indexOf('o');
            count++;
            continue;
        }
        let left = 0;
        let right = 0;
        for(let i = 0; i < element.length; i++){
            let currentArrow = element[i];
            if (currentArrow == ">"){
                right++;
            } else if (currentArrow == "<"){
                left++;
            }
        }
        let windPower = right - left;
        position += windPower;
        if (element[position] == "_" || element[position] == "~"|| element[position] == "/"|| element[position] == "\\"|| element[position] == "|"){
            break;
        }
        count++;
    }
    let lastDir = arr[count].split('');
    let symbol = lastDir[position];
    if (symbol == "_"){
        console.log(`Landed on the ground like a boss!`);
    } else if (symbol == "~"){
        console.log(`Drowned in the water like a cat!`);
    } else if (symbol == "\\" || symbol == "/" || symbol == "|"){
        console.log(`Got smacked on the rock like a dog!`);
    }
    console.log(`${count} ${position}`);
}
solve([
    `--->---------------------`,
    `------->-----------------`,
    `-------------------------`,
    `-----------------<-------`,
    `-----<--------->---------`,
    `-------------------<-----`,
    `--------->---------------`,
    `----o--------------------`,
    `>>>>>>>>>>>>>>>----->----`,
    `___/\\____<__/\\__~~<<<<---`]);