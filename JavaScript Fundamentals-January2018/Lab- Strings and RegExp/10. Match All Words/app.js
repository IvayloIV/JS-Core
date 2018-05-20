function matchAllWords(text) {
    console.log(text.match(/\w+/g).join('|'));
}
matchAllWords('_(Underscores) are also word characters');