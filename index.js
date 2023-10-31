const http = require("http");
const express = require("express")
const app = express();

app.use("/css", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/img", express.static(__dirname + "/img"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/pages/about.html")
})

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/pages/contact.html")
})

app.get("/posts", (req, res) => {
    res.sendFile(__dirname + "/pages/posts.html")
})

app.get("/testimonials", (req, res) => {
    res.sendFile(__dirname + "/pages/testimonials.html")
})

app.get("/works", (req, res) => {
    res.sendFile(__dirname + "/pages/works.html")
})

app.get("*", (req, res) => {
    res.sendFile(__dirname + "/pages/404.html")
})

const PORT = 3001;
const HOST = "localhost";

app.listen(PORT, HOST, () => {
    console.log(`Сервер запущен: http://${HOST}:${PORT}`)
})