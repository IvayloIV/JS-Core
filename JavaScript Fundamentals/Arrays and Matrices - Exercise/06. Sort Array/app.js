function sortArray(arr) {
    console.log(arr.sort(comparing).join('\n'))

    function comparing(a, b) {
        if (a.length > b.length) {
            return 1;
        } else if (a.length < b.length) {
            return - 1;
        } else {
            if (a < b) {
                return - 1;
            } else if (a > b) {
                return 1;
            }
            else {
                return 0;
            }
        }
    }
}
sortArray(['alpha', 'beta', 'gamma']);