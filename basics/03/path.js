// path 모듈 연습하기 ( 결과 비교 파일 : 03\results\path.js)

// join(): 여러 개의 조각으로 된 텍스트를 하나의 경로로 만드는 함수
const path = require("path");

const fullPath = path.join("some", "work", "ex.txt");
// console.log(fullPath);

// 경로만 추출 - dirname
const dir = path.dirname(fullPath);
console.log(dir);

// 파일 이름만 추출 - basename(1. 파일 이름만 가져오기 | 2. 확장자 제외 가져오기)
const fn1 = path.basename(__filename);
console.log(`전체 경로(__filename): ${__filename}`);
// console.log(fn1);
const fn2 = path.basename(__filename, ".js");
console.log(fn2);