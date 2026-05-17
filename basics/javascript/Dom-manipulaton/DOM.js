//window object
//the window object represent an open window in a browser. it is browser's object (not  A  javascripts & is automatically created by browser).
//it is a global object with lots of properties & methods.
//window
console.log("hello");
window.console.log("hello 2");  //console.log know about window and it is a part of  window like alert , console.log, prompt
//imp for interview
//whta is a DOM=[when a web page is loaded , the browser creates a document object model (dom) of th page]
// it is a tree like structure
//                  window  //nodes
//                 document   //nodes
//                   html
//    head                            body
//meta meta title link             div script
//                                img h1 p div
// console.log (); used for print 
console.log(document);
console.dir(window.document);
console.dir(document.body);
console.log(document.body);
// DOM Manipulation
//selecting with id 
let button=document.getElementById("myid");
console.dir(button);
// //when we assign wrong variable then it give us null value

// //selecting with class
let headings=document.getElementsByClassName("heading-class");
// when we assign wrong classname it give me empty html collection
console.dir(headings);
console.log(headings);/
//selecting with tags
let paras=document.getElementsByTagName("p");
console.dir(paras);
let element=document.querySelector("p");
 //print  first matching element this is for tags selecting
// for selecting class name we use document.querySelectior(.p)
// for selecting id name we use document.querySelectior(#p)

console.dir(element);
let elements=document.querySelectorAll("p");
//  select all matching element
// for selecting class name we use document.querySelectior(.p)
// for selecting id name we use document.querySelectior(#p)

console.dir(elements);
//DOM Manipulation
//properties
//tagname:return tag for element nodes
let firstel=document.querySelector("#myid");
console.dir(firstel); 
// for printing any Element tagname we used .tagname property.
//innerText:return the text content of the element and all its children
//parents ==>childer==>siblings 
console.dir(document.body.firstChild);
//text node  bydefault
//comment node
//elements node (one of the important node )
let div =document.querySelector("div");
console.dir(div);
//innerHTML:return the plain text or html contents in the element
let div=document.querySelector("div");
console.dir(div);
let heading=document.querySelector("h1");
console.dir(heading);
// div.innerhtml we used this properties for writing html tag sand thier content too

//textCOntent:return textual content even for hidden elements
let div=document.querySelector("div");
console.dir(div);
//div.textContent this property is used for writing the only content from the html tag 
//first question
let heading=document.querySelector("h2");
//first way 
heading.append("from apna college student ");
console.log(heading);
//second way
console.dir(heading.innerHTML);
heading.innerHTML=heading.innerHTML+"from apna college ";
console.dir(heading);
 //second question
 let divs=document.querySelectorAll(".box");
 divs[0].innerText="aashu";
  divs[1].innerText="aashu gutpa become developer ";
 divs[2].innerText="aashu is the bested developer ever you meet in future";
// second way 
let divs=document.querySelectorAll(".box");
let idx=1;
for(let div of divs){
    // console.dir(div.innerHTML);
    div.innerText=`the uniques value ${idx};`
    idx++;

    
}



