'use strict'

// 논 블로킹 I/O

/*
//블로킹 방식
function longRunningTask() {
    //오래 걸리는 작업
    console.log('작업 끝');
}

console.log('시작');
longRunningTask();
console.log('다음 작업');
*/

//논 블로킹 방식
function longRunningTask() {
    //오래 걸리는 작업
    console.log('작업 끝');
}
console.log('시작');
setTimeout(longRunningTask, 0);
console.log('다음 작업');