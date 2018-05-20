function solve(arr) {
    arr = arr.filter(a => a !== '');
    let text = arr.join('');
    let pattern = new RegExp('<a\\s+([^>]+\\s+)?href\\s*=\\s*(?:\'([^\\\']+)\'|"([^\\"]+)"|([^\\s>]+))[^>]*>', 'g');
    let finding = pattern.exec(text);
    let result = [];
    while (finding !== null){
        let total = '';
        if (finding[2] !== undefined){
            total = finding[2];
        } else if (finding[3] !== undefined){
            total = finding[3];
        } else {
            total = finding[4];
        }
        result.push(total);
        finding = pattern.exec(text);
    }
    console.log(result.join('\n'));
}
solve([`<!DOCTYPE html>`,
`<html>`,
`<head>`,
`  <title>Hyperlinks</title>`,
`  <link href="theme.css" rel="stylesheet" />`,
`</head>`,
`<body>`,
`<ul><li><a   href="/"  id="home">Home</a></li><li><a`,
` class="selected" href=/courses>Courses</a>`,
`</li><li><a href = `,
`'/forum' >Forum</a></li><li><a class="href"`,
`onclick="go()" href= "#">Forum</a></li>`,
`<li><a id="js" href =`,
`"javascript:alert('hi yo')" class="new">click</a></li>`,
`<li><a id='nakov' href =`,
`http://www.nakov.com class='new'>nak</a></li></ul>`,
`<a href="#empty"></a>`,
`<a id="href">href='fake'<img src='http://abv.bg/i.gif' `,
`alt='abv'/></a><a href="#">&lt;a href='hello'&gt;</a>`,
`<!-- This code is commented:`,
`  <a href="#commented">commentex hyperlink</a> -->`,
`</body>`]);