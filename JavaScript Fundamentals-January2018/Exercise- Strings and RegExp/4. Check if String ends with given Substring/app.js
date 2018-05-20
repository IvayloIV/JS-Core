let chekEnd = (text, e) => text.endsWith(e);

function chekEnd2(text, e) {
    let substrr = text.substr(text.length - e.length, e.length);
    return substrr == e;
}

console.log(chekEnd2('This sentence ends with fun?', 'fun?'));
