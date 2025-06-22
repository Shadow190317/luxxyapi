const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const senderData = {
  encryptedSender: "a59fbc1c9da45a91e5b8ee12d18c0a91",
  folder: "device6281546596852"
};

app.get("/api/sender", (req, res) => {
  const token = req.query.token;
  if (token !== "ZER0X") {
    return res.status(403).json({ error: "Unauthorized token" });
  }
  res.json(senderData);
});

app.listen(PORT, () => {
  console.log(`✅ Sender API aktif di port ${PORT}`);
});
