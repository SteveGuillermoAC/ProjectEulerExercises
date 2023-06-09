/**
 * Multiples of 3 or 5
*
Problem 1
*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
*
Find the sum of all the multiples of 3 or 5 below 1000.
 */
let evalNum=2000;
function sumOfMutiples(limit){

    let sum = 0
    
    for (let i =1; i< limit; i++){
        if (i % 3 ==0 || i% 5==0){
            sum+=1;
        }
    }
    return sum;
}
const result = sumOfMutiples(evalNum);
console.log(result)