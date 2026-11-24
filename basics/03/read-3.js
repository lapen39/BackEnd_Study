// fs 모듈의 readFile 함수 연습하기 (결과 비교 파일은 03\results\read-3.js)

const fs = require("fs");

// 인코딩 지정 안 했을 때
// fs.readFile("./example.txt", (err, data) => {
//     if (err){
//         console.log(err);
//     }
//     console.log(data);
// });

// 인코딩 지정했을 때
// fs.readFile("./example.txt", "utf8", (err, data) => {
//     if (err){
//         console.log(err);
//     }
//     console.log(data);
// });

// fs 모듈의 writeFile 함수 연습하기
fs.readFile("./example.txt", "utf8", (err, data) => {
    if (err){
        console.log(err);
    }
    // console.log(data);
    fs.writeFile("./test.txt", data, (err) => {
        if (err){
            console.log(err);
        }
        console.log("test.txt is saved.");
    })
});