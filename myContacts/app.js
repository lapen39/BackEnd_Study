// POST: 서버로 정보를 보낼 때 사용
// PUT: 기존에 서버에 있던 자료를 수정할 때 사용
// DELETE: 서버에 있는 자료를 삭제할 때 사용

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, Node!");
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/contacts", require("./routes/contactRoutes"));

app.listen(3000, () => {
    console.log("서버 실행 중");
});