// ********************************
let box=[
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0]
];
let ansbox=[
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0]
];

let ques = localStorage['question'];
let ans = localStorage['answer'];
var a=0;
for(var i=0;i<9;i++){
  for(var j=0;j<9;j++){
    box[i][j]=parseInt(ques[a]);
    ansbox[i][j]=parseInt(ans[a]);
    a+=2;
  }
}


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

// numbr input in box
// ************************


let rows = [0,0,0,0,0,0,0,0,0];
let cols = [0,0,0,0,0,0,0,0,0];
let grid = [[0,0,0],[0,0,0],[0,0,0]];

for (var i = 0; i < 9; i++) {
  for (var j = 0; j < 9; j++) {
  rows[i] |= (1 << box[i][j]);
  cols[j] |= (1 << box[i][j]);
  grid[(i/3)>>0][(j/3)>>0] |= (1 << box[i][j]);
  }
}

function updateRowsColsGridBox(num,i,j,val){
  rows[i] ^= (1<<num);
  cols[j] ^= (1<<num);
  grid[(i/3)>>0][(j/3)>>0] ^= (1<<num);
  box[i][j]=val;
}

const allButtons = document.querySelectorAll("input"); 
function solverStartHandler() {       
  solver = new Solver(allButtons,box,ansbox);
  solver.speed = 250 - 100;
}
allButtons.forEach((button)=>{
  button.addEventListener("change", (e)=>{
      var i=parseInt(e.composedPath()[0].id[0]);
      var j=parseInt(e.composedPath()[0].id[1]);
      
      if(!e.target.readOnly && e.target.value!=""){
          
          updateRowsColsGridBox(box[i][j],i,j,0);
         
          var num=parseInt(e.target.value);

          if((rows[i]&(1<<num))==0 && (cols[j]&(1<<num))==0 && (grid[(i/3)>>0][(j/3)>>0]&(1<<num))==0 )
          {
              document.getElementById(i+""+j).style.color="grey";
              updateRowsColsGridBox(num,i,j,num);
          }
          else{
              updateRowsColsGridBox(box[i][j],i,j,0);
              document.getElementById(i+""+j).style.color="red";
          }
          
      }else if(e.target.value==""){
          updateRowsColsGridBox(box[i][j],i,j,0);
      }

  })
})
// ************************
// ************************
// AnimationEffect



let currGridColoured=[];
let commonNumbersBox=[];
let rowConst=-1;
let colConst=-1;

// let backgroundColor = getComputedStyle(document.body).getPropertyValue('--cell-colour');

 
  allButtons.forEach((button)=>{
      button.addEventListener("click", (e)=>{

          if(rowConst!=-1)
          for(var i=0;i<currGridColoured.length;i++){
              currGridColoured[i].children[0].style.backgroundColor = "#edfff0";
              document.getElementById(rowConst+i).style.backgroundColor="#edfff0";
              document.getElementById(i+colConst).style.backgroundColor="#edfff0";
          }
          for(var i=0;i<commonNumbersBox.length;i++){
              commonNumbersBox[i].style.backgroundColor="#edfff0";
          }
          commonNumbersBox=[];
          currGridColoured=e.composedPath()[2].children;
          rowConst=e.composedPath()[0].id[0];
          colConst=e.composedPath()[0].id[1];
          for(var i=0;i<currGridColoured.length;i++){
              currGridColoured[i].children[0].style.backgroundColor="lightblue";
              document.getElementById(rowConst+i).style.backgroundColor="lightblue";
              document.getElementById(i+colConst).style.backgroundColor="lightblue";
          }
          
          document.getElementById(rowConst+colConst).style.backgroundColor="lightgrey";
          
          for(var a=0;a<9;a++){
              for(var b=0;b<9;b++){
                  if(parseInt(e.target.value)==box[a][b]){
                      const bb=document.getElementById(a+""+b);
                      bb.style.backgroundColor="lightgrey";
                      commonNumbersBox.push(bb);
                  }
              }
          }

      })
  })

  




  // ****************
 // theme selection code STARTS HERE!

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
            document.getElementById('pauseplay').className = "fa-solid fa-play";
        }else{
            stoptime = false;
            document.getElementById('pauseplay').className = "fa-sharp fa-solid fa-pause";
            timerCycle();
        }

    }

