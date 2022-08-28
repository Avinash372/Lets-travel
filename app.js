let express = require("express");
let app = express();
let mongoose = require("mongoose");
let Post = require("./models/post.model").Post;

mongoose.connect("mongodb://localhost/travels");

let post1 = new Post({
    id: "2",
    title: "Statue of Liberty",
    date: new Date(),
    description: "some description",
    text: "some text",
    country: "USA",
    ImageURL: "/images/img-2",
});

post1.save().then(() => console.log("saved..."));

app.use(express.static("public"));

app.listen(3000, () => {
    console.log("listening 3000...");
});
