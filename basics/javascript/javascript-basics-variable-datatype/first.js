// alert("hello javascript");
// alert("welcome in the world of javascript");
// console.log("aashu is in the world of javascript");
// console.log("i am learning javascript");
// console.log("javascript is a programming language which is used to make web page interactive and dynamic");

name="aashu";
age=24;
console.log(age);
console.log(name);
price=8590.56
console.log(price);
x=null;
console.log(x);
y=undefined;
console.log(y);
radius=24
console.log(radius);
isfollow=true;
console.log(isfollow);
isfollow=false;
console.log(isfollow);
// it is dynamically types value 
// it means  we never want to declre datatype of variable at the time od assign value in javascript 
// we can say = operator in javascript for assign valuew it means it is a assignment operator in a javascript it is not used for eqality check in javascript it is ued for assign value like lets suppose a=10; it means the = operator help to assing this number to store in variable a place
// Rules for naming variable in javascript 

// 1. variable name should not bea number anymore 
// 2.varible name should be start with latter and underscore and $ sign but not with number anymore
// 3. variable name not contain space 
// 4.varible name should not be a keyword in javascript like var,let,const,if,else ,or,function,return etc.
// 5.variable name should be meanningfull or contain siglw woed like a,b,c,d,e etc is not a good variable name it should be like name,age,price,radius etc is a good variable name
// 6. variable name should be in camel case like firstName, lastName, fullName etc is a good variable name but first_name, last_name, full_name is not a good variable name in javascript because it is not in camel case
// it is a case sensiticve language it means small latter and captial latter are become different operator in javascript like name and Name are different variable in javascript because it is a case sensiticve language
// we cannot use reserved keyword as a variable
fullname="aashu"
FULLNAME="aashu"
console.log(fullname);
console.log(FULLNAME);
_fullname="AASHU"
console.log(_fullname);
$fullname="aashu"
console.log($fullname);
// 23ashu="anajli"   it create error on a programm because we cannot use number in starting 
// console.log(23ashu);
Console="hello"   
// the Console not create an error because it is not a reserve keyword in javascript only small latter console is reserve 
console.log(Console);
// console=323   it create an error on a programm because the console is a reserve keyword in javascript so we cannot use it as variable name anymore
// console.log(console);
totalPrice=8956
console.log(totalPrice);
// keyword we used to decalare variable in javascript
// 1. var 2.let 3.const
// var is a keyword which is used to declare variable in javascript it is a old way to declare variable in javascript but it is not recommended to use var keyword in javascript because it has some problem like it can be redeclare and reassign value in javascript 
// let is a keyword which is used to declare variable in javascript it is a new way to declare variable in javascript it is recommended to use let keyword in javascript because it has some advantage like it cannot be redeclare but we can reassign value in javascript 
// const is a keyword which is used to declare variable in javascript it is a new way to declare variable in javascript it is recommended to use const keyword in javascript because it has some advantage like it cannot be redeclare and reassign value in javascript
var city="delhi"
console.log(city);
var city="mumbai"
console.log(city);
let country="india"
console.log(country);
// we cannot redecakre varibale in javascript but update value of jaavscript variable is possible in javascript
// let country="usa"   it create an error on a programm because we cannot redeclare variable in javascript 
// console.log(country);
// let country="usa"
// console.log(country);
const pi=3.14
console.log(pi);
// pi=32430.34
// console.log(pi);
// we cannot redecalred it and cannot be update this varible after assign value in it because it is a constant variable in javascript
let a;
a=10;
console.log(a);
// undefined is a data type in javascript it means the variable which is declared but not assigned any value in it then it is called undefined in javascript like the variable a in above code snippet it is declared but not assigned any value in it so it is called undefined in javascript
const b=20;
console.log(b);
// it create an error on a programm because we cannot declare a constant variable without assign value in it because it is a constant variable in javascript so we have to assign value in it at the time of declare it in javascript
// datatype 
// in jabacsript mainly twot ype od datatype which are primative datatype an dnon-primative datatype
// primative datatype has (7) number ,string,boolean,undefined , null,bigInt,symbol    
//  we use typeof keyword to check type od value we store in a variable 
// non-primative has like object (AARAY , function) it is a collection of value 
let young_age=34
console.log(typeof young_age);
let my_name="aashu gupta"
console.log(typeof my_name);
let Follow=true
console.log(typeof Follow);
let z;
console.log(typeof z);
let s=null;
console.log(typeof s);
let i=BigInt("347758938409");
console.log(i);
console.log(typeof i);
let j=Symbol("hello");
console.log(j);
console.log(typeof j);


// now we learn about object in javascript
const student ={
    name:"aashu gupta",
    age:20,
    cgpa:8.98,
    ispass:true,
}
console.log(student);
console.log(typeof student);
console.log(student.age);
// we are change value by using this
student["age"]=student["age"]+1;
console.log(student.age);
console.log(student);
// praticec set for day one
const product={
    title:"ball pen",
    rating:4,
    offer:5,
    price:20.3
};
console.log(product);
console.log(typeof product);

const profile={
    profilename:"codingwithshradha didi",
    follow:true,
    MessageChannel:"message on",
    post:195,
    follow:597,
    following:100,
    full_Name:"shradha didi",
    email:"@shradhaexample.com",
    professional:"youtuber",
    about:"i am a youtuber and i am making video on programming language like javascript,python,java etc and i am also making video on web development like html,css,javascript etc"
};
console.log(profile);
console.log(typeof profile);

