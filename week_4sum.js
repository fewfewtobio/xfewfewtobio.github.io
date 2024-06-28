
// L = [1,2,3,4,5,6,7,8,9,10]
 
// let sum = 0
// for(let i=0; i<L.length; i++) {
//     sum += L[i]
// }
 
// console.log('Loop',sum)
 
// // Normal function
// function add(acc,cur) {
//     return acc + cur
// }
 
// sum = L.reduce(add)
 
// console.log('Reducer',sum)
 
// // Arrow (annoymous) function
// sum = L.reduce((acc,cur) => acc + cur)
// console.log("Arrow",sum)
 
//Modify reduce to find multiplication of all elements

M = [1,2,3,4,5,6,7,8,9,10]
 
let mul = 0
for(let i=0; i<M.length; i++) {
    mul *= M[i]
}
 
console.log('Loop',mul)
 
// Normal function
function multi(acc,cur) {
    return acc * cur
}
 
multi = M.reduce(multi)
 
console.log('Reducer',mul)
 
// Arrow (annoymous) function
mul = M.reduce((acc,cur) => acc + cur)
console.log("Arrow",mul)