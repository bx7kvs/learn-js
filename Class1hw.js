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
    const selTags = []
    this.selectTag = (selTag) => {
        if (tags.includes(selTag)) {
            selTags.push(selTag);
            console.log("Выбран тэг:", selTag);


        } else {
            console.error(`Тэга не существует`);
        }

    }
    this.tryFunk = () => {
        return selTags;
    }


    this.getSelectedTag = () => {
        if (selTags.length === 0) {
            return "Должен быть хотя бы 1 тэг";
        } else {
            return selTags;
        }
    }
    this.getAllowedTags = () => [...tags];
    if (tags.length === 0) {
        console.log("Должен быть хотя бы 1 тэг");
    }


}

function Article(name, shortText, longText, author, date) {
    this.name = name;
    this.shortText = shortText;
    this.longText = longText;
    this.author = author;
    this.date = date;
    this.tags = tags.getSelectedTag();

}

function Web() {
    let articles = [];

}

const tags = new Tags();
tags.addTag("firstTag");
tags.selectTag('firstTag');
tags.addTag("rer2");
tags.selectTag('rer2');
console.log("Выбранные тэги:" + tags.getSelectedTag());


const myNewWeb = new Web();
let firstArticle = new Article('My favorite website', 'someshorttext', 'somelongtext', 'Arthur', '23.02');
console.log(firstArticle);

