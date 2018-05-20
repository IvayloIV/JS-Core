let chekStart = (text, e) => text.startsWith(e) ? true : false;

function chekStart2(text, e) {
    let substrr = text.substr(0, e.length);
    return substrr == e;
}

console.log(chekStart2('How have you been?', 'how'));