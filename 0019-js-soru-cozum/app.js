//! function countPositivesSumNegatives(input) {
//     let arr=[]
    
//  let sıfır=input.filter((item)=>item=0)
//  let abc=input.filter((item)=>item>0)
//  let total=abc.length
//  arr.push(total)
//  let x= input.filter((item)=>item<0).reduce((toplam,item)=>toplam + item,0)
//  arr.push(x)
//    return arr
//  }
//  console.log(countPositivesSumNegatives([ 0,4,0,2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -5]))



//***************** */
// function persistence(num) {
// let arr=[];
//     for(let i=0;i>9;i++){
//    let çarpılmış= num.toString().split("").reduce((a,b)=>a*b,0)
// arr.push(çarpılmış)
// r
//     }

// console.log(arr)
// return arr;

//  }
//  console.log(persistence(39));



//  function persistence(num)
// {
//   for ( var i = 0; num > 9; i++)
//   {
//     num = num.toString().split("").reduce((a,b) => a * b);
//   }
//   return i;
// }
// console.log(persistence(39));





// function persistence(num) {
//     let count = 0;
//     while (num > 9) {
//       num = num.toString().split("").reduce((a, b) => a * b);
//       count++;
//     }
//     return count;
//   }
//   console.log(persistence(99));

//************************** */

// function longestConsec(strarr, k) {
//     if(!strarr){
//         return ""
//     }
//     let arr = [];
//     let b = 0;
//     let uzun =[];
//  for(let i=0;i<strarr.length;i++){
//    let a = strarr.slice(i,i+k).join("");
  
//    if(a>arr){
//     console.log("aaaaaa")
//      arr.push(b)
//      console.log(arr)
//      uzun.push(uzun)
//      console.log(uzun)
//     }
//  }
//  console.log(b)

//   return uzun

// }
// console.log(longestConsec(["l","tarik","wlw"], 2))




// function longestConsec(strarr, k) {
//     if (strarr.length === 0 || k > strarr.length || k <= 0) return "";
//     let result = '';
//     for (let i = 0; i <= strarr.length - k; i++) {
//       let str = '';
//       for (let j = i; j < i + k; j++) {
//         str += strarr[j];
//       }
//       if (result.length < str.length) {
//         result = str;
//       }
//     }
//     return result;
//   }
//   console.log(longestConsec(["tarik","meltem","cansu"], 2))


