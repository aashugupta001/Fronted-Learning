//functions
//block of code that perform specific task , can be invoked whnever needed
// toUppercase()  this all are function in javsacript we used this to persrom this specific task
//toLowerCase()  this all are function in javsacript we used this to persrom this specific task
//pop()  this all are function in javsacript we used this to persrom this specific task
//push()  this all are function in javsacript we used this to persrom this specific task
//function definition means what specific task we had to done (do some work)
//function call for performing a specific task is that
//we used function keyword functionName()
// {
// }
function myfunction(){
    console.log("welcome to javascript function");
    console.log("today is my 5th lecture of javascript");
}
myfunction(); //we can convert the repeated code into function by this we reduce redundancy of the code
myfunction();
function mymessage(msg,n){ 
    //parameter ->input
    console.log(msg*n);
}
mymessage("i love javacsript",100); //argument
function mysum(a,b){
    console.log(a+b);

}
mysum(23,343);
function sum(x,y){
    //local variable  ->scope is limited means it only have access between {}
    s=x+y;
    console.log("before return");
    return s; //reserved word
    console.log("after return"); //not execute anymore
}
let val=sum(3,4);
// console.log(x);
console.log(val);
function parameter they are like local variable of function they had block scope they are alive in function block{}
sum function
function sum(a,b){
    return a+b;
}
function mul(a,b){
    return a*b;
}
arrow function => comapct way of writing a function
function sum(a,b){
    return a+b;
}
//modern jaavscript function is javascript
const arrowsum=(a,b)=>{
    console.log(a+b);
}
function mul(a,b){
    return a*b;
}
const arrowmul=(a,b)=>{
    console.log(a*b);

}
function sub(a,b){
    return a-b;
}
const arrowsub=(a,b)=>{
    console.log(a-b);

}
function div(a,b){
    return a/b;
}
let arrowdiv=(a,b)=>{
    console.log(a/b);

}
arrowdiv =23;
const printhello=()=>{
   console.log("hello"); 
};
practice
function countvowels(str){
    let count =0;
    for(const char of str){
        if(char==="a"||
            char==="e"||
            char==="i"||
            char==="o"||
            char==="u"){
            count++;
        }
    }
    return count;
}
const countvow=(str)=>{
    let count =0;
    for(const char of str){
        if(char==="a"||
            char==="e"||
            char==="i"||
            char==="o"||
            char==="u"){
            count++;
        }
    }
    return count;
}
//foreach loop
// Array.foreach(callbackfunction)
// callbackfunction:Headers,it is a function toexcute for each element in the array 
//a callback is a function passed as an argument to another function
function mystring(){
    console.log("data");
}
function newstring(mystring){
    return mystring;
}
let arr=[1,2,3,4];
arr.forEach(function printval(val){ //vzlue at each idx
    console.log(val);
})
let arr=["pune","delhi","surat"];
arr.forEach((val,idx,arr)=>{ //vzlue at each idx
    console.log(val);
    console.log(val.toUpperCase(),idx,arr);

});
//higher order function or higher order method (forEach function is this type of fucntion)
//a type of function whixh return other function as thier output  or take either  function as an parameter [in any function in which we see callback function this become a higher order function or method ]
let arr=[1,2,3,4,5];
arr.forEach((val,idx)=>{
    console.log("square of each array",val,"=",val*val);
})
let arr=[1,2,3,4,5];
let square=(val)=>{
    console.log(val*val);
}
arr.forEach(square);
// other important method of array
// map 
// create a new array with the result of some operation . the value its callback return are used to form new array 
// synatx=== arr.map(callbackFnx(value,index,array))
// let newArr ==arr.map((val)=>{
//    return val*2;
// }) 
 let arr=[1,2,4,5,6];
 let newarr=arr.map((val)=>{
    // console.log(val);
    // return val*2;
    return val*val;
 })

console.log(newarr);
//Filter method
//create a new array of elements that give true for a condition/filter
//ex. all even number
let Newarr=arr.filter((val)=>{
    return val%2===0;
})
let Arr=[1,2,35,7,90,67,45,34,22,36];
let newarr=Arr.filter((val)=>{
    // return val%2!=0; //odd
    return val%2===0; //even
})
console.log(newarr);
console.log(Arr);//not change in original array 

//reduce method
//perform some operation & reduce the array to a single value . it return that single value
let arr=[1,2,3,4,90,89898];
let output=arr.reduce((result,curr)=>{
    return result > curr ? result :curr;
});
console.log(output);
//practice set 1
let marks=[75,67,89,78,56,45,78,67,9,90,89,98,88,99,95,93];
let newarr=marks.filter((val)=>{
    return val>=90;
})
console.log(newarr);
//practice set 2
let num=prompt("enter a n number");
let arr=[];
arr=num;
console.log(arr);
let n=prompt("enter a number:");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;}

    // console.log(arr);
let sum=arr.reduce((val,ret)=>{
        return val+ret;
    })
  
console.log("sum",sum);

let n=prompt("enter a number:");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i
}
console.log(arr);
let sum=arr.reduce((val,curr)=>{
        return val*curr;
})
console.log(sum)

