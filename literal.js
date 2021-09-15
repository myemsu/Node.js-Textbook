'use strict'

var sayNode = function () {
    console.log('Node');
};
var es = 'ES';


var oldObiect = {
    sayJS: function () {
        console.log('JS');
    },
    sayNode: sayNode,
};
oldObiect[es + 6] = 'Fantastic';
oldObiect.sayNode(); // Node
oldObiect.sayJS(); // Js
console.log(oldObiect.ES6); // Fantastic

// 위 코드를 아래 코드로 변경 가능


const newObject = {
  sayJS () {
    console.log('JS');
  },
  sayNode,   // = sayNode: sayNode,
  [es + 6]: 'Fantastic',
};
newObject.sayNode(); // Node
newObject.sayJS(); // JS
console.log(newObject.ES6); // Fantastic