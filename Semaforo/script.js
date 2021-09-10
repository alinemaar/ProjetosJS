const img = document.getElementById('semaforo');
const buttons = document.getElementById('buttons');
let colorIndex = 0;

const trafficlight = (event) => {
    turnOn[event.target.id]();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;
const changecolor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex]
    turnOn[color]();
    nextIndex();
}


const stopAuto = () => {
    clearInterval(intervalId)
}

const turnOn = {
    'red': () => img.src = "Images/vermelho.png",
    'yellow': () => img.src = "Images/amarelo.png",
    'green': () => img.src = "Images/verde.png",
    'auto': () => intervalId = setInterval(changecolor, 1000)
}



buttons.addEventListener('click', trafficlight);