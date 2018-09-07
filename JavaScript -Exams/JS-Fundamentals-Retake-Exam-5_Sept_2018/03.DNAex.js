function solve(arr) {
    let pattern = "^([A-Za-z!@#$?]+)=([0-9]+)--([0-9]+)<<([A-Za-z]+)$";
    let book = {};

    for (let line of arr) {
        if (line === "Stop!") {
            break;
        }
        let match = line.match(pattern);
        if (match === null) {
            continue;
        }
        let nameEncoded = match[1];
        let nameGene = encriptName(nameEncoded);

        let length = Number(match[2]);
        let countGenes = Number(match[3]);
        let organism = match[4];
        if (nameGene.length !== length) {
            continue;
        }
        if (!book.hasOwnProperty(organism)) {
            book[organism] = 0;
        }
        book[organism] += countGenes;
    }

    for (let element of Object.entries(book).sort((a, b) => b[1] - a[1])) {
        console.log(`${element[0]} has genome size of ${element[1]}`);
    }

    function encriptName(nameEncoded) {
        let name = "";
        for (let i = 0; i < nameEncoded.length; i++) {
            if (/[A-Za-z]/.test(nameEncoded[i])) {
                name += nameEncoded[i];
            }
        }
        return name
    }
}

solve([`!@ру?би#=4--57<<polecat`,
`?do?@#ri#=4--89<<polecat`,
`=12<<cat`,
`!vi@rus?=2--142`,
`@pa!rcu>ba@cteria$=13--234<<mouse`,
`?!cur##viba@cter!!=11--680<<cat`,
`Stop!`]);