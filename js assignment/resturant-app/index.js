

foodArr = [ {id:"Coca-cola", name:"Coca-cola",  price : "40", category:"beverages"},
            {id:"Orange Juice", name:"Orange Juice",  price : "60", category:"beverages"},
            {id:"Pepsi", name:"Pepsi",  price : "40", category:"beverages"},
            {id:"Soda", name:"Soda",  price : "40", category:"beverages"},
            {id:"Coffee", name:"Coffee",  price : "30", category:"beverages"},
            {id:"Pastries", name:"Pastries",  price : "80", category:"dessert"},
            {id:"Cupcakes", name:"Cupcakes",  price : "70", category:"dessert"}, 
            {id:"Custards", name:"Custards",  price : "100", category:"dessert"}, 
            {id:"Biryani", name:"Biryani",  price : "220", category:"main-course"},    
            {id:"Butter Chicken", name:"Butter Chicken",  price : "300", category:"main-course"}, 
            {id:"Chicken Tikka Masala", name:"Chicken Tikka Masala",  price : "350", category:"main-course"},
            {id:"Chhole Bhature", name:"Chhole Bhature",  price : "120", category:"main-course"},
            {id:"Samosa", name:"Samosa",  price : "25", category:"starter"},
            {id:"Paneer Pakoda", name:"Paneer Pakoda",  price : "80", category:"starter"},
            {id:"Baked Chicken Seekh", name:"Baked Chicken Seekh",  price : "140", category:"starter"}, ]

// function for searching tables

function searchTable() {
    let input;
    input = document.getElementById('mytable').value;
    input = input.toLowerCase();
    let all = document.getElementsByClassName('tab');
    let table = document.getElementsByClassName('table');
    for(let i = 0; i < all.length; i++) {

        if(all[i].textContent.toLowerCase().includes(input)) {
            all[i].style.display = "";
            table[i].style.display = "";
        }
        else {
            all[i].style.display = "none";
            table[i].style.display = "none";
        }

    }
}

// function for searching foods

function searchFood() {
    let input;
    input = document.getElementById('mymenu').value;
    input = input.toLowerCase();
    let all = document.getElementsByClassName('food');
    let food_category = document.getElementsByClassName(input);
    let food_card = document.getElementsByClassName('food-card');

    // let name = food_card.name.toLowerCase();
    if(food_category.length > 0) {

        let div = document.getElementById('menu-list');
        let foodCard = "";
        foodArr.map((food) => {
            if(food.category == input) {
                const value = `<div class='food-card ${food.category}' id='${food.id}'
                            draggable = 'true' ondragstart='dragstart_handler(event);' ondragend='dragend_handler(event);'>
                            <h3 class='food'> ${food.name} </h3>
                            <p> <i>Price</i> : ${food.price} </p>
                            </div>`;
                foodCard += value;
            }
        })
        div.innerHTML += foodCard;

    }
    else {
        for(let i = 0; i < all.length; i++) {

            if(all[i].textContent.toLowerCase().includes(input)) {
                all[i].style.display = "";
                food_card[i].style.display = "";
            }
            else {
                all[i].style.display = "none";
                food_card[i].style.display = "none";
            }
        }
    }
   
}

document.addEventListener("DOMContentLoaded", function(event){
    renderTable();
    renderFoodCard();
    // renderModal();
});

// // list of tables using map function

tabArr = [ {id:'table-1', name:'Table-1', items:'Total Items: ', amount:'Total Amount: '},
           {id:'table-2', name:'Table-2', items:'Total Items: ', amount:'Total Amount: '},
           {id:'table-3', name:'Table-3', items:'Total Items: ', amount:'Total Amount: '} ]

function renderTable() {
    let div = document.getElementById('table-list');
    let tabs = "";
    let identity1 = 100, identity2=200;
    tabArr.map((tab) => {
        const value = `<button class='table' id='${tab.id}'
                        ondrop="drop_handler(event,\' ${tab.id} \' )" ondragover="dragover_handler(event);" onClick="showModal(\' ${tab.id} \')">
                        <h3 class='tab'> ${tab.name} </h3>
                        <p> <span id="${identity1}">${tab.items}</span> | <span id="${identity2}">${tab.amount}</span></p>
                       </button>`;
        tabs += value;
        identity1++;
        identity2++;
    })

    div.innerHTML += tabs;

}



function renderFoodCard() {
    let div = document.getElementById('menu-list');
    let foodCard = "";

    foodArr.map((food) => {
        const value = `<div class='food-card ${food.category}' id='${food.id}'
                        draggable = 'true' ondragstart='dragstart_handler(event);' ondragend='dragend_handler(event);'>
                        <h3 class='food'> ${food.name} </h3>
                        <p> <i>Price</i> : ${food.price} </p>
                        </div>`;
        foodCard += value;

    })
    div.innerHTML += foodCard;

}

modalArr = []
   
            
function titleCase(str) {
    return str.toLowerCase().split(" ").reduce( (s, c) =>
    s +""+(c.charAt(0).toUpperCase() + c.slice(1) +" "), '');
}


