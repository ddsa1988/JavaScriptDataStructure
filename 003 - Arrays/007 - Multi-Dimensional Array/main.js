"use strict";

const matrix = [];
const dimension = 3;

for (let i = 0; i < dimension; i++) {
    matrix[i] = [];
    for (let j = 0; j < dimension; j++) {
        matrix[i][j] = [];
        for (let k = 0; k < dimension; k++) {
            matrix[i][j][k] = i + j + k;
        }
    }
}

console.log(matrix);
