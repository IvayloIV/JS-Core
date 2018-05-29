function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
        let [username, mail] = arr[i].split('@');
        arr[i] = username + '.' + mail.split('.').map(a => a[0]).join('');
    }
    console.log(arr.join(', '));
}
solve(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);