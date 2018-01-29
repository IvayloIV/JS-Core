function solve(arr) {
    for(let totalElement of arr){
        let book = new Map();
        let elementTokent = totalElement.split('?').filter(a => a != "");
        for(let element of elementTokent){
            let allKeysValues = element.split('&').filter(a => a != "");
            for(let currentElem of allKeysValues){
                if (currentElem.indexOf('=') == -1){
                    continue;
                }
                let keyValue = currentElem.split('=').filter(a => a != "");
                let key = keyValue[0].replace(/(%20|\+)+/g, " ").trim();
                let value = keyValue[1].replace(/(%20|\+)+/g, " ").trim();
                if (!book.has(key)){
                    book.set(key, []);
                }
            book.get(key).push(value);
        }
        }       
        let text = "";
        for(let elements of [...book]){
            text += elements[0] + "=[";
            text += elements[1].join(', ') + ']';
        }
        console.log(text);
    }  
}
solve([`foo=%20foo&value=+val&foo+=5+%20+203`,
`foo=poo%20&value=valley&dog=wow+`,
`url=https://softuni.bg/trainings/coursesinstances/details/1070`,
`https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php`]);