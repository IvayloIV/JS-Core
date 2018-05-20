function speed(arr) {
    let [s, place] = arr;

    let calcSp = function (s, v) {
        let k = s - v;
        if (k <= 0) {
            return false;
        } else if (k > 0 && k <= 20) {
            return "speeding"
        } else if (k > 20 && k <= 40) {
            return "excessive speeding"
        } else if (k > 40) {
            return "reckless driving"
        }
    };

    function CalculateSpeed(s, place) {
        switch (place) {
            case 'motorway': return calcSp(s, 130);
            case 'interstate': return calcSp(s, 90);
            case 'city': return calcSp(s, 50);
            case 'residential': return calcSp(s, 20);
        }
    }
    let currentSpeed = CalculateSpeed(s, place);
    if (currentSpeed){
        console.log(currentSpeed);
    }
}
speed([40, 'city']);