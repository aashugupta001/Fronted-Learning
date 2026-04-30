//string is a sequence of character used to represent text it is used to store information in sentense (for assing value in string we used intervted comma "",'' this both) strongs are immutable it cannot be change after declared
//both are valid for strings valuw 
//we used let then varible name 
let str="aashu";
let name='billion';
console.log(str);
console.log(name);
//in-build property of string ,function, method
//str.length
console.log(str.length); //length of str
console.log(str[4]); //for individual index value we used this 
//template literals in javascript
//thw way to have embedded expression in strings
let sentence=`this is template literals `;
console.log(typeof sentence);
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
let space="          we are       not ready for    going to   visit new   person   today";
console.log(space);
console.log(space.trimStart());
//str.slice(start,end) it is used to slice of the code means only print required code or method (by the used of this we can seprate particyular code from the programm) //syntax we used like str.slice(strat,end));
//for slice it is not mendatory to give ending index , if we just give starting index then it will ok 
//for indexing it start from 0 not from 1 
let Slice="javascript";
console.log(Slice);
console.log(Slice.slice(1,5));
console.log(Slice.slice(2)); //only give starting index
//concatatination
//by the used of this string method we can join two string 
//for this we used syntax str.concat(str2); 
//we can concatadinate more then 2 string togather
//infact we can concat number and string togather
let Con_1="i am learning javascript ";
let Con_2="from last some days ";
console.log(Con_1);
console.log(Con_2);
let result=Con_1+Con_2;
console.log(result,"by using + operator");
console.log(Con_1,Con_2);
console.log(Con_1.concat(Con_2));
//replace by using this string method we replace current value from new value in it fo this we used 
//syntax str.replace(oldvalue, new value);
//by using replace method we can replace a single latter, word or entire line too(sentence)
let Old_data="i was beginner";
console.log(Old_data);
console.log(Old_data.replace(Old_data,"now i am not a beginner anymore"));
console.log(Old_data.replace("i","me"));
console.log(Old_data.replaceAll("e","j"));  // by using this function we can replace all the maching letter from sentence or from particular varibale name 
//chatAt
// by using we can find character on particular index 
// by using this function the only thing you understand that is if we know the index number of any value but forget the character then we used this method or function in code 
// and one of the main difference between indexof and charAt is we used indexof to find the index value of the 
//character and we used charAt to  find character on any particular index
//we cannot change any value directly by going to thier index 
// for replacing old value to new we  want to used replace method always 
let Character_value="i love coding";

console.log(Character_value);
console.log(Character_value.charAt(7));
//startswith();
//it is used to check starting value 
//endswith();
//it is used to check ending value 
let Start="aashu";
console.log(Start.startsWith("a"));
console.log(Start.startsWith("k"));
console.log(Start.endsWith("u"));
console.log(Start.endsWith("o"));

//indexof 
//we used this to find index value of any character in a code or programm 
let  Character_value2="start learning coding by choice";
console.log("index value of the character",Character_value2.indexOf("l"));
//practice set
let full_name=prompt("enter your full name");
let username="@"+full_name;
// let username="@"+full_name+full_name.length;
// console.log(username);
// console.log(username+username.length);
console.log(username.concat(username.length));
