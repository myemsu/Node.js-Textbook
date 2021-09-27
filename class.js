'use strict'

// 클래스 : 프로토타입 기반으로 작동, 프로토타입 기반 문법을 보기 좋게 클래스로 바꾼 것

// 프로토타입 상속 예제
var Human = function(type) {
    this.type = type || 'human';
};

Human.isHuman = function(human) {
    return human instanceof Human;
}

Human.prototype.breathe = function() {
    alert('h-a-a-a-m');
};

var Zero = function(type, firstName, lastName) {
    Human.apply(this, arguments);
    this.firstName = firstName;
    this.lastName = lastName;
};

Zero.prototype = Object.create(Human.prototype);
Zero.prototype.constructor = Zero; // 상속하는 부분
Zero.prototype.sayName = function() {
    alert(this.firstName + '' + this.lastName);
};
var oleZero = new Zero('human', 'Zero', 'Cho');
Human.isHuman(oleZero); // true



// 클래스 기반
class Human {
    constructor(type = 'human') {
       this.type = type; 
    }


    static isHuman(human) {
        return  human instanceof Human;
    }

    
    breathe() {
        alert('h-a-a-a-m');
    }
}


class Zero extends Human {
    constructor(type, firstName, lastName) {
        super(type);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName() {
        super.breathe();
        alert(`${this.firstName} ${this.lastName}`);
    }
}

const newZero = new Zero ('human', 'Zero', 'Cho');
Human.isHuman(newZero); // true