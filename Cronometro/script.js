


let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;




function start(){
    pause();
    cron =setInterval( () => {timer();},10)
}

function pause(){
    clearInterval(cron);

}

function reseta(){
    
    let hour = 0;
    let minute = 0;
    let second = 0;
    let millisecond = 0;

    document.getElementById('hour').innerText = '00';
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
    document.getElementById('millisecond').innerText = '000';
  
 
}

function timer(){
    if((millisecond+=10) == 1000){
        millisecond = 0;
        second++;
    }

    if(second == 60){
        second = 0;
        minute++;
    }

    if(minute == 60){
        minute = 0;
        hora++;
    }

  
    document.getElementById('hour').innerText = hour;
    document.getElementById('minute').innerText = minute;
    document.getElementById('second').innerText = second;
    document.getElementById('millisecond').innerText = millisecond;

}

function returnData(input){
    return input > 10 ? input : `0${input}`
}