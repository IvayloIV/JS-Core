function solve(arr) {
    arr = arr.filter(a => a !== '');
    let book = new Map();
    let validNames = [];

    for (let element of arr) {
        let matchAppElement = /^\$app='(.*?)'$/.exec(element);
        let matchPropElements = /^\$(controller|model|view)='(.*?)'&app='(.*?)'$/.exec(element);

        if (matchAppElement !== null) {
            let currentName = matchAppElement[1];
            createNewApp(currentName);
            validNames.push(currentName);
        } else if (matchPropElements !== null) {
            let [some, type, prop, app]  = matchPropElements;
            createNewApp(app);
            book.get(app)[type].push(prop);
        }
    }

    let outputObj = {};
    for (let element of [...book].sort(mySort)) {
        if (!validNames.includes(element[0])){
            continue;
        }
        outputObj[element[0]] = {
            'controllers': element[1]['controller'].sort(),
            'models': element[1]['model'].sort(),
            'views': element[1]['view'].sort()
        }
    }

    console.log(JSON.stringify(outputObj));

    function mySort(a, b) {
        if (a[1]['controller'].length !== b[1]['controller'].length) {
            return b[1]['controller'].length - a[1]['controller'].length;
        }
        return a[1]['model'].length - b[1]['model'].length;
    }

    function createNewApp(app) {
        if (!book.has(app)) {
            book.set(app, {
                'controller': [],
                'model': [],
                'view': []
            });
        }
    }
}
solve([`$controller='PHPController'&app='Language Parser'`,
`$controller='JavaController'&app='Language Parser'`,
`$controller='C#Controller'&app='Language Parser'`,
`$controller='C++Controller'&app='Language Parser'`,
`$app='Garbage Collector'`,
`$controller='GarbageController'&app='Garbage Collector'`,
`$controller='SpamController'&app='Garbage Collector'`,
`$app='Language Parser'`]);