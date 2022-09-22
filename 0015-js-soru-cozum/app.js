// function splitTheBill(x) {
    


// // let arr = Object.values(x);
// // let key =Object.keys(x).join("")

// // console.log(key[2])
// // console.log(arr)
// // let toplam = arr.reduce((x,y)=> x+y,0)
// // let bolum = toplam /arr.length;
// // a = arr[0] - bolum;
// // b = arr[1]- bolum;
// // c = arr[2]- bolum;



// }

// console.log(splitTheBill({A: 20, B: 15, C: 10}));

// , key[1]:b ,key[2]:c



// function splitTheBill(obj) {
//   //find the total
//   console.log(Object.keys(obj));
//   var total = 0;
//   Object.keys(obj).forEach(function (key) {
//     total += obj[key];
//   });

//   //find the average
//   var average = total / Object.keys(obj).length;

//   //now do the splitting
//   var result = {};
//   Object.keys(obj).forEach(function (key) {
//     result[key]=  obj[key]-average ;
//   });

//   return result;
// }
// console.log(splitTheBill({A: 10, B: 15, C: 10}));



//! const splitTheBill = (x) => {
//   const avg =
//     Object.values(x).reduce((r, e) => r + e, 0) / Object.values(x).length;
//   for (let key in x) x[key] = +(x[key] - avg).toFixed(2);
//   return x;
// };



// ****************

// ?const orderedCount = function (text) {
//     let textArr=text.split("");
//     let a=[]
    
//     let sort= textArr.sort()
//     for(let i=0;i<text.length;i++){
//         if(sort[i]!==sort[i +1]){
       
//          let text1 = sort.filter((x)=> x==sort[i]).length
//           a.push([`${sort[i]}`, text1]);
          
//         }
//     }
//   return [a];
// };
// console.log(orderedCount("abraca dabra"));


// function orderedCount(str) {
//   let result = [];
//   for (let i = 0; i < str.length; i++) {
//     let count = 0;
//     for (let j = 0; j < result.length; j++) {
//       if (result[j][0] === str[i]) {
//         count++;
//       }
//     }
//     if (count === 0) {
//       for (let j = i; j < str.length; j++) {
//         if (str[j] === str[i]) {
//           count++;
//         }
//       }
//       result.push([str[i], count]);
//     }
//   }
//   return result;
// }