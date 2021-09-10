
let numero = 0;

function multiplicar(){

    numero =  parseInt(document.getElementById("numero").value);
    var resposta = document.getElementById('resposta');

    
    let tabuada = ''
      for(let i=0; i<=10; i++){
        
        result = i*numero;
        tabuada += numero + ' x '+ i + ' =  '+ result +'<br/>';
       // console.log(`${numero} x ${i}  = ${resposta}`)
       // console.log(tabuada)
      
        resposta.innerHTML = tabuada;
        

    }
  
 

   

}



