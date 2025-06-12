/* 
const profile = {
    pName: "Shradha Khapra",
    posts: 195,
    followers: "894k",
    following: 4,
};
console.log(profile)
console.log(typeof profile);

// class 2 starts here
// learning operators 

let a = 9;
let b=4;
console.log("a+b =", a + b);
console.log("a-b =", a - b);
console.log("a*b =", a * b);
console.log("a/b =", a / b);
console.log("The modulus of","a&b =", a % b);
// for power we use **
console.log("a to the power of b will be", a**b);

// assignment operators 
{
    let a = 10;
    console.log(a);
    console.log(a += 4);
    console.log(a -= 4);
    console.log(a %= 4);
    console.log(a /= 4);
    console.log(a *= 4);
}
// logical operators
{
    let a = 5;
    let b = 6;
    let cond1 = a != 6;
    let cond2 = b>a ;
    console.log(cond1 && cond2); // both have to be true
    console.log(a<6 || b<a); //true; one true one false
    console.log(a>6 || b<a); //false; both false
}
{
    let age = 16;
    if(age >= 18){
        console.log("you can go")
    }
    else if(age = 27){
        console.log("you need a license")
    }
    else {
        console.log("you can not go")
    }
}
// function in object
const tumi = {
    fName: "Piyash",
    age: "21",
    class: "University",
    inst: "KU",
};
if(tumi.age > 25 ) {
    console.log("your are eligible")
}
else{
    console.log("you are not eligible")
};

// ternary operator. uses ? and : . example a ? b:c 
// ternary not used often
*/

// ====================prompt use: practice no.1======================
/*
let word = prompt("Enter a Number");

if(word%5 === 0){
    console.log("The number is multiple of 5")
} else{
    console.log("This is not a multiple of 5")
};
*/

// ============================solving practice 2============================
/*
let score = prompt("enter your marks:");
if(80>= score <=100){
    console.log(score, "You got grade A")
} 
else if( 70>= score <= 79){
    console.log(score, "You got grade B")
}
else if( 60>= score <= 69){
    console.log(score, "You got grade C")
}
else if( 50>= score <= 59){
    console.log(score, "You got grade D")
}
else {
    console.log("Ops! You are failed")
};
*/

// this is wrong. cause we can't put comparison in js like math. We need to use && operator
/*
let score;
score = prompt("Enter your score");
if(score >= 80 && score<= 100){
    console.log("Congratulations! You got A")
}
else if(score >=70 && score <= 79){
    console.log("You got B")
}
else if(score >=60 && score <= 69){
    console.log("You got C")
}
else if(score >=50 && score <= 59){
    console.log("You got D")
}
else{
    console.log("Sorry. You are failed")
};

// it's working now. The right process.

*/

// ======================================= Lecture 3 ====================================
/*
for(let i=1; i <=20; i+=2){
    console.log("Print")
}
    */
//  ================================================while loop=================================
// while loop er jonno shurute condition define korte hobe erpore {} er vitor work likhte hobe
/*
let i = 1;
while( i<=10 ){
    i++ ;
    console.log("i =", i);
} // i er value browser 11 show korbe karon i 10 er por 11 run kore erpore statement check kore dkhe thamte hobe.
*/
// =================================== do while loop =============================
/*
let i=20;
do{
    i++;
    console.log("i=", i);
}
while(i<= 10);
// ekhane show korche karon shurute ekta output paiche erpore condition check korche
while( i<= 10){
    i++;
    console.log("i=", i); // ekhane kichu show kore nai karon agei condition dekhe niche
}

*/

// ============================practice 1================================
// for(let i=1; i<=100; i++){
//     console.log("i =", i)
// }
/*
let i=0;
while(i<=100){
    i++;
    if(i%2 === 0){
        console.log("even i=", i);
    }
}
    */
