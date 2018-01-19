function xml(text) {
    text = text.replace(/\n/g, "newLinenn");
    let validMess = /^<message\s+((?:[a-z]+\=\"[A-Za-z0-9\s*\.]+\")(?:\s+[a-z]+\=\"[A-Za-z0-9\s*\.]+\")*)\s*>(.*?)<\/message>$/;

    let ecxtractMess = validMess.exec(text);
    if (ecxtractMess == null) {
        console.log("Invalid message format");
        return;
    }
    let toFrom = ecxtractMess[1];
    let message = ecxtractMess[2];

    let regexTo = /\bto=\"(.*?)\"/;
    let regexFrom = /\bfrom=\"(.*?)\"/;

    let validTo = regexTo.exec(toFrom);
    let validFrom = regexFrom.exec(toFrom);

    if (validTo == null || validFrom == null) {
        console.log("Missing attributes");
        return;
    }

    let to = validTo[1];
    let from = validFrom[1];

    let messageArr = message.split("newLinenn");

    let output = "<article>\n";
    output += `<div>From: <span class="sender">${from}</span></div>\n`;
    output += `<div>To: <span class="recipient">${to}</span></div>\n`;
    output += `<div>\n`;

    for (let m of messageArr) {
        output += `<p>${m}</p>\n`;
    }
    output += `</div>\n</article>`;
    console.log(output);
    console.log();
}
xml(`<message from="Pedro" to="Zaira" topic="Prxima Centauri discoveries">We have detected a distortion in the light patterns of Proxima Centauri.\nIt's likely this is a new rocky planet of approximately Earth-mass.\nThis is very exciting news!\nSincerely, Pedro Amado</message>`);
