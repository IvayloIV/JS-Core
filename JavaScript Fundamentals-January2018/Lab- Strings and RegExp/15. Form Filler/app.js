function formFiller(a, b, c, arr) {
    let regex = /<([!@+])([A-Za-z]+)\1>/g;
    let username = a;
    let email = b;
    let phone = c;
    for (let e of arr) {
        let currentElement = e;
        let findingElem = regex.exec(currentElement);
        while (findingElem != null) {
            currentElement = currentElement.replace(/<([\!\@\+])([A-Za-z]+)\1>/g, (allMatch, g1, g2) => totalReplace(allMatch, username, email, phone));
            findingElem = regex.exec(currentElement);
        }
        console.log(currentElement);
    }

    function totalReplace(findingElem, username, email, phone) {
        if (findingElem[1] == "!") {
            return username;
        } else if (findingElem[1] == "@") {
            return email;
        } else if (findingElem[1] == "+") {
            return phone;
        }
    }
}
formFiller('Pesho',
'pesho@softuni.bg',
'90-60-90',
['Hello, <!username!>!',
 'Welcome to your Personal profile.',
 'Here you can modify your profile freely.',
 'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
 'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
 'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']);