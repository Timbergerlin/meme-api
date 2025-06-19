const express = require("express");
const app = express();

app.use(express.json()); // ⭐️ 讓 Express 能接收 JSON body

const memes = [
  { id: 1, title: "當我寫完 API 卻沒部署", image: "https://i.imgur.com/uD7eEo8.jpeg" },
  { id: 2, title: "Debug 一整天的我", image: "https://i.imgur.com/UqXspbE.jpeg" }
];

// GET: 首頁
app.get("/", (req, res) => {
  res.send("🎉 Meme API 運行中！請訪問 /memes 取得迷因列表。");
});

// GET: 所有 memes
app.get("/memes", (req, res) => {
  res.json(memes);
});

// ⭐️ POST: 新增一則 meme
app.post("/memes", (req, res) => {
  const { title, image } = req.body;
  if (!title || !image) {
    return res.status(400).json({ error: "請提供 title 和 image 連結" });
  }

  const newMeme = {
    id: memes.length + 1,
    title,
    image
  };

  memes.push(newMeme);
  res.status(201).json(newMeme);
});

// 啟動 server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("✅ Meme API 啟動於 port", port);
});
