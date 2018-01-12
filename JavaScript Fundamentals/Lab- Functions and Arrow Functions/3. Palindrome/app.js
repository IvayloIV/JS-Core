function palindrom(word) {
    let p = function(word) {
        for (var i = 0; i < word.length / 2; i++) {
            if (word[i] != word[word.length - i - 1]) {
                return false;
            }
        }
        return true;
    };
    console.log(p(word));
}
palindrom('abuba');