//string is a sequence of character used to represent text it is used to store information in sentense (for assing value in string we used intervted comma "",'' this both)
//both are valid for strings valuw 
//we used let then varible name 
// let str="aashu";
// let name='billion';
// console.log(str);
// console.log(name);
//in-build property of string ,function, method
//str.length
// console.log(str.length); //length of str
// console.log(str[4]); //for individual index value we used this 
// //template literals in javascript
// //thw way to have embedded expression in strings
// let sentence=`this is template literals `;
// console.log(typeof sentence);
let obj={
    item:"pen",
    price:10
};
//string interpplation 
// to create string by doing substituion of placeholders `string text ${expression} string text `;
let output =`the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
// console.log("the cost of ",obj.item,"is",obj.price);
let data=`this is my way to understand literals ${1+2+2+22+665-44*898} i calculate this by using literals `;
console.log(data);
//escape character like \n \t 
console.log(" we \n are \n\t going \n to \n college");
let we="now \t ready \n for \n work";
console.log(we);
console.log(we.length);  //escape character count \n only one 
//string method in javascript
//this is build in function to manipulate  a string
//str.toUpperCase() useed to convert lowercase value to upper case abcde==ABCDE
let word="we are going to explore the citty surat today";
console.log(word);
console.log(word.toUpperCase());
//str.Lower.Case() it is used to convert uppercase value to lower case value ABCDE==abcde
let info="I LOVE TO MEET NEW PEOPLE EVERYDAY ";
console.log(info);
console.log(info.toLowerCase());
//str.trim() it is used to remove extra space from the sentence  (remove whitespace)
let space="we are       not ready for    going to   visit new   person   today";
console.log(space);
console.log(space.trim());
