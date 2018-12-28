function solve(arr) {
    let commands = (() => {
        let result = '';

        let filterTypes = {
            UPPERCASE: (a) => a === a.toUpperCase() && isNaN(a),
            LOWERCASE: (a) => a === a.toLowerCase()&& isNaN(a),
            NUMS: (a) => !isNaN(a)
        };

        let sortTypes = {
            A : (a, b) => a.localeCompare(b),
            Z : (a, b) => b.localeCompare(a),
        };
        
        function filter(tokens) {
            let filterType = tokens[0];
            let positionStr = tokens[1];
            let str = tokens[2];

            let currentFunc = filterTypes[filterType](str);
            str = str.split('').filter(filterTypes[filterType]).join('');
            get([positionStr, str]);
        }

        function sort(tokens) {
            let sortType = tokens[0];
            let positionStr = tokens[1];
            let str = tokens[2];

            str = str.split('').sort(sortTypes[sortType]).join('');
            get([positionStr, str]);
        }
        
        function rotate(tokens) {
            let rotateCount = Number(tokens[0]);
            let positionStr = tokens[1];
            let chars = tokens[2].split('');

            rotateCount = rotateCount % chars.length;
            let firstPart = chars.splice(rotateCount * -1);
            let str = firstPart.join('') + chars.join('');
            get([positionStr, str]);
        }

        function get(tokens) {
            let position = Number(tokens[0]);
            let str = tokens[1];

            result += str[position - 1];
        }

        function getResult() {
            return result;
        }

        return {
            filter,
            sort,
            rotate,
            get,
            getResult
        }
    })();

    for (let command of arr) {
        commands[command[0]]([command[1], command[2], command[3]]);
    }

    console.log(commands['getResult']());
}

solve([["filter", "UPPERCASE", 4, "AkIoRpSwOzFdT"],
    ["sort", "A", 3, "AOB"],
    ["sort", "A", 3, "FAILCL"],
    ["sort", "Z", 2, "OUTAGN"],
    ["filter", "UPPERCASE", 2, "01S345U7N"],
    ["rotate", 2, 2, "DAN"],
    ["get", 2, "PING"],
    ["get", 3, "?- 654"]]
);