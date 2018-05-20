function insideVolume(arr) {
    for (var i = 0; i < arr.length; i += 3) {
        x = arr[i];
        y = arr[i + 1];
        z = arr[i + 2];

        if (isInside(x, y, z)) {
            console.log('inside');
        } else {
            console.log('outside');
        }
    }

    function isInside(x, y, z) {
        let x1 = 10;
        let x2 = 50;

        let y1 = 20;
        let y2 = 80;

        let z1 = 15;
        let z2 = 50;

        if ((x >= x1 && x <= x2) && (y >= y1 && y <= y2) && (z >= z1 && z <= z2)) {
            return true;
        }
        else {
            return false;
        }
    }
}
insideVolume([8, 20, 22]);