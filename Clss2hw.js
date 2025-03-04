function User(name, lastname, email, role) {
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.role = role;
}

function Document(name, text, author, email) {
    this.name = name;
    this.text = text;
    this.author = author;
    this.approveStatus = "not approved";
    this.approve = () => {
        if (this.author.role === "admin") {
            this.approveStatus = "approved";
            this.email = this.author.email;
            console.log("approved");
        } else {
            this.approveStatus = "not approved";
            console.error("not admin");

        }
    };
}

function Folder(name) {
    this.name = name;
    this.docList = [];
    this.addDoc = (name) => {
        this.docList.push(name);
    }
    this.getDocList = () => {
        console.log(this.docList);
    }
}

const newUser1 = new User("Alex", "Foal", "alfl@gmail.com", "admin");
const newDocument1 = new Document("doc1", "fsaf", newUser1);
const newDocument2 = new Document("doc2", "fsaf", newUser1);
const newDocument3 = new Document("doc3", "fsaf", newUser1);
newDocument1.approve()
console.log(newDocument1);
const newFolder1 = new Folder("folder1",);
newFolder1.addDoc(newDocument1.name);
newFolder1.addDoc(newDocument2.name);
newFolder1.addDoc(newDocument3.name);
newFolder1.getDocList()



