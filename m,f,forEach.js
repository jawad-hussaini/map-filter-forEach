const arr1=[1,2,3,4,5];
const output1=arr1.map((x)=>{
    return x*2;  
  });
  console.log(output);

const arr2=[1,2,3,4,5]
const output2=arr.filter((x)=>{ 
return x%2
});
console.log(output2);

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



let student =[
    {name:"Smith",rollNumber:31,marks:80},
    {name:"Jenny",rollNumber:15,marks:69},
    {name:"John",rollNumber:16,marks:35},
    {name:"Tiger",rollNumber:7,marks:55}
   ];

const output = student.filter((x)=>{
    return x.marks>50;
})
console.log(output)
