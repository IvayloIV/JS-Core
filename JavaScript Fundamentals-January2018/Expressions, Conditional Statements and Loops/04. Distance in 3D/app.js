function distance3D(input) {
    let [x1, y1, z1, x2, y2, z2] = input;
    let dist = Math.sqrt(Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2) + Math.pow(Math.abs(z1 - z2), 2));
    console.log(dist);
}
distance3D([1, 1, 0, 5, 4, 0]);