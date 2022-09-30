function queueTime(customers, n) {
  if(n == 1){
   return customers.reduce((a,b)=> a+b,0);
  }
  for(let i=0; i < customers.length;i++){
    if( customers[i]- customers[i+1]>=0){

    }else{

    }
  }



//   if(customers[0]-customers[1] >= 0){
//     if (customers[0]>) {
//     }


//   }else{

//   }




}
queueTime([2,2,3,3,4,4], 2);
// 9


// function queueTime(customers, n) {
//   var w = new Array(n).fill(0);
//   console.log(w)
//   for (let t of customers) {
//     let idx = w.indexOf(Math.min(...w));
//     w[idx] += t;
//   }
//   return Math.max(...w);
// }

// function queueTime(customers, registers) {
//   let arr = [];

//   for (let i = 0; i < registers; i++) arr[i] = 0;

//   for (let i = 0; i < customers.length; i++) {
//     arr[0] += customers[i];
//     arr.sort((a, b) => a - b);
//   }

//   return arr[arr.length - 1];
// }

//? ******************
// function queueTime(customers, n) {
//   if (customers.length === 0) return 0;
//   let x = customers.slice(0, n);
//   for (let i = n; i < customers.length; i++) {
//     x = x.sort((a, b) => a - b);
//     x[0] += customers[i];
//   }
//   return Math.max(...x);
// }
// console.log(queueTime([2, 3, 10], 2));


// import {aaaa} from 'app2.js'

// const app = (a) => {
//   return (
//     console.log(a)
//   )
// }

// export default app


// **************
// function estSubsets(arr) {
//   let arr1 = [];
// for(let i=0;i<arr.length;i++){
//   let abc= arr.sort()
// if(abc[i] !== abc[i+1]){
//     arr1.push(abc[i]);
// }
// }
// return (2 ** arr1.length)-1;

  
  
// }
// console.log(
//   estSubsets([
//     "a",
//     "z",
//     "z",
//     "z",
//     "b"
//   ])
// );

//? ******************
// let aa = ["a", "z", "z", "z", "b"];

// function estSubsets(arr) {
//   var set_ = new Set(arr);

//   return Math.pow(2, set_.size) - 1;
// }
// aa.push("aa")
// aa.push("aa")
// aa.push("bb")
// console.log(new Set(aa))
// console.log(aa)


//? ******************




// function chained(functions,sayı) {
  
//   function f1(x) {
//     return x * 2;
//   }
//   function f2(x) {
//     return x + 2;
//   }
//   function f3(x) {
//     return Math.pow(x, 2);
//   }

//   function f4(x) {
//     return x.split("").concat().reverse().join("").split(" ");
//   }
//   function f5(xs) {
//     return xs.concat().reverse();
//   }
//   function f6(xs) {
//     return xs.join("_");
// }





// }



// console.log(chained([f3, f2, f1])(2));
// //12 ;


// function square(x) {
//   return x * x;
// }
// function add3(x) {
//   return x + 3;
// }

// function chainer(a) {
//   return function (b) {
//     for (var i = 0; i < a.length; i++) {
//       return a[i](b);
//     }
//   };

// }
// console.log(chainer([square, add3])(4));