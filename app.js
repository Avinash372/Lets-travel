let express = require("express");
let app = express();
let mongoose = require("mongoose");
let Post = require("./models/post.model").Post;

mongoose.connect("mongodb://localhost/travels");

app.use(express.json());
let id = 1;

app.get("/posts", async (req, res) => {
    let posts = await Post.find();
    res.send(posts);
});

app.post("/posts", async (req, res) => {
    let reqBody = req.body;
    let newPost = new Post({
        id: "" + id++,
        title: reqBody.title,
        date: new Date(),
        description: reqBody.description,
        text: reqBody.text,
        country: reqBody.country,
        ImageURL: reqBody.imageURL,
    });
    await newPost.save();
    res.send("Created!");
});

app.use(express.static("public"));

app.listen(3000, () => {
    console.log("listening 3000...");
});
