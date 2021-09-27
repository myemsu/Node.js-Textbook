'use strict'

// 구조분해 할당 : 객체와 배열로부터 속성이나 요소를 쉽게 꺼낼 수 있음

/* var candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy: function () {
        this.status.count--;
        return this.status.count;
    },
};
var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count; */

// 위 코드를 아래로 변형 가능

const candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy() {
        this.status.count--;
        return this.status.count;
    },
};
const { getCandy, status: { count } } = candyMachine;
console.log(count);

// 배열에 대한 구조분해 할당

/* var array = ['node.js', {}, 10, true];
var node = array[0];
var obj = array[1];
var bool = array[3]; */

// 위 코드를 아래로 변형 가능

const array = ['node.js', {}, 10, true];
const [node, obj,  , bool] = array;
console.log(node);