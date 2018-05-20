function userNames(arr) {
    let output = [];
    for (let user of arr) {
        let text = "";
        let splitUser = user.split('@');
        let firstLetters = splitUser[1].split('.').map(a => a[0]).join('');
        text += splitUser[0] + "." + firstLetters;
        output.push(text);
    }
    console.log(output.join(', '));
}
userNames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);