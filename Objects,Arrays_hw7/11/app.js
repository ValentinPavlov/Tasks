const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const value = 5;
const count = Math.ceil(arr.length / value)  // 3
let newArr = [];
let rez = []; // [[1, 2, 3, 4]]
for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
    if (newArr.length === value) {
        rez.push(newArr);
        newArr = [];
    } else if (rez.length + 1 === count) rez.push(newArr); // [5, 6]
}
console.log(rez)
