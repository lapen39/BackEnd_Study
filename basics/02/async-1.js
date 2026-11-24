// 중간에 시간 걸리는 작업이 있을 경우  (결과 비교: 02\results\async-1.js)

function displayA(){
    console.log('A');
}
function displayB(){
    setTimeout(() => {
        console.log('B');
    }, 2000);
}
// 시간이 걸리는 작업이 중간에 껴있을 경우, 빨리 처리할 수 있는 작업을 먼저 실행
function displayC(){
    console.log('C');
}

displayA();
displayB();
displayC();