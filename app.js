let express = require("express");
let app = express();
let mongoose = require("mongoose");
let Post = require("./models/post.model").Post;

mongoose.connect("mongodb://localhost/travels");

app.get("/posts", async (req, res) => {
    let posts = await Post.find();
    res.send(posts);
});

app.use(express.static("public"));

app.listen(3000, () => {
    console.log("listening 3000...");
});
