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

let mark = [85, 97, 44, 37, 76, 60];
let sum =0;
for (let i=0; i<mark.length; i++){
    sum += mark[i];
}
let avg = sum / mark.length;
console.log(`the average mark of the class is ${avg}`);