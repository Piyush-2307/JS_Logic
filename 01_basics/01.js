console.log("Hello World");

let a = 23 ;
let b = 7 ;
console.log(a + b);

const add = (a,b) => {
    let total = a + b;
    return total;
};
console.log(add(23,7));

const area = (l,b) => {
    if (l <= 0) {
        throw new RangeError("Length should be a positive num ")
    }
    if (b <= 0) {
        throw new RangeError("Breath should be a positive num ")
    }
    let ans = l * b;
    return ans;
};
console.log(area(15,20));
console.log(area(15,-20));
console.log(area(-15,20));

