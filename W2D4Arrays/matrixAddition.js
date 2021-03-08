"use strict";

let firstMatrix = [[0, 1, 2], [9, 8, 7]];
let secondMatrix = [[6, 5, 4], [3, 4, 5]];

let sum = [[], []];

    for(let i = 0; i < firstMatrix.length; i++){
        for(let j = 0; j < secondMatrix[i].length; j++){
            sum[i][j] = firstMatrix[i][j] + secondMatrix[i][j];
              
        }
        
    }
    console.log(sum);