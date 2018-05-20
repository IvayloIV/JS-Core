function solve(arr) {
    let allPlaces = {
        '_' : `Landed on the ground like a boss!`,
        '~' : 'Drowned in the water like a cat!',
        '|' : 'Got smacked on the rock like a dog!',
        '/' : 'Got smacked on the rock like a dog!',
        '\\' : 'Got smacked on the rock like a dog!',
    };
    let position = -1;
    for (let i = 0; i < arr.length; i++) {
        let currentRow = arr[i].split('');
        if (position === -1){
            position = currentRow.indexOf('o');
            continue;
        }
        let rightWing = currentRow.filter(a => a === '>').length;
        let leftWing = currentRow.filter(a => a === '<').length;
        position += (rightWing - leftWing);
        if (!/[<>o\-]/.test(currentRow[position])){
            console.log(allPlaces[currentRow[position]]);
            console.log(`${i} ${position}`);
            return;
        }
    }
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