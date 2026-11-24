const express = require("express");
const router = express.Router();

// 연락처 가져오기, 새 연락처 추가하기
router.route("/").get((req, res) => {
    res.send("Contacts Page");
}).post((req, res) => {
    console.log(req.body);
    const {name, email, phone} = req.body;
    if (!name || !email || !phone){
        return res.send("필수 값이 입력되지 않았습니다.");
    }
    
    res.send("Create Contacts");
});
// app.get("/contacts", (req, res) => {
//     res.send("Contacts Page");
// });
// app.post("/contacts", (req, res) => {
//     res.send("Create Contacts");
// });

// 연락처 1개 가져오기, 연락처 수정하기, 연락처 삭제하기
router.route("/:id").get((req, res) => {
    res.send(`View Contact for ID : ${req.params.id}`);
}).put((req, res) => {
    res.send(`Update Contact for ID : ${req.params.id}`);
}).delete((req, res) => {
    res.send(`Delete Contact for ID : ${req.params.id}`);
});
// app.get("/contacts/:id", (req, res) => {
//     res.send(`View Contact for ID : ${req.params.id}`);
// });
// app.put("/contacts/:id", (req, res) => {
//     res.send(`Update Contact for ID : ${req.params.id}`);
// });
// app.delete("/contacts/:id", (req, res) => {
//     res.send(`Delete Contact for ID : ${req.params.id}`);
// });

module.exports = router;