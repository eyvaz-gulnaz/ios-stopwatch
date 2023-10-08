var lapButton = document.querySelector(".left-button")
var start = document.querySelector(".right-button")
var laps = document.querySelector(".laps")
var time =document.querySelector(".time")
var saniye =document.querySelector(".saniye")
var deqiqe =document.querySelector(".deqiqe")
var mlsaniye =document.querySelector(".mlsaniye")
var saniyeArtir = 0
var deqiqeArtir = 0
var mlsaniyeArtir = 0
var num = 0;
var intervalStart = false;
var interval

function startNewLap(){
    mlsaniyeArtir++
    if(mlsaniyeArtir<10){
        mlsaniye.textContent="0" + mlsaniyeArtir;
    } else{
        mlsaniye.textContent=mlsaniyeArtir;
    }
    if(mlsaniyeArtir==99){
        saniyeArtir++
        if(saniyeArtir<10){
        saniye.textContent="0" + saniyeArtir;
    } else{
        saniye.textContent=saniyeArtir;
    }
        mlsaniyeArtir=0
    }
    if(saniyeArtir==60){
        deqiqeArtir++
        if(deqiqeArtir<10){
        deqiqe.textContent="0" + deqiqeArtir;
    } else{
        deqiqe.textContent=deqiqeArtir;
    }
        saniyeArtir=0
    }
}

start.onclick = function(){
    if(intervalStart == false){
        interval = setInterval(startNewLap,10)
        this.innerText = "Stop"
        this.style.backgroundColor = "#340E0B"
        this.style.color = "#BC3D43"
        lapButton.innerText = "Lap"
        intervalStart = true
    }
    else{
    clearInterval(interval)
    this.innerText  = "Start"
    this.style.backgroundColor = "#092911"
    this.style.color = "#176427"
    lapButton.innerText = "Reset"
    intervalStart = false
    
}
    }

    lapButton.onclick = function(){
        if(this.innerText ==="Lap"){
            num++
        var kruqi = document.createElement('li')
        var kruq = document.createElement("span")
        kruq.innerText = time.innerText
        kruqi.innerText = "Lap " + num
        kruqi.append(kruq)
        laps.prepend(kruqi)
        }
        else if(this.innerText === "Reset"){
            laps.innerText = ""
            saniyeArtir = 0
            deqiqeArtir = 0
            mlsaniyeArtir = 0
            num = 0;
            mlsaniye.textContent="0" + mlsaniyeArtir;
            saniye.textContent="0"+ saniyeArtir;
            deqiqe.textContent="0" + deqiqeArtir;
        }
        
    }

