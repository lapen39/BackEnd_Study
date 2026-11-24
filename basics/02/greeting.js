// 모듈화 하기(user.js, hello.js -> app-1.js)

const user = "홍길동";

const hello = (name) => {
  console.log(`${name} 님, 안녕하세요?`);
};

hello(user);
