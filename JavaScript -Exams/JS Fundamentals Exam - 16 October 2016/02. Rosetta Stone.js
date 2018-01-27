function solve(arr){
    let lengthMatrix = Number(arr.shift());
    let decodedMatrix = [];

    for (let i = 0; i < lengthMatrix; i++) {
        let currentRow = arr.shift().split(/\s+/g).map(Number);
        decodedMatrix.push(currentRow);
    }
     
    let newMatrix = [];
    for (let e of arr) {
        newMatrix.push(e.split(/\s+/g).map(Number));
    }
    arr = newMatrix;

    let letters = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 
    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let message = "";
    let decRow = 0;
    let decCow = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr[i].length; k++) {
            let sum = decodedMatrix[decRow][decCow] + arr[i][k];
            sum %= 27;
            message += letters[sum];
            decCow++;
            if (decCow > decodedMatrix[decRow].length - 1){
                decCow = 0;
            }
        }
        decRow++;
        decCow = 0;
        if (decRow > decodedMatrix.length - 1){
            decRow = 0;
        }       
    }
    console.log(message);
}
solve([ '2',
'31 32',
'74 37',
'19 0 23 25',
'22 3 12 17',
'5 9 23 11',
'12 18 10 22' ]
);