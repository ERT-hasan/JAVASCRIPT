console.log('diffrence method of array');
let arr = [1,2,3,4,5,6,7,8,9];
let arr1 = [2,3,4,5,6,7,8,9,1];
//  concatation
let arr2 = arr.concat(arr1);
console.log('contation', arr2);
arr2.push(100);
console.log('arrayprint:',arr2);
arr2.pop();
console.log('arrayprint:',arr2);


//  copywithin

const array1 = ['a', 'b', 'c', 'd', 'e'];

// Copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]

const array2 = [4, 5, 6, 7, 9, 99];

console.log(array2.copyWithin(1, 3, 5));


// sort

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array3 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array3);
// Expected output: Array [1, 100000, 21, 30, 4]


const numbers = [1,2,3,4,5,6];
const index =numbers.indexOf(2);
console.log("index of 3:", index);

let arr8 = [1, 2, 3, 4, 5];

console.log(arr8.copyWithin(0,3));
// Output: [4, 5, 3, 4, 5]
// Explanation:
// - Starting from index 3, it copies `[4, 5]`.
// - Overwrites the array starting at index 0.

