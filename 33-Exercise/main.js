const header1 = document.querySelector('#header1');
const textElements = document.querySelectorAll('.text');

function changeText() {
    header1.textContent = "Hello Eng Abdirahmaan, DOM waa la beddelay!";
}

function changeElement() {
    textElements.forEach(el => {
        el.innerHTML = "<b>Qoraalkan waa la beddelay isagoo la isticmaalayo innerHTML.</b>";
    });
}
