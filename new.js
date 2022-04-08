'use strict';

let textBox = document.getElementById('good');
textBox.addEventListener('keydown', (event) => {
        textBox.innerHTML += event.key.toLowerCase();
});
