
// Question 2 : 
// Rewrite the following code using template literals

// const printBill = (name, bill) => {
//     return âHi â + name + â, please pay: â + bill;
// }

// solution for above mentioned problem statement

const printBill = (name, bill) => `Hi ${name}, please pay: ${bill}`;

console.log(printBill("Deepanshu Singh", 4500)); // for example
