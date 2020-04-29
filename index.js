/* const monday = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";

console.log(monday, tue, wed, thu, fri); */


/* const daysOfWeek = ["Mon", "Thu", "Wed", "Thu", "Fri"];

console.log(daysOfWeek[2]); */


/* const SimonInfo = {
    name:"Uisik_Kwon",
    age:33,
    gender:"Male",
    isHandsome:true,
    favMovies: ["Tomorrow", "Avengers"],
    favFood: [{name: "Pizza", fatty: false}, {name:"pancake", fatty:false}]
}


console.log(SimonInfo.favFood); */

/* console.log('Whats up')
console.log('everything goes accroding to')
console.log('Hello')
console.log('Hello') */


/* function sayhello(name, age){
    console.log('hello!', name, "you have",age, "years age");
}

sayhello("", "");
sayhello("Simon", " 33");
console.log("Hi!") */
/* age와 같은 parameter or argument : 함수 안에서 사용할 이름 
   써준 갯수 만큼 argument 넣을 수 있음*/


/* function sayhello(name, age){
    return `Hello ${name} you are ${age} years old`;
}

const greetSimon = sayhello("Simon", 33)

console.log(greetSimon) */


/* const calculator = {
    plus: function(a,b){
        return a + b;
    },
    minus: function(a,b){
        return a - b;
    }
}

const plus = calculator.plus(5,5)
const minus = calculator.minus(5,5)
console.log(plus)
console.log(minus) */

/* const title1 = document.querySelector("#title");
title1.innerHTML="Hi! From Simon";
title1.style.color = "black";
document.title = "I own you";
console.log(title1); */
//자바스크립트에서 html의 id, class를 받아와 객체로 변환 가능
//자바스크립트에서 html 수정 가능


/* const title1 = document.querySelector("#title");

function handleResize(){
    console.log("I have been resiezed")
}

window.addEventListener("resize",handleResize); */

//window.addEventListener("resize",handleResize);
//window.addEventListener("resize",handleResize());
//두개의 차이점은 사건발생 후 동작하느냐, 자동적으로 즉각 동작하느냐 차이


const title1 = document.querySelector("#title");

function handleclick(){
    title1.style.color = "blue";
}

window.addEventListener("click",handleclick);
