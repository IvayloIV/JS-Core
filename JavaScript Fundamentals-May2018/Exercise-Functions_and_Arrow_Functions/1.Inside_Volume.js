function solve(arr) {
    for (let i = 0; i < arr.length; i+=3) {
        let x = arr[i];
        let y = arr[i + 1];
        let z = arr[i + 2];
        if (isInside(x, y, z)){
            console.log(`inside`);
        } else {
            console.log(`outside`);
        }
    }

    function isInside(x, y, z) {
        return x >= 10 && x <= 50 && y >= 20 && y <= 80 && z >= 15 && z <= 50;
    }
}
solve([13.1, 50, 31.5,
    50, 80, 50,
    -5, 18, 43]);