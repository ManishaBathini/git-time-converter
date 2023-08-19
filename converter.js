let hoursInputEl = document.getElementById("hoursInput");
let minutesInputEl = document.getElementById("minutesInput");
let timeInSeconds = document.getElementById("timeInSeconds");
let errorMsg = document.getElementById("errorMsg");
let convertBtnEl = document.getElementById("convertBtn");

function convertToSeconds(){
    let hours = parseInt(hoursInputEl.value);
    let minutes = parseInt(minutesInputEl.value);
    let timeInSec = hours * 3600 + minutes*60;
    
     
     timeInSeconds.textContent = timeInSec;
     timeInSeconds.classList.add("label-el");
     
     
}

convertBtnEl.addEventListener('click',function(){
    if (hoursInputEl.value===""){
        errorMsg.textContent="Please enter a valid number of hours.";
        timeInSeconds.textContent="";
        timeInSeconds.classList.remove("label-el");
        
    }else if(minutesInputEl.value===""){
        errorMsg.textContent="Please enter a valid number of minutes.";
        timeInSeconds.textContent="";
        timeInSeconds.classList.remove("label-el");
     
    }else{
        errorMsg.textContent="";
        convertToSeconds();
         
    }
});
 