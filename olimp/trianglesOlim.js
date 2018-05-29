function solve(p, q) {
    let result = [];
    let start = q * 2 - 1;
    let end = p * 4 - 3;

    let emptyStar = 0;
    let middle = Math.abs(p - q);
    let maxLength = Math.max(start, end);
    let emptyMiddle = 1;
    for (let i = 0; i < q; i++) {
        let currentRow = '';
        if (i === 0){
            let emptySlots = maxLength - start;
            if (emptySlots > 0){
                emptySlots /= 2;
            }
            emptyStar = emptySlots;
            currentRow += ' '.repeat(emptySlots);
            currentRow += '*'.repeat(start);
        }  else if (i === q - 1){
            emptyStar--;
            currentRow += ' '.repeat(emptyStar);
            currentRow += '*'.repeat(end);
        } else if (i > middle){
            emptyStar--;
            currentRow += ' '.repeat(emptyStar);
            currentRow += '*';
            currentRow += ' '.repeat(emptyMiddle);
            currentRow += '*';
            currentRow += ' '.repeat(maxLength - 4 - (emptyStar * 2) - (emptyMiddle * 2));
            currentRow += '*';
            currentRow += ' '.repeat(emptyMiddle);
            currentRow += '*';
            emptyMiddle += 2;
        } else {
            emptyStar++;
            currentRow += ' '.repeat(emptyStar);
            currentRow += '*';
            currentRow += ' '.repeat(maxLength - 2 - (emptyStar * 2));
            currentRow += '*';
        }
        result.push(currentRow);
    }
    return result.join('\n');
}
