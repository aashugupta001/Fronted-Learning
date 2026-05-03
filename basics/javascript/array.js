//array is used to store collection of data
//array
//array is a object it is non- primitive data type
//collection of items  for this we used [] for this  it is linear collection
//array is mutable it means it will change after creating but the string are immutable it will not chnage after assigining value for changing we want to create new string 
//position metter more it means index 
//we create my using [] to store data on it in Array we cannot used any key  pair values to store data on it 
//we assign value by using [] and seperate by using (,)
//we can store  different type of data in single array
let marks =[12,23,34,54,65,65,56];
console.log(marks);
console.log(marks.length); //property which give just number  but in method it perform some specific task 
let name=["saktimaan","heroman","pokemon","sinchen","doremon"];
console.log(name);
console.log(name.length);
console.log(typeof name);
console.log(name[2]);
console.log(name[7]);
console.log(name[3]);
name[2]="aashu";
console.log(name);
//looping over an array

//iterable means in which we can used loops for example like strings, object ,array.
//for loop
let cartoon=["doremon","sinchen","motu patlu","micky mouse","nobita","oggy and crocroach"];
for(let data = 0;data<cartoon.length;data++){
    console.log(cartoon[data]);
}
//for of loop
let data=["aashu","aashutosh","anjali","gupta","tiwari","sharma"];
for (let items of data){
    console.log(items);
}
let cities=["surat","mumbai","raipur","udaipur","dharmpur","jamnagar"];
for(let city of cities){
    console.log(city.toUpperCase());
}
let marks=[85,97,44,37,76,60];
let sum=0;
for(let val of marks){
    console.log(val);
    sum=sum+val;
}
let avg=sum/marks.length;
console.log(sum);
console.log(`average of all the student marks become ${avg}`);
let price=[250,645,300,900,50];
let i=0;
for(let val of price){
    // console.log(`value of index${i} = ${val}`);
    let offer=val/10;
    price[i]=price[i]-offer;
    console.log(`the value after offer ${price[i]}`);
    // console.log(price);
    i++;


}
for(let i=0;i<price.length;i++){
    let offer=price[i]/10;
    price[i]-=offer;
    console.log(offer);

}
console.log(price);
console.log(offer);
let number=[360,340,345,22,233,232,212];
let sum=0;
for(let i=0;i<number.length;i++){
    if(number[i]>=200){
        sum+=number[i];
        console.log(number[i]);
    }

}
console.log(sum);
//method in array 
//array in methods
//push ():add to end
//pop():delete from end 7 return
//toString():cpnvert array to string
 let veggies=["potato","tomato","onion","chilli","cabbage","cauliflower"];
 let insert_data=veggies.push("chips");
 console.log(veggies);
 console.log("indersted data",insert_data);
 console.log(typeof veggies);
 console.log(veggies.length);
 let deleted_data=veggies.pop();
 console.log(veggies);
 console.log("deleted items:",deleted_data);
 console.log(veggies.toString());
 let marks=[23,34,5,56,434,656,565];
 console.log(marks);
 console.log(marks.toString());
//concat : it is used to join multiple array and return a result 
//it is used to concat different array data together it create new string or value not change in real value for changing valuew it should create new string to store new updated result 
let data=[23,433,43,43,34];
let data2=[34,5544,3434,444,666,5454];
console.log(data.concat(data2));
// by using this we can add new array value in the end 
let cartoon=["pokemon","doremon","pikachoo","nobita","ninja techniques"];
let famous_cartoon=["doremon","sinchen","pikachoo"];
let viral_one=["motupaltu","micky mouse"];
//we can concat more then 2 string together by using concat () method
let final=cartoon.concat(famous_cartoon,viral_one);
console.log(final);
// by using unshift method we can add newe value in starting of the string
viral_one.unshift("doremon");
console.log(viral_one);
//by usinf shift method we can delete value from the array
viral_one.shift();
console.log(viral_one);
// slice (): return piece of the array
// not change in original array
let student=["aashu","anjlai","kumkum","gauri","khushi","deepa","aradhana"];
console.log(student.slice(1,4));
splice
// change original value (add , remove , replace)
let number=[1,2,4,5,545,5656,65,656,45,343,4343,43];
// synatx  splice(startidx, delcount,newE...);
console.log(number);
number.splice(2,3,10000,20000);
// adding value in array
number.splice(2,0,30000,40000);
console.log(number);
// delete value from array
number.splice(1,3);
console.log(number);
// replace value from array
number.splice(0,1,101);
console.log(number);
number.splice(4); //  using in this way it will understnad it is a starting index for deleteing value from the array
console.log(number);
// if we never give any value in() then no change we can see in our array list 
number.splice();
console.log(number);
//practice set 
let company=["bloomberg","microsoft","uber","google","IBM","netflix"];
console.log(company);
// company.splice(0,1);
company.shift();
console.log(company);
company.splice(1,1,"old");
console.log(company);
company.push("amazon");  //unshitf for adding in starting 
console.log(company);
