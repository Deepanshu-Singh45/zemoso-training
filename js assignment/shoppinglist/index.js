


const list = document.getElementById('ul1');
const input = document.getElementById('item');
const button = document.getElementById('button1');

function addition() {
    

    const val = input.value;
    input.value = "";

    const listItem = document.createElement('li');
    const Text = document.createTextNode(val);
    const deleteBtn = document.createElement('button');
    
    // Text.textContent = val;
    deleteBtn.textContent = "Delete";
    listItem.appendChild(Text);
    listItem.appendChild(deleteBtn);
    list.appendChild(listItem);

    deleteBtn.onclick = () => {
        list.removeChild(listItem);
    }

}



