function solve(arr) {
    let result = `<?xml version="1.0" encoding="UTF-8"?>
<quiz>\n`;
    for (let i = 0; i < arr.length; i+=2) {
        let question = arr[i];
        let answer = arr[i + 1];
        result += `  <question>
    ${question}
  </question>
  <answer>
    ${answer}
  </answer>\n`;
    }
    result += `</quiz>`;
    console.log(result);
}
solve(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]
);