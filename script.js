const bgButton = document.getElementById('bg');

const colors = [
    '#0d1522',
    '#20202e',
    '#1b302c',
    '#30201e'
];

let currentColor = 0;

if (bgButton) {
    bgButton.onclick = function () {
        currentColor = (currentColor + 1) % colors.length;
        document.body.style.backgroundColor = colors[currentColor];
    };
}

const dateButton = document.getElementById('date');

if (dateButton) {
    dateButton.onclick = function () {
        alert(new Date().toLocaleDateString('ru-RU'));
    };
}

const pageTitle = document.title;

function updateClock() {
    const time = new Date().toLocaleTimeString('ru-RU');
    document.title = time + ' | ' + pageTitle;
}

updateClock();
setInterval(updateClock, 1000);