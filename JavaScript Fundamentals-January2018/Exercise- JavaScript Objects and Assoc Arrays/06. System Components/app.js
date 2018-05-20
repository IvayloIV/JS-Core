function systemComponents(arr) {
    let book = new Map();

    for (let e of arr) {
        let inputTokens = e.split(/\s\|\s/);
        let systemName = inputTokens[0];
        let componentName = inputTokens[1];
        let subComponentName = inputTokens[2];

        if (!book.has(systemName)) {
            book.set(systemName, new Map());
        }

        if (!book.get(systemName).has(componentName)) {
            book.get(systemName).set(componentName, [])
        }
        book.get(systemName).get(componentName).push(subComponentName);
    }
    let keys = [...book].sort(sortKeys);

    for (let [keyss, value] of [...keys]) {
        console.log(keyss);
        let currentElements = book.get(keyss);
        let sortedElementsInMap = [...currentElements].sort(sortValues)
        for (let [comp, subComp] of sortedElementsInMap) {
            console.log(`|||${comp}`);
            for (let element of subComp) {
                console.log(`||||||${element}`);
            }
        }
    }

    function sortValues(a, b) {
        let a1 = [...a[1]];
        let b1 = [...b[1]];
        if (a1.length < b1.length) {
            return 1;
        } else if (a1.length > b1.length) {
            return -1;
        }
        return 0;
    }

    function sortKeys(a, b) {
        let a1 = [...a[1]];
        let b1 = [...b[1]];
        if (a1.length < b1.length) {
            return 1;
        } else if (a1.length > b1.length) {
            return -1;
        } else {
            if (a[0] < b[0]) {
                return -1;
            }
            else if (a[0] > b[0]) {
                return 1;
            }
            else {
                return 0;
            }
        }
    }
}
systemComponents([`SULS | Main Site | Home Page`,
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