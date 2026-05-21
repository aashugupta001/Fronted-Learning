//events in javascript
//the change in the state of an object is known as an event
//events are fired to notify code of "interesting changes" that may affect code execution
//clicking on button is  an event 
// submiting any form is also an event 
//the change happened in the state of an object is called event in jaavscript  {we used it for trigger any work }
//example ... mouse click , keyboard press
//mouse events(click,double click etc)
//keyboard event(keypress,keyup,keydown)
//form events(submit etc)
//print evevnt & many more

//syntax node.event=()=>{
    //handle event}
//   let btn1=document.querySelector("#btn1");
//   btn1.onclick=()=>{
//     console.log("btn1 is clicked ");
//     let a=2;
//     a++;
//     console.log(a);
//   }
//   btn1.onclick=()=>{
//     console.log("btn1 is clicked m2");
    
//   } last handler event will execute 
// let btn1=document.querySelector("#btn1");
//   btn1.onclick=(e)=>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//   }
//   let box=document.querySelector("div");
//   box.onmouseover=(e)=>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX)
//     console.log("you are inside in div");
//   }
  //if we handle our event in inline and external js file at both the places then which one will get pripority first for this the javascript external file had first priority on this inline handling is not
  //we can not handle any event twice because it will overright so for this we only used event signle time not twice any event 

  //event object
  //it is a special object that has details about  the event.
  //all event handlers have access to the event object properties and  methods
  // node.event=(e)=>{
    //handler her}
// }
//e.target , e.type, e.clientX,e.clientY

//event listeners
//npde.addEventListener(event,callback)
//node.removeEventListner(event,callback)
//note: the callback reference should be same to remove

/by using this we can add multiple event handler property  to the specific button it is the one of the best benefit of this event listner 
// let btn1=document.querySelector('#btn1');
// btn1.addEventListener("click",()=>{
//     console.log(" button 1**handler one** done ");
// });
// btn1.addEventListener("click",()=>{
//     console.log(" button 2 done handler two** ");

// });

// btn1.addEventListener("click",()=>{
//     console.log(" button 2 done handler three** ");

// });
// const handler3=()=>{
//     console.log(" button 2 done handler four** ");
// };
// btn1.addEventListener("click",handler3);
// btn1.removeEventListener("click",handler3);
//we can not remove event handler if we use anonymous function in event listner because we can not access that function to remove it 
//toggle event listner
//it is used to toggle the event handler on and off 
//node.toggleEventListner(event,callback)
//if the event handler is not present then it will add the event handler and if it is present then it will remove the event handler
//practice set of toggle button

let mode=document.querySelector('#btn2');
let currmode="light";
// let mode2='dark';
mode.addEventListener("click",()=>{
    if(currmode==="light"){
        currmode="dark";
        document.querySelector("body").style.backgroundColor="red";
    }else{
        currmode="light";
        document.querySelector("body").style.backgroundColor="pink";    
    }
    console.log(currmode);
});

















