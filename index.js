let count=0;
function solveSudoku(arr,rows,cols,grid,i,j){
    if(i==arr.length){
        passValue(arr);
        count++;
        return;
    }
      
    if(arr[i][j]>0){
        if(count==0)
        solveSudoku(arr,rows,cols,grid,j==arr.length-1?i+1:i, j==arr.length-1?0:j+1);
    }else{
        if(count==0)
        for(var n=1;n<=9;n++){
            let num = Math.floor((Math.random() * 9) + 1);
            if(
                (rows[i]&(1<<num))==0 &&
                (cols[j]&(1<<num))==0 &&
                (grid[(i/3)>>0][(j/3)>>0]&(1<<num))==0
               ){
                    arr[i][j]=num;
                    rows[i] ^= (1<<num);
                    cols[j] ^= (1<<num);
                    grid[(i/3)>>0][(j/3)>>0] ^= (1<<num);
                    solveSudoku(arr,rows,cols,grid,j==arr.length-1?i+1:i, j==arr.length-1?0:j+1);
                    arr[i][j]=0;
                    rows[i] ^= (1<<num);
                    cols[j] ^= (1<<num);
                    grid[(i/3)>>0][(j/3)>>0] ^= (1<<num);
                }
        }
        
    }
}


let box=[
    [0, 0 ,0 ,0 ,0, 0, 0, 0, 0],
    [0 ,0, 0, 0, 0, 0 ,0, 0, 0],
    [0 ,0, 0, 0, 0, 0 ,0 ,0 ,0],
    [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0, 0],
    [0 ,0 ,0, 0, 0, 0, 0, 0, 0],
    [0 ,0, 0, 0, 0 ,0 ,0 ,0, 0],
    [0 ,0, 0, 0, 0, 0, 0 ,0, 0],
    [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0],
    [0 ,0, 0, 0, 0, 0, 0, 0, 0]
];

var rows = [0,0,0,0,0,0,0,0,0];
var cols = [0,0,0,0,0,0,0,0,0];
var grid = [[0,0,0],[0,0,0],[0,0,0]];

solveSudoku(box, rows, cols, grid, 0, 0);

function passValue(arr){
    localStorage.setItem('answer',arr);
    for(var i=0;i<9;i++){
        for(var j=0;j<9;j++){
            let num = Math.floor((Math.random() * 2) + 1);
            if(num==1){
                arr[i][j]=0;
            }
        }
    }
    localStorage.setItem('question',arr);
}

