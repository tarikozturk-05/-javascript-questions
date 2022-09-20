// !findAverage = (array) =>
//   array.length == 0 ? 0 : array.reduce((x, y) => x + y) / array.length;

// ***************


// ısogram = (a)=>{
//     // let arr = [a]
//     let splitt = a.split("");
//     console.log(splitt)
    
//     for(let i=0 ;i<a.length ;i++){


//     }


// }
// console.log(ısogram("abcdef"))
//! **********
// function isIsogram(a) {
//   b = a.toLowerCase().split("").sort();
//   console.log(b);
//   for (var i = 0; i < b.length - 1; i++) {
//     if (b[i] == b[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isIsogram("Meltm"));

// ****************


//  uniqueInOrder = (iterable) =>
//    [...iterable].filter((value, index, array) => value != array[index + 1]);
// ***********
// function findMissingLetter(array) {
//   let first = array[0].charCodeAt(0);
//   for (let i = 0; i < array.length; i++) {
//     if (first + i !== array[i].charCodeAt(0)) {
//       return String.fromCharCode(first + i);
//     }
//   }
// }