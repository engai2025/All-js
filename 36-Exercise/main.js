
const colorPicker = document.querySelector('#colorPicker');
const color_view = document.querySelector('#color_view');
const selectedColorValue = document.querySelector('#selectedColorValue');

function changeTextStyle() {
    colorPicker.addEventListener('input', function() {
        const color = colorPicker.value;
        color_view.style.backgroundColor = color;
        selectedColorValue.textContent = color;
         selectedColorValue.style.padding="50px"
         selectedColorValue.style.width="200px"
         selectedColorValue.style.height="200px"
    });
}

changeTextStyle();