L = [6,7,4,10,3,8,1,9,5,2]
 
// Sort the list in ascending order
for(let i=0; i<L.length; i++) {
    for(let j=0; j<L.length; j++) {
        if(L[i] < L[j]) {
            let temp = L[i]
            L[i] = L[j]
            L[j] = temp
        }
    }
}
console.log(L)
// Compare function in ascending order
L = [6,7,4,10,3,8,1,9,5,2]
function comp(a,b) {
    return a-b
}
 
L.sort(comp)
 
console.log(L)

// Arrow function in descending order

L.sort((a,b) => b-a)
console.log(L)

