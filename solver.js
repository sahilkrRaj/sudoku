class Solver {

    speed = 200;  
    inputs=[];
    arr=[];
    ansarr=[];
    rows = [0,0,0,0,0,0,0,0,0];
    cols = [0,0,0,0,0,0,0,0,0];
    grid = [[0,0,0],[0,0,0],[0,0,0]];
    

    constructor(_board,_arr,_ansarr) {
            this.inputs=Array.from(_board);
            this.arr=_arr;
            this.ansarr=_ansarr;
            this.inputs.sort(function(a, b){
                return parseInt(a.getAttribute("id"))-parseInt(b.getAttribute("id"));
            });
            
            // for (var i = 0; i < 9; i++) {
            //     for (var j = 0; j < 9; j++) {
            //         this.rows[i] |= (1 << this.arr[i][j]);
            //         this.cols[j] |= (1 << this.arr[i][j]);
            //         this.grid[(i/3)>>0][(j/3)>>0] |= (1 << this.arr[i][j]);
            //     }
            // }  

            // this.solveSudoku(0,0);
            // this.s(1);
            // console.log(this.ansarr);
            // console.log(this.inputs);
            // this.inputs[0].click();
            this.solve();
    }

    // async solveSudoku(i,j){
    //     if(i==9){
    //         return;
    //     }
            
    //     if(this.arr[i][j]>0){
    //         this.solveSudoku(j < 8 ? i : i + 1, j < 8 ? j + 1 : 0);
    //     }else{
            
    //         for(num=1;num<=9;num++){
    //             if(
    //                 (this.rows[i]&(1<<num))==0 &&
    //                 (this.cols[j]&(1<<num))==0 &&
    //                 (this.grid[(i/3)>>0][(j/3)>>0]&(1<<num))==0
    //                ){
    //                     this.arr[i][j]=num;
    //                     this.rows[i] ^= (1<<num);
    //                     this.cols[j] ^= (1<<num);
    //                     this.grid[(i/3)>>0][(j/3)>>0] ^= (1<<num);
    //                     this.solveSudoku(j < 8 ? i : i + 1, j < 8 ? j + 1 : 0);
    //                     this.arr[i][j]=0;
    //                     this.rows[i] ^= (1<<num);
    //                     this.cols[j] ^= (1<<num);
    //                     this.grid[(i/3)>>0][(j/3)>>0] ^= (1<<num);
    //                 }
    //         }
            
    //     }
    // }






    // async s(n){
    //     if(n<0){
    //         console.log(this.arr[0][0]>0);
    //         return;
    //     }
    //     this.s(n-1);
    // }

//     async startSolving(i,j){
        
//             if(i==9){
//                 console.log(this.arr);
//                 return;
//             }
                
//             if(this.arr[i][j]>0){
//                 this.startSolving(j < 8 ? i : i + 1, j < 8 ? j + 1 : 0);
//             }else{
                
//                 for(var num=1;num<=9;num++){
//                     if(
//                         (this.rows[i]&(1<<num))==0 &&
//                         (this.cols[j]&(1<<num))==0 &&
//                         (this.grid[(i/3)>>0][(j/3)>>0]&(1<<num))==0
//                        ){
//                             this.arr[i][j]=num;
//                             this.rows[i] ^= (1<<num);
//                             this.cols[j] ^= (1<<num);
//                             this.grid[(i/3)>>0][(j/3)>>0] ^= (1<<num);
//                             // inputs[i][j].click();
//                             // inputs[i][j].value=num;
//                             this.startSolving(j < 8 ? i : i + 1, j < 8 ? j + 1 : 0);
//                             this.arr[i][j]=0;
//                             this.rows[i] ^= (1<<num);
//                             this.cols[j] ^= (1<<num);
//                             this.grid[(i/3)>>0][(j/3)>>0] ^= (1<<num);
//                             // inputs[i][j].value="";
//                         }
//                 }
                
//             }
//     }


//     async solve(){
        

// function solveSudoku(arr,rows,cols,grid,i,j){
//     if(i==arr.length){
//         console.log(arr);
//         return;
//     }
        
//     if(arr[i][j]>0){
//         solveSudoku(arr,rows,cols,grid,j==arr.length-1?i+1:i, j==arr.length-1?0:j+1);
//     }else{
        
//         for(var num=1;num<=9;num++){
//             if(
//                 (rows[i]&(1<<num))==0 &&
//                 (cols[j]&(1<<num))==0 &&
//                 (grid[(i/3)>>0][(j/3)>>0]&(1<<num))==0
//                ){
//                     arr[i][j]=num;
//                     rows[i] ^= (1<<num);
//                     cols[j] ^= (1<<num);
//                     grid[(i/3)>>0][(j/3)>>0] ^= (1<<num);
//                     solveSudoku(arr,rows,cols,grid,j==arr.length-1?i+1:i, j==arr.length-1?0:j+1);
//                     arr[i][j]=0;
//                     rows[i] ^= (1<<num);
//                     cols[j] ^= (1<<num);
//                     grid[(i/3)>>0][(j/3)>>0] ^= (1<<num);
//                 }
//         }
        
//     }
// }


// let box=[
//         [3, 0 ,6 ,5 ,0, 8, 4, 0, 0],
//         [5 ,2, 0, 0, 0, 0 ,0, 0, 0],
//         [0 ,8, 7, 0, 0, 0 ,0 ,3 ,1],
//         [0 ,0 ,3 ,0 ,1 ,0 ,0 ,8, 0],
//         [9 ,0 ,0, 8, 6, 3, 0, 0, 5],
//         [0 ,5, 0, 0, 9 ,0 ,6 ,0, 0],
//         [1 ,3, 0, 0, 0, 0, 2 ,5, 0],
//         [0 ,0 ,0 ,0 ,0 ,0 ,0 ,7 ,4],
//         [0 ,0, 5, 2, 0, 6, 3, 0, 0]
//     ];





// var rows = [0,0,0,0,0,0,0,0,0];
// var cols = [0,0,0,0,0,0,0,0,0];
// var grid = [[0,0,0],[0,0,0],[0,0,0]];

// for (var i = 0; i < 9; i++) {
//     for (var j = 0; j < 9; j++) {
//         rows[i] |= (1 << box[i][j]);
//         cols[j] |= (1 << box[i][j]);
//         grid[(i/3)>>0][(j/3)>>0] |= (1 << box[i][j]);
//     }
// }

// solveSudoku(box, rows, cols, grid, 0, 0);
//     }
        
        


    

    async solve(){
        var count=0;
        for(var i=0;i<9;i++){
            for(var j=0;j<9;j++){
                
                    this.inputs[count].click();
                    await sleep(500);
                    this.inputs[count].value=this.ansarr[i][j];
                    
                count++;
            }
        }
    }
    
    //################################ back tracking START
    

}