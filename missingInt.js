/*

TASK DESCRIPTION

This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

*/


function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var B = [];
    
    for (let i = 0; i < A.length; i++) {
        if (A[i] > 0) {
            B[A[i]] = true;
        }
    }
    
    for (let i = 1; i <= B.length; i++) {
        if (!B[i]) {
            return i;
        }
    }
    return 1;
    
}