function increase(id) {
    let element = document.getElementById(id);
    let value = parseInt(element.innerText);
    value++;
    element.innerText = value;
}

function decrease(id) {
    let element = document.getElementById(id);
    let value = parseInt(element.innerText);
    if (value > 0) {
        value--;
    }
    element.innerText = value;
}
