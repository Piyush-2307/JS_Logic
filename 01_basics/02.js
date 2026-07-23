let checkIfEvenOrOdd = (num) => {
    //     if(num % 2 == 0){
    //     return "It is even";
    // }else{
    //     return "It is odd";
    // }
    return num % 2 == 0 ? "even" : "odd"
}
console.log(checkIfEvenOrOdd(-1));
 
let minNum = (a, b, c) => {
    if (a < b && a < c) {
        return `${a} is the smallest`
    } else if (b < a && b < c) {
        return `${b} is the smallest`
        
    } else if (c < a && c < b ) {
        return `${c} is the smallest`
    }

    let smallestNum = a
    if(b < smallestNum){
        smallestNum = b
    }else if(c < smallestNum){
        smallestNum = c
    }
    return smallestNum;
}
console.log(minNum(12, 25, 11));

let arr = [23, 5, 4, 122, 1]
let arr2 = arr.sort()
console.log("Smallest num:", arr2[0]);
