
// Question 2 : 
// Rewrite the following code using template literals

// const printBill = (name, bill) => {
//     return “Hi “ + name + “, please pay: “ + bill;
// }

// solution for above mentioned problem statement

const printBill = (name, bill) => `Hi ${name}, please pay: ${bill}`;

console.log(printBill("Deepanshu Singh", 4500)); // for example
