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
//     
// }
// function myfunction(){
//     console.log("welcome to javascript function");
//     console.log("today is my 5th lecture of javascript");
// }
// myfunction(); //we can convert the repeated code into function by this we reduce redundancy of the code
// myfunction();0
// function mymessage(msg,n){ 
//     //parameter ->input
//     console.log(msg*n);
// }
// mymessage("i love javacsript",100); //argument
// function mysum(a,b){
//     console.log(a+b);

// }
// mysum(23,343);
// function sum(x,y){
//     //local variable  ->scope is limited means it only have access between {}
//     s=x+y;
//     console.log("before return");
//     return s; //reserved word
//     console.log("after return"); //not execute anymore
// }
// let val=sum(3,4);
// // console.log(x);
// console.log(val);
//function parameter they are like local variable of function they had block scope they are alive in function block{}
//sum function
// function sum(a,b){
//     return a+b;
// }
// function mul(a,b){
//     return a*b;
// }
//arrow function => comapct way of writing a function
// function sum(a,b){
//     return a+b;
// }
// //modern jaavscript function is javascript
// const arrowsum=(a,b)=>{
//     console.log(a+b);
// }
// function mul(a,b){
//     return a*b;
// }
// const arrowmul=(a,b)=>{
//     console.log(a*b);

// }
// function sub(a,b){
//     return a-b;
// }
// const arrowsub=(a,b)=>{
//     console.log(a-b);

// }
// function div(a,b){
//     return a/b;
// }
// let arrowdiv=(a,b)=>{
//     console.log(a/b);

// }
// arrowdiv =23;
// const printhello=()=>{
//    console.log("hello"); 
// };
//practice
// function countvowels(str){
//     let count =0;
//     for(const char of str){
//         if(char==="a"||
//             char==="e"||
//             char==="i"||
//             char==="o"||
//             char==="u"){
//             count++;
//         }
//     }
//     return count;
// }
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
//forEach loops in array
//it is only used with array 
//arr.foreach(callBackFunction)
//callbackFunction:here,it is a function to excute for each element in the array{a callback is a function passed as an agrument to another function}
??syntax 
//arr.forEach(val)=>{
// console.log(val);
// })


