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
    let age = 25;
    if(age >= 18){
        console.log("you can go")
    }
    else if(age <= 27){
        console.log("you need a license")
    }
    else {
        console.log("you can not go")
    }
}