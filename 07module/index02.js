class Person {
    constructor(name, age) {
        this.name = name; //맴버변수
        this.age = age;
    }

    getInfo = () => {
        return `이름 ${this.name}, 나이 ${this.age}`;
    }

}


//default 구문은 반드시 1개여야한다
export default Person; 
