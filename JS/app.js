let result = document.getElementById('result')
hr = 0
min = 0
sec = 0

disSEC = 0
disMIN = 0
disHR = 0

let strtBTN = ()=>{
    let start = document.getElementById('start')
    myVar = setInterval(()=>{
        sec++
        if(sec==60){
            sec = 0
            min++
        }
        if(min==60){
            min = 0
            hr++
        }
        if(sec < 10){
            disSEC = '0' + sec.toString()
        }else{
            disSEC = sec
        }
        if(min < 10){
            disMIN = '0' + min.toString()
        }else{
            disMIN = min
        }
        if(hr < 10){
            disHR = '0' + hr.toString()
        }else{
            disHR = hr
        }
        result.innerHTML = `${disHR}:${disMIN}:${disSEC}`
        
    },1000)
    
}

let restBTN =()=>{
    hr = 0
    min = 0
    sec = 0
    clearTimeOut(myVar)
    result.innerHTML = `0${hr}:0${min}:0${sec}`
}




