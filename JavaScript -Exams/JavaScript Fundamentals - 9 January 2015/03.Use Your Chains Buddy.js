function solve(arr) {
    let allText = arr.pop();
    let text = "";
    let regex = new RegExp("<p>(.*?)<\/p>", "g");
    let findingSent = regex.exec(allText);
    while (findingSent != null){
        let currentSent = findingSent[1];
        for(let i = 0; i < currentSent.length; i++){
            let currentChar = currentSent[i].charCodeAt(0);
            if (currentChar >= 97 && currentChar <= 109){
                currentChar += 13;
            } else if (currentChar >= 109 && currentChar <= 122){
                currentChar -= 13;
            } else if (currentChar <= 47 || currentChar >= 58){
                currentChar = 32;
            }
            text += String.fromCharCode(currentChar);
        }
        findingSent = regex.exec(allText);
    }
    text = text.replace(/\s+/g, " ");
    console.log(text);
}
solve([`<html><head><title></title></head><body><p>Intro</p><ul><li>Item01</li><li>Item02</li><li>Item03</li>
</ul><p>jura qevivat va jrg%^&%^&^%&^))))()%^&%^&^%&^))))()%^&%^&^%&^))))() fyvccrel fabjl</p><div><button>
Click me, baby!</button></div><p> pbaqvgvbaf fabj punvaf ner nofbyhgryl nygubhtu fabj punvaf znl ybbx </p><span>This manual is false, 
do not trust it! The illuminati %^&%^&^%&^))))()wrote it down to trick you!</span><p>vagvzvqngvat gur onfvp vqrn vf ernyyl fvzcyr svg 
gurz bire lbhe gverf qevir sbejneq fybjyl naq gvtugra gurz hc va pbyq jrg</p><p> pbaqvgvbaf guvf vf rnfvre %^&%^&^%&^))))()%^&%^&^%&^))))
()fnvq guna qbar ohg vs lbh chg ba lbhe gverf </p><p>it is frustrating that you have not put car chains yet... embarrassing...</p><p>orsber 
lbh ernpu fabjl ebnqf lbh jvyy znxr lbhe yvsr jnl rnfvre</p><span>it is not that fun making tests sometimes, onlysometimes :)</span></body>`]);