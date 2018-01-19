function spice(num) {
    let yieldd = Number(num);
    let sum = 0;

    let days = 0;
    while (yieldd >= 100) {
        sum += (yieldd - 26);
        days++;
        yieldd -= 10;
    }
    if (sum > 26) {
        sum -= 26;
    }

    console.log(days);
    console.log(sum);
}
spice('450');