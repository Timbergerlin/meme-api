const express = require("express");
const app = express();

const memes = [
  { id: 1, title: "當我寫完 API 卻沒部署", image: "https://i.imgur.com/uD7eEo8.jpeg" },
  { id: 2, title: "Debug 一整天的我", image: "https://i.imgur.com/UqXspbE.jpeg" }
];

app.get("/", (req, res) => {
  res.send("🎉 Meme API 運行中！請訪問 /memes 取得迷因列表。");
});

app.get("/memes", (req, res) => {
  res.json(memes);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("API 監聽中，埠號 " + port));
