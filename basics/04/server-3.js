// 응답 객체 확인하기 - 응답 헤더, 응답 본문, 응답 종료  (결과 비교 파일 : 04\results\server-3.js)

const http = require("http");

const server = http.createServer((req, res) => {
   res.setHeader("Content-type", "text/plain");
   res.write("Hello Node");
   res.end(); // 응답이 끝난 걸 지정 
});

server.listen(3000, () => {
    console.log("서버가 실행 중");
});