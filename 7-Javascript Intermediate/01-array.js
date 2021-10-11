// SOAL 1

const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];
function reverse(arr) {

  let result = arr.map( (element, index) => {
    return arr[arr.length-1-index]
    
  });

    return result;
}
const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);

//SOAL 2

const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(arr) { 
const total = arr.reduce(
  (prev, curr) => {
  return  prev + curr
})

const rata = total / arr.length;
const tampil = arr.filter(
  (element) =>{
    return element>rata
  }
)
return tampil.length;
 }

console.log(getAverage(arr1))
console.log(getAverage(arr2))

// SOAL 3

const arr = [
  [10],
  [9, 7, 1],
  [2, 8],
];

function searchInArray( arr, num ) { 
  let singleArr = [];
  for (row of arr) for (element of row) singleArr.push(element);
  
  const foundIndex = singleArr.findIndex(
  (element) =>{
    return element===num
  }
)
if (foundIndex<0){
  return null;
}
return foundIndex;
   }


console.log(searchInArray(arr, 3));
console.log(searchInArray(arr, 2));
console.log(searchInArray(arr, 4));
console.log(searchInArray(arr, 8));
