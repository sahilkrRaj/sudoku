// ********************************
// value filling in cell box
let box=[
    [3, 0 ,6 ,5 ,0, 8, 4, 0, 0],
    [5 ,2, 0, 0, 0, 0 ,0, 0, 0],
    [0 ,8, 7, 0, 0, 0 ,0 ,3 ,1],
    [0 ,0 ,3 ,0 ,1 ,0 ,0 ,8, 0],
    [9 ,0 ,0, 8, 6, 3, 0, 0, 5],
    [0 ,5, 0, 0, 9 ,0 ,6 ,0, 0],
    [1 ,3, 0, 0, 0, 0, 2 ,5, 0],
    [0 ,0 ,0 ,0 ,0 ,0 ,0 ,7 ,4],
    [0 ,0, 5, 2, 0, 6, 3, 0, 0]
];

for(var i=0;i<9;i++){
    for(var j=0;j<9;j++){
        if(box[i][j]!=0){
            document.getElementById(i+""+j).value=box[i][j];
            document.getElementById(i+""+j).setAttribute('readonly', true);
            
        }
        else{
            document.getElementById(i+""+j).style.color="grey";
        }
        
    }
}


  // ****************
 // theme selection code ENDS HERE!

function initThemeSelector() {
    const themeSelect = document.getElementById("themeSelect");
    const themeStylesheetLink = document.getElementById("themeStylesheetlink");

    function activateTheme(themeName){
        themeStylesheetLink.setAttribute("href",`theme/${themeName}.css`);
    }

    themeSelect.addEventListener("change", ( ) => {
     
        activateTheme(themeSelect.value);
    })

}
initThemeSelector();


        // ****************
        // timer and its functions STARTS!

const showtime = document.getElementById("time");
showtime.innerText="00:00";

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = false;


function timerCycle() {
    if (stoptime == false) {
      sec = parseInt(sec);
      min = parseInt(min);
      hr = parseInt(hr);
  
      sec = sec + 1;
  
      if (sec == 60) {
        min = min + 1;
        sec = 0;
      }
      if (min == 60) {
        hr = hr + 1;
        min = 0;
        sec = 0;
      }
  
      if (sec < 10 ) {
        sec = "0" + sec;
      }
      if (min < 10 ) {
        min = "0" + min;
      }
      if (hr < 10 ) {
        hr = "0" + hr;
      }
  
      showtime.innerHTML = hr + ":" + min + ":" + sec;
   
      setTimeout("timerCycle()", 1000);
    }
  }
 
  timerCycle();
    function toggleTimer(){
        console.log("working");
        if(!stoptime){
            stoptime = true;
        }else{
            stoptime = false;
            timerCycle();
        }
    }

