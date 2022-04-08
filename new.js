'use strict';

let textBox = document.getElementById('good');
textBox.addEventListener('keydown', (event) => {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        textBox.innerHTML += event.key.toLowerCase();
    }
}, true);