var totalBill = 0;
var impID;
function showModal(id) {

    console.log("testing!", id);
    var retrievedObject = sessionStorage.getItem('DataModal');
    console.log('retrievedObject: ',     JSON.parse(retrievedObject));
    modalArr = JSON.parse(retrievedObject);
    console.log("This is modal array : ",modalArr);
    let div = document.getElementById('myModal1');
    let hd = document.getElementById('tab-heading');
    hd.textContent = titleCase(id) + " | Order Details";
    let modalCard = "";
    

    let len = modalArr.length;
    let idx = 1;
    let del = 500;
    for(let i = 0; i < len; i++) {
        
        if(id === modalArr[i].id) {
            let ID1 = del.toString();
            const value = `<tr class="modalcontent" id="${del}">
                            <td>${idx}</td>
                            <td>${modalArr[i].item}</td>
                            <td>${modalArr[i].price}</td>
                            <td><input type="number" id="${idx}" name="quantity" class="inputM" min="1" max="50"></td>
                            <td><button onclick="deleteIt(${ID1}, ${i})" class="button1"> Delete </button></td>
                        </tr>`;
            modalCard += value;
            idx++;
            del++;
        }

    }
    let defaultBillModal = 800; 
    // " table-1 "
    // const value1 = `<p id="deep"></p>`;
    
    // modalCard += value1;
    div.innerHTML += modalCard;
    document.getElementById("myModal").style.display = "block";
    impID =id;
}

document.getElementsByClassName('inputM').textContent = 1;

function deleteIt(ID1, i) {
    modalArr[i].price = '0';
    document.getElementById(ID1).style.textDecoration = "line-through";
}


function calculateBill() {

    let len = modalArr.length;
    let idx = 1;
    let id = impID;
    totalBill = 0;
    
    for(let i = 0; i < len; i++) {

        if(id === modalArr[i].id) {
            let str = idx.toString();
            let val = document.getElementById(str);
            console.log("input - ",val.value);
            console.log("Price :- ", Number(modalArr[i].price));
            let p = parseInt(modalArr[i].price);
            let v = parseInt(val.value);
            console.log(p," : - ", v);
            totalBill += p * v;
            idx++;
        }

    }
    console.log("calculate bill", totalBill);
    

}

function calculateDefaultBill(id) {
    let len = modalArr.length;
    let idx = 1;
    var totalDefaultAmount = 0;
    
    for(let i = 0; i < len; i++) {

        if(id === modalArr[i].id) {
           
            console.log("price ;>",parseInt(modalArr[i].price));
            totalDefaultAmount += parseInt(modalArr[i].price);
            idx++;
            console.log("calculate def bill", totalDefaultAmount);
        }

    }
    console.log("calculate default bill", totalDefaultAmount);
    return totalDefaultAmount;
}
var prevlen = 0;
function closeit() {

    calculateBill();
    alert("Total Amount Payable : " + totalBill);
    sessionStorage.clear();
    prevlen = 0;
    var retrievedObject = sessionStorage.getItem('DataModal');
    console.log('retrievedObject: ',     JSON.parse(retrievedObject));
    
    window.location.reload();
    document.getElementById("myModal").style.display = "none";
    
    

}

// var modal = document.getElementById("myModal");
// window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//       prevlen = modalArr.length;
//       sessionStorage.clear();
//     }
// }







var newObject = {}



function dragstart_handler(ev) {
    
    console.log("dragStart");
   

    const text = ev.target.innerText;
    
    console.log(text);
    const arrtext = text.split("\n\n");   

    arrtext[1] = arrtext[1].split(" "); 


    newObject['item'] = arrtext[0];
    newObject['price'] = arrtext[1][2];
    

    ev.dataTransfer.setData("text", ev.target.innerText);
    
}

function dragover_handler(ev) {
    ev.preventDefault();
  console.log("dragOver");
  var dti = ev.dataTransfer.items;

  console.log("success!");
  ev.currentTarget.style.background = "lightblue";
  ev.preventDefault();
}

function drop_handler(ev, id) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  console.log("Data : ")

    newObject['id'] = id;
    

  if(sessionStorage.DataModal)
    {
     DataModal = JSON.parse(sessionStorage.getItem('DataModal'));
    }else{
     DataModal=[];
    }
    DataModal.push(newObject )   
    console.log(DataModal);
    sessionStorage.setItem('DataModal', JSON.stringify(DataModal));

    
    var retrievedObject = sessionStorage.getItem('DataModal');
    modalArr = JSON.parse(retrievedObject);
    console.log("def bill -- ", calculateDefaultBill(id));
    console.log(calculateDefaultBill(' table-1 '));
    
    let htmldoc = document.getElementById(`${id}-total`); 
        console.log("Array 800 : - ");
        console.log(`${id}-total`);
        if(htmldoc){
            console.log("Present");
        }
        else {
            console.log("Not Present");
        }

    if(id === ' table-1 ') {
        document.getElementById('100').textContent = "Total Items : " + (modalArr.length + prevlen);
        document.getElementById('200').textContent = "Total Amount : " + calculateDefaultBill(id);
        document.getElementById("deep").textContent = "Total : " + calculateDefaultBill(id);

    }
    else if(id === ' table-2 ') {
        document.getElementById('101').textContent = "Total Items : " + (modalArr.length + prevlen);
        document.getElementById('201').textContent = "Total Amount : " + calculateDefaultBill(id);
        document.getElementById('800').textContent = "Total : " + calculateDefaultBill(id);
    }
    else if(id === ' table-3 ') {
        document.getElementById('102').textContent = "Total Items : " + (modalArr.length + prevlen);
        document.getElementById('202').textContent = "Total Amount : " + calculateDefaultBill(id);
        document.getElementById('800').textContent = "Total : " + calculateDefaultBill(id);
    }
    var nodeCopy = document.getElementById(id).cloneNode(true);
    ev.target.appendChild(nodeCopy);
}

function dragend_handler(ev) {
    console.log("dragEnd");
    var dti = ev.dataTransfer.items;
    
    dti.clear();
}

