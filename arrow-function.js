'use strict'

// add1, 2, 3, 4는 모두 같은 함수 / not 1, 2도 같은 함수
// 화살표가 function을 대신함
function add1(x, y) {
    return x + y;
}

const add2 = (x, y) => {
    return x + y;
};

const add3 = (x, y) => x + y;

const add4 = (x, y) => (x + y);

function not1(x) {
    return !x;
}

const not2 = x => !x;


var relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends: function () {
        var that = this;
        this.friends.forEach(function (friend) {
            console.log(that.name, friend);
        });
    },
};
relationship1.logFriends();



const relationship2 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends() {
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        });
    },
};
relationship2.logFriends();