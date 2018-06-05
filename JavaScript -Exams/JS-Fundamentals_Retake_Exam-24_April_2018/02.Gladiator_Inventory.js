function solve(arr) {
    let items = arr.shift().split(' ');
    let commands = {Buy, Trash, Repair, Upgrade};
    for (let element of arr) {
        if (element === 'Fight!') break;
        let [command, equipment] = element.split(' ');
        commands[command](equipment);
    }

    console.log(items.join(' '));
    
    function Buy(element) {
        if (items.indexOf(element) === -1){
            items.push(element);
        }
    }
    
    function Trash(element) {
        let indexOfEl = items.indexOf(element);
        if(indexOfEl !== -1) {
            items.splice(indexOfEl, 1);
            return true;
        }
        return false;
    }
    
    function Repair(element) {
        let isDeleted = Trash(element);
        if (isDeleted){
            Buy(element);
        }
    }
    
    function Upgrade(element) {
        let [equipment, update] = element.split('-');
        let indexOfEl = items.indexOf(equipment);
        if (indexOfEl !== -1){
            items.splice(indexOfEl + 1, 0, `${equipment}:${update}`)
        }
    }
}

solve([`SWORD Shield Spear`,
`Trash Bow`,
`Repair Shield`,
`Upgrade Helmet-V`,
`Fight!`]);