const { log } = require('console');
const express = require('express');
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))

app.get("/", (req, res) => {
    res.render("home.ejs")
})

app.get("/ig/:username", (req, res) => {
    // const followers = ["vidushi", "krish", "abhinav", "varun", "akshat"]
    // let { username } = req.params;
    // console.log(username);
    const instaData = require("./data.json")
    let { username } = req.params;
    const data = instaData[username];
    if (data) {
        res.render("instagram.ejs", { data })
    } else {
        res.render("error.ejs")
    }
    // console.log(instaData);

})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);

})