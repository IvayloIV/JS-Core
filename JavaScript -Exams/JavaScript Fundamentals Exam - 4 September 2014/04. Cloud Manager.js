function solve(arr) {
    arr = arr.filter(a => a != '');
    let book = new Map();
    for(let element of arr){
        let elementTokens = element.split(/\s+/g).filter(a => a != '');
        let name = elementTokens[0];
        let extension = elementTokens[1];
        let size = Number(elementTokens[2].substring(0, elementTokens[2].length - 2));
        if (!book.has(extension)){
            book.set(extension, {
                'names' : [],
                'size' : 0
            });
        }
        book.get(extension)['names'].push(name);
        book.get(extension)['size'] += size;
    }
    let obj = {};
    for(let element of [...book].sort((a,b) => a[0].localeCompare(b[0]))){
        let extension = element[0];
        let sortNames = element[1]['names'].sort();
        let sizeStr = `${element[1]['size'].toFixed(2)}`;
        obj[extension] = {
            "files" : sortNames,
            "memory" : sizeStr
        };
    }
    console.log(JSON.stringify(obj));
}
solve([`problemOne .cs 0.2MB`,
`compiler .cpp 0.3MB`,
`kernel .asm 52.5MB`,
`problemTwo .cs 0.9MB`,
`problemThree .cs 0.9MB`,
`songs-archive .iso 23450.5MB`,
`GNU_HURD .asm 242.40MB`,
`f.lux .exe 3.2MB`,
`debugger .exe 54.22MB`,
`flag .asm 231.09MB`,
`gentoo .asm 178.00MB`,
`cloudManager .java 2MB`]);