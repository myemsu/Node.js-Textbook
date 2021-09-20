'use strict'

// const, let

if (true) {
    var x = 3;
}
console.log(x); // 3

if (true) {
    const y = 3;
}
console.log(y); // 오류 : 블록 스코프를 가지기 때문에 블록 밖에서 접근 X

const a = 0;
a = 1; // 오류 : 다른 값을 할당하려 함

let b = 0;
b = 1; // 1 : b = 0 값을 b = 1로 바꿈

const c; // 오류 : 값을 할당하지 않음

