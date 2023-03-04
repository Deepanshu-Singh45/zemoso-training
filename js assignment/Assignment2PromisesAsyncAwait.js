function returnPromises(uID) {
return new Promise((resolve) => {
    setTimeout(() => {
    console.log("Fetched the data!");
    resolve(uID + "@gmail.com");
    }, 4000);
});
}

// declaring async function
async function getData(uID) {
console.log("start");
var getEmail = await returnPromises(uID);
console.log("Email id of the user id is: " + getEmail);
console.log("end");
}

getData("skc");  

// output will be : 
// start
// Fetched the data!
// Email id of the user id is: skc@gmail.com
// end