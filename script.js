
let hour = 0;
let minute = 0;
let second = 0;
let milli = 0;
let timer = false;

function start(){
    timer = true;
    stopWatch();
}
function stop(){
    timer = false;
}

function reset(){
    timer = false;

    hour = 0;
    minute = 0;
    second = 0;
    milli = 0;
    document.getElementById("milli").innerHTML="00";

    document.getElementById("hr").innerHTML="00";

    document.getElementById("min").innerHTML="00";

    document.getElementById("sec").innerHTML="00";
    
}

let hr = hour;
let min = minute;
let sec = second;
let mil = milli;

if(milli < 10){
    mil = "0"+ mil;
}

if(second < 10){
    sec = "0"+ sec;
}

if(minute < 10){
    min = "0"+ min;
}

if(hour < 10){
    hr = "0"+ hr;
}




function stopWatch(){

    if(timer == true){
        setTimeout("stopWatch()",10)

        milli = milli+1;
    }

    if(milli == 100){
        milli = 0;
        second =second+1
    }

    if(second == 60){
        second = 0;
        minute =minute+1
    }

    if(minute == 60){
        minute = 0;
        hour =minute+1
    }

    let hr = hour;
    let min = minute;
    let sec = second;
    let mil = milli;

    if(milli < 10){
    mil = "0" + mil;
    }

    if(second < 10){
        sec = "0" + sec;
    }

    if(minute < 10){
        min = "0" + min;
    }

    if(hour < 10){
    hr = "0" + hr;
}
    document.getElementById("milli").innerHTML=mil;

    document.getElementById("sec").innerHTML=sec;

    document.getElementById("min").innerHTML=min;

    document.getElementById("hr").innerHTML=hr;

}