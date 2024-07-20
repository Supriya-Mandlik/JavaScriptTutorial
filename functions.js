console.log("This is Tutorial 53");

// function is used when we want to reuse the code . it saves time 

function greet(name,greetText="Greetings from JavaScript"){
    let name1 = "Name1"; //its scope is local that is within function
    console.log(greetText+" "+name);
    console.log(name + " is a good boy");
}

let name1="Harry"; // its scope is global
let name2="Shubham";
let name3="Rohan";
let name4="Sagar";
let greetText1 = "Good Morning";
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");
// console.log(name4 + " is a good boy");

greet(name1,greetText1);
greet(name2,greetText1);
greet(name3,greetText1);
greet(name4);
// if we dont give greetText value then it will use default value 

function sum(a,b,c){
  let d = a+b+c;
    return d;
    // This line will never execute (unreachable code)
    // console.log("Function is returned");
}

let addition = sum(1,2,3);
console.log(addition);

