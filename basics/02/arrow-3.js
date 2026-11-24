// 매개변수가 있는 함수 표현식을 화살표 함수로 표현하기  (결과 비교 : 02\results\arrow-3.js)

// 함수 정의할 때 쓰는 변수: 매개변수, 함수 호출할 때 쓰는 변수: 인수, 퉁쳐서 부를 때: 인자

// 함수 표현식
// let sum = function (a, b) {
//   return a + b;
// }
// console.log(sum(100, 200));

// 화살표 함수
let sum = (a, b) => a + b;

console.log(sum(100, 200));