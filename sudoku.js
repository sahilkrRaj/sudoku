function solveSudoku(arr,rows,cols,grid,i,j){
    if(i==arr.length){
        console.log(arr);
        console.log(rows);
        return;
    }
        
    if(arr[i][j]>0){
        solveSudoku(arr,rows,cols,grid,j==arr.length-1?i+1:i, j==arr.length-1?0:j+1);
    }else{
        
        for(var num=1;num<=9;num++){
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





var rows = [0,0,0,0,0,0,0,0,0];
var cols = [0,0,0,0,0,0,0,0,0];
var grid = [[0,0,0],[0,0,0],[0,0,0]];

for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
    rows[i] |= (1 << box[i][j]);
    cols[j] |= (1 << box[i][j]);
    grid[(i/3)>>0][(j/3)>>0] |= (1 << box[i][j]);
    }
}

solveSudoku(box, rows, cols, grid, 0, 0);