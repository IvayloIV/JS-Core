function thePyramid(size, quantity) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let height = 0;

    let count = 1;
    while (size >= 1) {
        let miniSize = (size * 4) - 4;
        let maxSize = (size * size) - miniSize;
        if (size == 1 || size == 2) {
            if (size == 1) {
                gold += 1;
            } else {
                gold += 4;
            }
        } else if (count % 5 == 0){
            lapis += miniSize;
            stone += maxSize;
        }else{
            stone += maxSize;
            marble += miniSize;
        };

        size -= 2;
        count++;
        height++;
    }
    console.log(`Stone required: ${Math.ceil(stone * quantity)}`);
    console.log(`Marble required: ${Math.ceil(marble * quantity)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis * quantity)}`);
    console.log(`Gold required: ${Math.ceil(gold * quantity)}`);
    console.log(`Final pyramid height: ${Math.floor(height * quantity)}`);
}
thePyramid(23, 0.5);