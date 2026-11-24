// 아래 함수 표현식을 화살표 함수로 바꾸기  (결과 비교 : 02\results\arrow-1.js)

// 함수 표현식
// let hi = function() {
//   return '안녕하세요?';
// };

// 화살표 함수
let hi = () => {return "안녕하세요?"}; // 앞(): 받을 인자, {}: 실행할 내용
// 함수 내용이 한 줄만 있을 경우
// let hi = () => "안녕하세요?";

console.log(hi());