//    ==================================do while practice===================
/*
let i=0;
do{
    i++
    if(i%2 ===0){
        console.log("even i", i);
    }
}
while(i<=100);
*/
/*
// ===============================practice 2=================================
let gameNum = 10;
let userNum = prompt("Enter the number to enter your site");
do{
    userNum = prompt("Sorry, you entered the wrong num. Enter again");
}
while(userNum != gameNum); 
// done

*/
// ===================================class 4(arrays)==================================
/*
let y =["Mahim", "Mahin", "Sakib", "Sabbir", "Lamim", "Juwel"];
console.log(y[2]);
*/
// ============================loop of array==========================
/*
let frnds =["Mahim", "Mahin", "Sakib", "Sabbir", "Lamim", "Juwel"];
for(let i=0; i<frnds.length; i++){
    console.log(frnds[i]);
}
// ========================== array er jonno vuleo <= deya jabe na. shudhu < dite hobe. naile pukki mara
*/
/*
let mark = [85, 97, 44, 37, 76, 60];
let sum =0;
for (let i=0; i<mark.length; i++){
    sum += mark[i];
}
let avg = sum / mark.length;
console.log(`the average mark of the class is ${avg}`);
*/
// ===================================practice 2 class 4=========================
/*
let price = [250, 645, 300, 900, 50];
let offer= 0;
let op= 0;
for (let i=0; i < price.length ; i++){
    offer = price[i] - price[i]/10;
    console.log(`price after offer if ${offer}`);
}
let idx=-1;
do{
    idx++;
    op = price[idx]- price[idx]*0.1;
    console.log(`price after offer op ${op}`);
}
while(idx < price.length -1);
*/
/*
let comp = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(comp);
let delcomp = comp.shift();
console.log(delcomp);
let addcomp = comp.splice(2, 1, "Ola");
console.log(addcomp);
let amacomp = comp.push("Amazon");
console.log(amacomp);
*/

// ====================================class 5 everything about function=====================
/*
function myFunc(){
    console.log(`hello there babe`);
    console.log(`welcome to my first function`);
}
myFunc(); 
function sum(a,b){
    console.log(a + b);
    return 0;
}
sum(5,6);

*/

// ==============================================arrow function==================
/*
function countVowels(str){
    let count=0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    console.log(count);
}

// ====================using arrow function================================
const countVow = (str)=> {
    let count=0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    console.log(count);
}

*/

// ======================for each function==================================
/*
let nums = [50, 60, 89, 41, 63];

nums.forEach((num) => {
    console.log(num * num);
})

let newArray = nums.map((maparr) => {
    console.log(maparr * maparr);
    return maparr;
})
    */

//------------------------------------ filter method--------------------------
/*
let even = [10, 16, 18, 90, 60, 35, 29];

let neweven = even.filter((num)=>{
    if(num % 2 ===0){
        console.log(num);
    } else if(num % 2 != 0){
        console.log(`${num}is odd numbers`);
    }
})

*/
// ----------------------------practice ------------------------------
/*
let marks = [87, 93, 64, 99, 86, 91, 90];

let showM = marks.filter((show)=> {
    if(show > 90){
        console.log(`${show} is a 90 up number`);
    } else if(show <= 90){
        console.log(`${show} not 90 up number`);
    }
    return 0;
})
    */
// ------------------------practice 2 ----------------------------------
/*
let usernum = prompt(`Enter a number`);
let arrayNum =[];
for(let i=1; i<= usernum; i++){
    arrayNum[i-1] = i;
}
console.log(arrayNum);
let sum = arrayNum.reduce((initial, final) => {
    return initial + final;
})
console.log(sum);
let factorial = arrayNum.reduce((initial, final)=>{
    return initial * final;
})
console.log(factorial);
*/

