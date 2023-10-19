var hourHeading = document.getElementById("hourHeading")
var minHeading = document.getElementById("minHeading")
var secHeading = document.getElementById("secHeading")
var msecHeading = document.getElementById("msecHeading")

var hour = 0
var min = 0
var sec = 0
var msec = 0
var interval;

function timer(){
    msec++;
    msecHeading.innerHTML = msec
    if(msec>=100){
        sec++;
        secHeading.innerHTML= sec + ":"
        msec=0;
      }
       
      else if(sec>=60){
        min++;
        minHeading.innerHTML = min + ":"
        sec = 0;
     }
      else if(min>=60)
      {
        hour++;
        hourHeading.innerHTML = hour + ":"
        min = 0;
      }
}
function Start(){
      var start = document.getElementById("startbtn")
     interval = setInterval(timer,10)
     start.disabled = true 
}

function Pause(){
  var start = document.getElementById("startbtn")
    clearInterval(interval)
    start.disabled = false
    
}

function Reset(){
    var hour = 0
    var min = 0
    var sec = 0
    var msec = 0
    hourHeading.innerHTML = hour + ":"
    minHeading.innerHTML = min + ":"
    secHeading.innerHTML = min + ":"
    msecHeading.innerHTML = min 

    Pause()
    

}