/**
 * Largest prime factor
Problem 3
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
 */
let evalNum=600851475143;
function isPrime(num){
    if(num <=1){
        return false;
    }
    for (let i=2,sqrt =Math.sqrt(num);i<=sqrt;i++){
        if(num % i===0){
            return false;
        }
    }
    return num !==1;
}
function largestPrimeFactor(number){
    let largestFactor=1;
    for(let i=2;i<=Math.sqrt(number);i++){
        if(number% i===0 && isPrime(i)){
            largestFactor = Math.max(largestFactor,i);
            let otherFactor = number / i;
            if(isPrime(otherFactor)){
                largestFactor=Math.max(largestFactor,otherFactor);
            }
        }
    }
    return largestFactor;
}
const result = largestPrimeFactor(evalNum);
console.log(result)