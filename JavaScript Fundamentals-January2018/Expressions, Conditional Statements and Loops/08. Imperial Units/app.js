function imperial(num) {
    let leftPart = Math.floor(num / 12);
    let rightPart = num % 12;
    console.log(`${leftPart}'-${rightPart}"`);
}
imperial(55);