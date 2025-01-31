function Tags() {
    const tags = ["firstTag", "secondTag", "thirdTag"];
    this.addTag = (newTag) => {
        if (tags.includes(newTag)) {
            console.error(`Тэг уже существует`);
        } else {
            tags.push(newTag);
            console.log(`Тэг добавлен:`, newTag);
        }
    }
    this.getAllowedTags = () => [...tags];
    if (tags.length === 0) {
        console.log("Должен быть хотя бы 1 тэг");
    }
}

function Article(name, shortText, longText, author, date, tags) {
    this.name = name;
    this.shortText = shortText;
    this.longText = longText;
    this.author = author;
    this.date = date;
    this.tags = tags;
}

function Web() {
    let articles = [];

}

const tags = new Tags();
console.log(tags.getAllowedTags());
tags.addTag("rer");





// const myNewWeb = new Web();
// let firstArticle = new Article('My favorite website', 'someshorttext', 'somelongtext', 'Arthur', 23.02);
// console.log(firstArticle);
