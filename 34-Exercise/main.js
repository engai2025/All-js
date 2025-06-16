// Exercise 34: Adding And Removing Elements
const ul1 = document.querySelector('#ul1');
function addItem() {
    const newitem = document.createElement('li');
    newitem.textContent = `Shayga ${ul1.children.length + 1}`;
    ul1.appendChild(newitem);
}

function removeItem() {
    if (ul1.lastChild) {
        ul1.removeChild(ul1.lastChild);
    } else {
        alert('Ma jiro shay la saarayo!');
    }
}