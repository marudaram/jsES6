/*
 모듈 export, import

 -모듈은 JS ES6의 미리 작성해 놓은 스크립트 파일
 -변수, 함수, 클래스 등이 정의되어 있음

 -모듈을 내보내는 방식
 -> 여러값을 내보낼 때는 named export 방식
 -> 단일값을 내보낼 때는 default export 방식

*/

export const name = "이순신";
export const age = 20;

export const info = () => {
    console.log("이름: " + name + ", 나이: " + age);
}

let addr = "서울시";
let myInfo = () => {
    console.log("addr");
}
export {addr, myInfo};

