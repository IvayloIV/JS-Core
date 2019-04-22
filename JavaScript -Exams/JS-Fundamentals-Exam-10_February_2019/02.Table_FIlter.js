function solve(matrix, sortType) {
    let tokens = sortType.split(' ');
    let command = tokens[0];

    const header = tokens[1];
    const value = tokens[2];
    const index = matrix[0].indexOf(header);

    const commands = (() => {
        function hide(matrix, index) {
            for (let i = 0; i < matrix.length; i++) {
                matrix[i].splice(index, 1);
            }

            return matrix;
        }

        function sort(matrix, index) {
            let header = matrix.shift();
            matrix.sort((a, b) => a[index].localeCompare(b[index]));
            matrix.unshift(header);
            return matrix;
        }

        function filter(matrix, index, value) {
            const header = matrix.shift();
            const filterMatrix = matrix.filter(a => a[index] === value);
            filterMatrix.unshift(header);
            return filterMatrix;
        }

        return {
            hide,
            sort,
            filter
        };
    })();

    matrix = commands[command](matrix, index, value);
    printMatrix(matrix);

    function printMatrix(matrix) {
        for (let row = 0; row < matrix.length; row++) {
            console.log(matrix[row].join(' | '));
        }
    }
}

solve(
    [['firstName', 'age', 'grade', 'course'],
['Peter', '25', '5.00', 'JS-Core'],
['George', '34', '6.00', 'Tech'],
['Marry', '28', '5.49', 'Ruby']],
'filter firstName Marry');