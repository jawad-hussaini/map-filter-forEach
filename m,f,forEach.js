// ********Map*********
const arr1=[1,2,3,4,5];
const output1=arr1.map((x)=>{
    return x*2;  
  });
  console.log(output1);

  const users=[
    {firstName:"john",lastName:"Biden",age:26},
    {firstName:"jimmy",lastName:"cob",age:75},
    {firstName:"sam",lastName:"lewis",age:50},
    {firstName:"Ronald",lastName:"Mathew",age:26},  
  ];
  const result=users.map((x)=>{
      return x.firstName+" "+x.lastName;
  })
  console.log(result);
  
const array = [2, 3, 4, 5];
const square = array.map((x)=>{
    return x**2;
});
console.log(square);

const elements = [10, 20, 30, 40, 50];
const double = elements.map((x)=>{
    return x*x
;}) 
console.log(double);



  // ******filter*******
const arr2=[1,2,3,4,5]
const output2=arr2.filter((x)=>{ 
return x%2
});
console.log(output2)

let student =[
    {name:"Smith",rollNumber:31,marks:80},
    {name:"Jenny",rollNumber:15,marks:69},
    {name:"John",rollNumber:16,marks:35},
    {name:"Tiger",rollNumber:7,marks:55}
   ];

const output = student.filter((x)=>{
    return x.marks>50;
})
console.log(output);



      //*******forEach*******/
let a = 0
const newArray = [1, 2, 3, 4, 5];
let foreach = newArray.forEach((x) => {
    return a = a + x;
});
console.log(a);


let casing = ["Apple", "banana", "Mango"];
let upper = casing.forEach((x)=>{
    console.log(x.toUpperCase())
});

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = numbers.forEach((x)=>{
    if(x%2 == 0){
        console.log(x)
    }
});

let object = [
        {name: "Ali", age: 25},
        {name: "Irfan", age: 34},
        {name: "Malik", age:89}
];
object.forEach(y => {
    console.log(y.name + " age is " + y.age);
})


let id = [
    {id:1, value:10},
    {id:2, value:20},
    {id:3, value:30},
];

id.forEach((x)=>{
    x.value += 1;
})
console.log(id)


let list = [
    {price: 10, quantity:2},
    {price: 12, quantity:3},
    {price: 30, quantity:1}
]
let totalPrice = 0;
list.forEach(total => {
    totalPrice += total.price *total.quantity;
});
console.log(totalPrice);


let names = ["Amir", "malik", "usama", "Arif", "Shamoon"];
let newstart = "A";
names.forEach(x => {
    if(x.startsWith(newstart)){
        console.log(x)
    }
});