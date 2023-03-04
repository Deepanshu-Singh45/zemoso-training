
// Question 3 : 
// Modify the following code such that the object properties are destructured and logged.

// const person = {
//     name: “Noam Chomsky”,
//     age: 92
// }
           
// let name = person.name;
// let age = person.age;
// console.log(name);
// console.log(age);

// solution for above problem statement

const person = {
    name: "Noam Chomsky",
    age: 92
};
  
const { name, age } = person;
  
console.log(name);
console.log(age);
  