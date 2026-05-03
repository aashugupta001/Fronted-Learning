//loops in javascript 
//we use loop to execute block of code repeteadly 
//it is a one of the important concept of the javascript we used this method in performing different operation
// we used different type of loops in javacsript like for loop, while loop , do-while loop
// //for loop(initization;conditon/increment or decrement )
//this loop is execute when the condition become true at that time it only execute otherwise when condition become false it will never execute block of code anymore and in this we can give all instruction in a single line 
for(let i=1;i<=10;i++){
    console.log("apna collge");
}console.log("i am the future software engineer");
//calculate sum of 1 to 5
let sum=0;
for(let i=1;i<=5;i++){
    sum=sum+i;
    // console.log(sum);
}
console.log(sum);
console.log("loop ended here");
//calculate sum from 1 to n or 100
let sum=0;
let n=1000;
for(let i=1;i<=n;i++){
    sum=sum+i;
}console.log(sum);
console.log("loop ended here");
//print 1 to 5 
for(let i=1;i<=5;i++){
    console.log("apna college",i);
}
//we want to re declare i for print

//infinite loops :a loop that never end
for(let i=1;i>=0;i++){
    console.log("i",i);
}

//while loop  in this loop we write condition first(we write condition outside and top of the block) then in block of code we write increment and decreament condition check in the last 
let i=1;
while(i<=5){
    console.log("apna college i=");
    i++;
}
//while loop
//we can check condition first so that's why if the condition become not satisfy then too it return or execute block of code at least one time
let i=20;
do{
    console.log("apna college");
    i++;
}while(i<=10);
// print 1 to 5 by using do-while loop
//for-of loop
//it help us to adding loop in strings nad array syntax for(let varof strvar){} it is used to store objects 
let str="developer";
let size=0;
for(let i of str){  //iterator  ->character
    console.log(i);
    size++;
}
console.log(size);
//for-of loop
let student={
    name:"aashu",
    age:"20",
    cgpa:"7.91",
    ispass: true

};
for(let key in student){
    console.log("key",key,"value",student[key]);
}

//practice set for loops
//print all even number form 0 to 100
//do while loop even number
let num=0;
do{
    console.log("the given number is even",num);
    num=num+2;
}while(num<=100);
let i=0;
while(i<=100){
    console.log("even number by using while loop",i);
    i=i+2;
}
//for loop even number practice
let num=2;
for(let num=2;num<=10;num++){
    // console.log(num);
    if(num%2==0){
        console.log("even number" ,num);
    }else{
        console.log("skip");
    }
}
//game number practice set 2 
let gamenumber=25;
let usernum=prompt("guess the game number");
// console.log(usernum);
while(usernum!=gamenumber){
   usernum= prompt("you entered wrong number");


}console.log("congratualation you enter the correct number");
