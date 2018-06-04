function solveMap(arr) {
    let book = new Map();
    for (let elements of arr) {
        let [systemName, componentName, subComponentName] = elements.split('|').map(a => a.trim());
        if (!book.has(systemName)){
            book.set(systemName, new Map());
        }
        if (!book.get(systemName).has(componentName)){
            book.get(systemName).set(componentName, []);
        }
        book.get(systemName).get(componentName).push(subComponentName);
    }

    for (let systems of [...book].sort(systemsSort)) {
        console.log(systems[0]);
        for (let components of [...systems[1]].sort(sortComponents)) {
            console.log(`|||${components[0]}`);
            for (let subComponents of components[1]) {
                console.log(`||||||${subComponents}`);
            }
        }
    }

    function sortComponents(a, b) {
        return b[1].length - a[1].length;
    }

    function systemsSort(a, b) {
        if (a[1].size !== b[1].size){
            return b[1].size - a[1].size;
        }
        return a[0].localeCompare(b[0]);
    }
}

function solveObj(arr) {
    let book = {};
    for (let elements of arr) {
        let [systemName, componentName, subComponentName] = elements.split('|').map(a => a.trim());
        if (!book.hasOwnProperty(systemName)){
            book[systemName] = {};
        }
        if (!book[systemName].hasOwnProperty(componentName)){
            book[systemName][componentName] = [];
        }
        book[systemName][componentName].push(subComponentName);
    }

    for (let systems of Object.entries(book).sort(systemsSort)) {
        console.log(systems[0]);
        for (let components of Object.entries(systems[1]).sort(sortComponents)) {
            console.log(`|||${components[0]}`);
            for (let subComponents of components[1]) {
                console.log(`||||||${subComponents}`);
            }
        }
    }

    function sortComponents(a, b) {
        return b[1].length - a[1].length;
    }

    function systemsSort(a, b) {
        if (Object.keys(a[1]).length !== Object.keys(b[1]).length){
            return Object.keys(b[1]).length - Object.keys(a[1]).length;
        }
        return a[0].localeCompare(b[0]);
    }
}

solveObj([`SULS | Main Site | Home Page`,
`SULS | Main Site | Login Page`,
`SULS | Main Site | Register Page`,
`SULS | Judge Site | Login Page`,
`SULS | Judge Site | Submittion Page`,
`Lambda | CoreA | A23`,
`SULS | Digital Site | Login Page`,
`Lambda | CoreB | B24`,
`Lambda | CoreA | A24`,
`Lambda | CoreA | A25`,
`Lambda | CoreC | C4`,
`Indice | Session | Default Storage`,
`Indice | Session | Default Security`]);