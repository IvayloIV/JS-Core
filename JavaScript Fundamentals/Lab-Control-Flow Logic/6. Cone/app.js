function cone(r, h) {
    let v = (1 / 3) * Math.PI * r * r * h;
    let s = Math.PI * r * (r + Math.sqrt(r * r + h * h));
    console.log(v);
    console.log(s);
}
cone(3, 5);