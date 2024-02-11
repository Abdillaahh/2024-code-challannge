// function grow(x){
//     let result = x[0];
//     for (let i = 1; i < x.length; i++ ) {
//         result *= x[i];
//     
//     return result;
// }

// console.log(grow([1, 2, 3, 4]));

// const grow = x => x.reduce((a,b) => a*b);

const grow = x => eval(x.join('*'))

console.log(grow([2, 4, 5]));