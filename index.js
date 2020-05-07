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


/* const title = document.querySelector("#title");

const BASE_COLOR = "#34495e";
const OTHER_COLOR = "#ce2bdd";

function handleClick(){
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } 
    console.log(title.style.color);
    }

function init(){

    title.style.color = BASE_COLOR;
    title.addEventListener("click",handleClick);
}

init();
 */

// &&은 그리고를 의미
// || 또는 을 의미


/* const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleCilck() {
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(hasClass){
        title.classList.remove(CLICKED_CLASS);
    }   else {
        title.classList.add(CLICKED_CLASS);
    }
}

function init() {
    title.addEventListener("click", handleCilck);
}
init(); */

const title = document.querySelector("#title");
//title이라는 class를 받찾아 title이라는 객체로 변환

const CLICKED_CLASS = "clicked";

function handleCilck() {
    title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener("click", handleCilck);
} //click 하면 handleclick 이라는 함수 실행할 수 있는 함수
init(); //함수 실행

//위의 방법과 같이 toggle을 사용하면 됨
//toggle의 class가 있는지 확인하여 있으면 remove 없으면 add