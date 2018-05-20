let calculate = a => a.filter((e, i) => i % 2 == 0).join(' ');

console.log(calculate(['34', '10']));