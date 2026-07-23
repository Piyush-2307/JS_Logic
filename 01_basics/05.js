const factorials = (num) => {
    let nums = 1;
    for (let i = 1; i <= num; i++) {
       nums *= i;
    }
    return nums; 
}
console.log(factorials(10));

const factorial = (num) => {
    let fact = 1
    for(let i = 1; i <= num; i++){
        fact *= i;
    }
    return fact;
}
console.log(factorial(4));