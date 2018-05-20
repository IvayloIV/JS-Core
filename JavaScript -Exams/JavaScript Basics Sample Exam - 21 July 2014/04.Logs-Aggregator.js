function solve(arr) {
    arr = arr.filter(a => a !== '');
    let n = Number(arr.shift());
    let book = {};
    for (let i = 0; i < n; i++) {
        let [ip, user, duration] = arr[i].split(/\s+/g).filter(a => a !== '').map(a => a.trim());
        if (!book.hasOwnProperty(user)){
            book[user] = {
                duration: 0,
                ip : []
            };
        }
        book[user]['duration'] += Number(duration);
        if (book[user]['ip'].indexOf(ip) === -1){
            book[user]['ip'].push(ip);
        }
    }

    for (let user of Object.keys(book).sort()) {
        console.log(`${user}: ${book[user]['duration']} [${book[user]['ip'].sort().join(', ')}]`);
    }
}
solve([`4`,
    `10.10.10.10 root 46`,
    `8.8.8.8 root 167`,
    `1.2.3.4 root 120`,
    `5.6.7.8 root 970`,
    `192.168.0.11 root 55`]);