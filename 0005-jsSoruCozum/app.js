
// function mergeArrays(arr1, arr2) {
// let arr= []

// let kucuk = 1

// for(let i=0 ; i<arr1.length+arr2.length;i++){
//    if(arr1[i]<kucuk){
//     kucuk = arr1[i]
//    }else if(arr[i]>kucuk){
//         kucuk=arr1[i];

//    }

// }
// arr.push(kucuk);

// console.log(arr);

// return  arr;

// }
// console.log(mergeArrays(arr1,arr2))
// let arr1 = [1, 3, 5, 2, 8];
// let arr2 = [1, 6, 5, 9, 8];

// function mergeArrays(arr1, arr2) {
//   let arr = arr1.concat(arr2).sort((a, b) => a-b);
//   let result = [];
  

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(mergeArrays(arr1,arr2))

// ------------------
// function mergeArrays(arr1, arr2) {
//   let res = [];
//   arr1.concat(arr2).forEach((el) => (!res.includes(el) ? res.push(el) : 0));
//   return res.sort((a, b) => a - b);
// }


// function quadratic(x1, x2) {

//  let a=1
// let islem1= -x1-x2
// let islem2 = x1*x2
// return [1,islem1,islem2];
  
// }

// console.log(quadratic(2, ));

// --------------



// function remove(string) {

//    string.split();
//     console.log(typeof string)

//     if(string.length-1 == "!" ){
        

        
       
       

//     }
   
//  return string ;


// } 
// console.log(remove(["hi!!!"]));
// function remove(s) {
//   if (s[s.length - 1] == "!") {
//     return s.split("").slice(0, s.split("").length - 1).join("");
//   } else {
//     return s;
//   }
// }
// ---------


// function grow(x){
// let sayac=1
// for(let i=0;i<x.length; i++){
//     sayac=x[i]*sayac
// }
// return sayac;
  
// }
// console.log(grow(x));

// const grow = (x) => x.reduce((a, b) =>Math.trunc(a % b) );
// console.log(grow([1,3,5,3,9]))

// --------------