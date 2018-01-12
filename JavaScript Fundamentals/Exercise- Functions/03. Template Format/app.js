function templateFormat(arr) {
    let text = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
    text += "<quiz>\n";
    for (var i = 0; i < arr.length; i += 2) {
        let quest = arr[i];
        let answer = arr[i + 1];
        text += addText(quest, answer);
    }
    text += "</quiz>";
    console.log(text);

    function addText(quest, answer) {        
        let text = upperAddQuest(quest);
        text += downAnswer(answer);
        return text;
    }

    function upperAddQuest(quest) {
        return `  <question>\n    ${quest}\n  </question>\n`;
    }

    function downAnswer(answer) {
        return `  <answer>\n    ${answer}\n  </answer>\n`;
    }
}
templateFormat(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]
);