// 라우팅 연습하기  (결과 비교 파일 : 04\results\server-5.js)

const http = require("http");

const server = http.createServer((req, res) => { // req: 요청과 관련된 정보, res: 응답과 관련된 정보
    // req.url: 요청 경로
    // req.method: 요청 방식

    const {url, method} = req;

    res.setHeader("Content-type", "text/plain");

    if (method === "GET" && url === "/home"){
        res.write("HOME");
        res.end();
    } else if (method === "GET" && url === "/about"){
        res.end("ABOUT"); // 화면에 ABOUT 표시 후 응답 종료
    } else{
        res.end("Not Found");
    }
});

server.listen(3000, () => {
    console.log("서버가 실행 중");
});