// evnet practice==========================
/*
let popup = document.querySelector(".popup");
let pop =  document.querySelector(".pop");
let  show = "none";
popup.addEventListener("mouseover", () =>{
    if(show === "none"){
        show = "showed";
        pop.classList.add("show");
    } else {
        show = "none";
        pop.classList.remove("show");
    }
    console.log(show);
});
*/
/*
// =====================tic tac toe game=======================
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#new-game");
let turnO = true;
let win = document.querySelector(".win");
const winNumber = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
];
const enableBoxes = () => {
        for (let box of boxes){
            box.disabled = false;
            box.innerText = "";
            win.classList.add("hide");
        }
    }
const resetGame = () => {
    turnO= true;
    enableBoxes();
}
newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("box clicked");
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
    const disableBoxes = () => {
        for (let box of boxes){
            box.disabled = true;
        }
    }
    const showWinner= (winner) => {
        win.innerText = `Congratulations! winner is ${winner}`;
        win.classList.remove("hide");
        disableBoxes();
    }
    const checkWinner = () => {
    for(let pattern of winNumber){
            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;
            if(pos1val != "" && pos2val != "" && pos3val != ""){
                if(pos1val === pos2val && pos2val === pos3val){
                    console.log(`"winner" ${pos1val}`);
                    showWinner(pos1val);
                }
            }
        }
    }
});
*/

// ===================================classes and objects============================================
/*
let car = {
    fullName : "volvo",
    engine: "1600cc",
    model: "h2hdbi",
    power : function() {
        console.log("power of the car is = ", engine);
    }
};
*/
/*
let salary = prompt("Enter your salary amount");
let tax = 0.1;
let afterTax = salary - (salary*tax);
let expenses = prompt("Enter your monthly expenses:");
let afterExpense = afterTax - expenses;
let savings = afterExpense * 0.2;
console.log(afterTax);
console.log(afterExpense);
console.log(savings);

if(savings >= 1000){
    console.log(`Excellent`);
}
else if (savings >= 500 && savings < 1000){
    console.log(`Good`);
}
else if(savings >= 100 && savings <500){
    console.log(`Needs improvement`);
}
else {
    console.log(`Critical`);
}
    */

// let digit = prompt("Enter a digit:");
/*
if(digit == "0"){
    console.log("zero");
}
else if(digit == "1"){
    console.log("one");
}
else if(digit == '2'){
    console.log("two");
}
else if(digit == "3"){
    console.log("three");
}
else if(digit == "4"){
    console.log("four");
}
else if(digit == "5"){
    console.log("five");
}
else if(digit == '6'){
    console.log("six");
}
else if(digit == "7"){
    console.log("seven");
}
else if(digit == "8"){
    console.log("eight");
}
else if(digit == "9"){
    console.log("nine");
}
else{
    console.log("Not a digit");
}
    */
/*
let vow = prompt("Enter a character")
vow = vow.toLowerCase();
switch(vow){
        case "a" : console.log("vowel");
    break
        case "e" : console.log("vowel");
    break
        case "i" : console.log("vowel");
    break
        case "o" : console.log("vowel");
    break
        case "u" : console.log("vowel");
    break
        default : console.log("Consonant");
}
*/
/*
let sum = 0;
for(var x = 0; x<=10 ; x++){
    sum = sum + x;
}
console.log(sum);
*/
/*
function myF(birthYear){
    let age = 2025 - birthYear;
    return age;
}
let ageNow = myF(2004);
console.log(ageNow);
*/
/*
function cutFruits(fruits){
    return fruits *4;
}
function juiceWithFruits(apple, orange){
    const Apple = cutFruits(apple);
    const Orange = cutFruits(orange);
    const juice = `This juice is made from ${Apple} apple pieces and ${Orange} orange pieces`;
    return juice;
}

const juiceLog = juiceWithFruits(2, 5);
console.log(juiceLog);
*/
/*
function newJuice(food) {
  return food * 3;
}
function cutFood(mango, banana) {
  const Mango = newJuice(mango);
  const Banana = newJuice(banana);
  let juice = `This food is made from a total of ${Mango} pieces of mangoes and ${Banana} pieces of banana`;
  return juice;
}
let ourJuice = cutFood(3, 6);
console.log(ourJuice);
*/
/*
let guess = document.querySelector(".guessNum");
let submit = document.querySelector(".submit");

submit.addEventListener("click", () => {
  console.log(guess.value);
});
*/
/*
let arr = [2, 3, 4];
let badNewArr = [1, 8, arr[0], arr[1], arr[2]];
console.log(badNewArr);
let goodArr = [1, 8, ...arr];
console.log(goodArr);
console.log(...arr);
console.log(...badNewArr);
console.log(...goodArr);
*/
//  ===================================closer look at the functins=============
