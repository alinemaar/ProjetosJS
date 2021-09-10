const incrementar = document.getElementById('increase')
const decrementar = document.getElementById('decrease')
const resetar = document.getElementById('resetar')

let valor = 0;


function adicionar() {

    valor++;
    if (valor > 0) {
        value.style.color = "green";
    }
    document.getElementById('value').innerText = valor;
}


function reseta() {
    valor = 0;
    if (valor == 0) {
        value.style.color = "black";
    }
    document.getElementById('value').innerText = valor;
}


function diminuir() {
    valor--;
    if (valor < 0) {
        value.style.color = "red"
    }

    document.getElementById('value').innerText = valor;
}

incrementar.addEventListener('click', adicionar)
resetar.addEventListener('click', reseta)
decrementar.addEventListener('click', diminuir)