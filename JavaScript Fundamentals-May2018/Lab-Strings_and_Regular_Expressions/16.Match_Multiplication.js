function solve(text) {
    console.log(text.replace(/(-?[0-9]+)\s*\*\s*(-?[0-9]+(?:\.[0-9]+)*)/g, (all, g1, g2) => {
        return Number(g1) * Number(g2);
    }));
}
solve(`My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).`);