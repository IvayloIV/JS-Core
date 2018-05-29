function solve(username, email, phone, arr) {
    for (let arrElement of arr) {
        console.log(arrElement.replace(/<([!@+])[A-Za-z]+\1>/g, (g0, g1) => {
            switch (g1){
                case '!' : return username;
                case '@' : return email;
                case '+' : return phone;
            }
        }));
    }
}
solve('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']
);