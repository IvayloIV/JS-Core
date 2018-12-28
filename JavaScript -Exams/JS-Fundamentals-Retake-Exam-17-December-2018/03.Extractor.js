function solve(str) {
    let lengthToGet = Number(str.match(/[0-9]+/)[0]);
    str = str.substr(lengthToGet.toString().length, lengthToGet);
    let splitCharacter = str[str.length - 1];

    let tokens = str.split(splitCharacter);
    let regex = new RegExp(`[${tokens[0]}]`, 'g');

    let result = tokens[1];
    let exec;
    while ((exec = regex.exec(str)) != null) {
        result = result.replace(exec[0], "");
    }

    result = result.replace(/#/g, ' ');
    console.log(result);
}

solve("47*0-9%&+I0'm0#a#stu99%d%e&nt#a9t#So00ft%Uni*!+");