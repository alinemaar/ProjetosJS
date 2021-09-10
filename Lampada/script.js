/* ligar e desligar a lampada conforme a ação do botão , ou passar o mouse e o objeto desligar,
 quebrando não faz as ações ,só se recarregar a pagina, ao clicar duas vezes quebra*/


const turnOn  =  document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp    = document.getElementById('lamp');
const newLampada =  document.getElementById('novaLampada');
// ao clicar aqui ,chama a função ligar 



function ligar(){
    if(!isQuebrada()){
        lamp.src = "./Images/ligada.jpg";
    }
    
}


function desligar(){
    if(!isQuebrada()){
         lamp.src = "./Images/desligada.jpg";
    }
}


function quebrar(){
    lamp.src = "./Images/quebrada.jpg";
}


function isQuebrada(){
    return lamp.src.indexOf('quebrada') > -1
}

function novaLampada(){
    lamp.src = "./Images/desligada.jpg";
}


turnOn.addEventListener('click',ligar);
turnOff.addEventListener('click',desligar);
lamp.addEventListener('mouseover',ligar);
lamp.addEventListener('mouseleave',desligar);
lamp.addEventListener('dblclick',quebrar);
newLampada.addEventListener('click',novaLampada);

