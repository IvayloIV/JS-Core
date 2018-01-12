function treasureLocator(arr) {
    let isTuvalu = function (x, y) { return (x >= 1 && x <= 3 && y >= 1 && y <= 3) ? true : false };
    let isTokelau = function (x, y) { return (x >= 8 && x <= 9 && y >= 0 && y <= 1) ? true : false };
    let isSamoa = function (x, y) { return (x >= 5 && x <= 7 && y >= 3 && y <= 6) ? true : false };
    let isTonga = function (x, y) { return (x >= 0 && x <= 2 && y >= 6 && y <= 8) ? true : false };
    let isCook = function (x, y) { return (x >= 4 && x <= 9 && y >= 7 && y <= 8) ? true : false };

    function calculateLocation(x, y) {
        let p = isTuvalu(x, y);
        if (isTuvalu(x, y)) {
            return "Tuvalu";
        } else if (isTokelau(x, y)) {
            return "Tokelau";
        } else if (isSamoa(x, y)) {
            return "Samoa";
        } else if (isTonga(x, y)) {
            return "Tonga";
        } else if (isCook(x, y)) {
            return "Cook";
        } else {
            return "On the bottom of the ocean";
        }
    }

    for (var i = 0; i < arr.length; i += 2) {
        let [x, y] = [arr[i], arr[i + 1]];
        let output = calculateLocation(x, y);
        console.log(output);
    }
}
treasureLocator([4, 2, 1.5, 6.5, 1, 3])