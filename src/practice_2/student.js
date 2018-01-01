"use strict";
const Person=require('./person')
class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.class = klass;
    }
    introduce(){
        return "I am a Student. I am at Class "+this.class+".";
    }
}
module.exports = Student;
