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

function Category() {
    const category = [
        {id: 1, name: "Cat1", description: "11111"},
        {id: 2, name: "Cat2", description: "22222"},
        {id: 3, name: "Cat3", description: "33333"}
    ]
    this.addCategory = ({id, name, description}) => {
        category.push({id, name, description});
    }
    this.getAllowedCat = () => [...category];

    this.deleteCategory = (id) => {
        if (category.find(category => category.id === id)) {
            category.splice(id - 1, 1)
            console.log(category);
        } else (console.error("несуществующий id"))
    }
    this.selectCat = (selCatId) => {
        if (category.find(category => category.id === selCatId)) {
            this.SelectedCat = category.find(category => category.id === selCatId);
            console.log("Выбрана категория:", this.SelectedCat);
        } else {
            console.error(`Категории не существует`);
        }
    }
    this.getSelectedCat = () => {return this.SelectedCat}
}

function Article(name, shortText, longText, author, date) {
    this.name = name;
    this.shortText = shortText;
    this.longText = longText;
    this.author = author;
    this.date = date;
    this.tags = tags.getSelectedTag();
    this.category = category.getSelectedCat();

}

function Web() {
    let articles = [];

}

const category = new Category();
category.addCategory({id: 4, name: "Cat4", description: "44444"},);
console.log(category.getAllowedCat());
category.deleteCategory(2)
category.selectCat(3)
console.log(category.getAllowedCat());
console.log(category.getSelectedCat());
category.selectCat(4)
console.log(category.getSelectedCat());

 const tags = new Tags();
 tags.addTag("firstTag");
 tags.selectTag('firstTag');
 tags.addTag("rer2");
 tags.selectTag('rer2');
console.log("Выбранные тэги:" + tags.getSelectedTag());

const myNewWeb = new Web();
let firstArticle = new Article('My favorite website', 'someshorttext', 'somelongtext', 'Arthur', '23.02');
console.log(firstArticle);

