function solve(arr){
    let specialKey = arr.shift();
    let regex = new RegExp(`((?:\\s|^)${specialKey}\\s+)([!%\\$#A-Z]{8,})(\\s|\\.|\\,|$)`, "gi");
    for (let e of arr) {
        let currentElement = e;
         currentElement = currentElement.replace(regex, (allMatch, g1, g2, g3) => replaceText(allMatch, g1, g2, g3));
        console.log(currentElement);
    } 

    function replaceText(allMatch, g1, g2, g3){
        if (g2.toUpperCase() != g2){
            return allMatch;
        }
        g2 = g2.replace(/\!/g, "1")
        .replace(/\%/g, "2")
        .replace(/\#/g, "3")
        .replace(/\$/g, "4")
        g2 = g2.toLowerCase();
        return g1 + g2 + g3;
    }
}
solve([`specialKey`,
    `In this text the specialKey HELLOWORLD! is correct, but`,
    `the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while`,
    `SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!`]);