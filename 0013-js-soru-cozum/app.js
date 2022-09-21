// function dotCalculator(equation) {
//     let arr1 =[];
//     let arr2= [];
//    let nokta = equation.split("")
// let index;
//    console.log(nokta)
//  for(let i=0 ;i<nokta.length ;i++){
//     if(nokta.filter(("+")=> i = index )){
//         console.log(arti)
//     }
//     // nokta.find((".")=> arr1.push )

//  }


// }
// console.log(dotCalculator("..... + ."));

// ****

// function dotCalculator(equation) {
//     let result=equation.split("")
//     let length = equation.length;
//     let ilk =[];
//     let ikinci=[] ;
//     let sonuc ;
//     let islem= [];
//     for(let i=0;i<length;i++){
//         if (equation[i] == "+" ){
//           ilk.push(i - 1);
//           islem.push("+");
//            ikinci.push(i + 2);
//            console.log(ikinci)
//           console.log(islem)
//           console.log(ilk);
//         }else if(equation[i] == "-" ){
//             islem.push("-");
//              ilk.push(i - 1);
//         }else if(equation[i] == "/" ){
//             islem.push("/");
//              ilk.push(i - 1);
//         }else if(equation[i] == "*" ){
//             islem.push("*");
//              ilk.push(i - 1);
//         }
       
      
//     }
// //  return result.reduce(equation=> ilk + ikinci)
// }
// console.log(dotCalculator(".... + ...."));

//! ******************

// function dotCalculator(equation) {
//   y = equation.split("").filter((x) => x != ".");
//   z = y.filter((a) => a != " ").join("");
//   console.log(z);

//   let a = equation.indexOf(z);
//   console.log(a - 1);
//   console.log(equation.length - a - 2);

//  let m; 

//   if(z== "//"){
//     z = "/"
//     m = eval(a - 1 + z + (equation.length - a - 3));
//     console.log(m);

//   }else{
//      m = eval(a - 1 + z + (equation.length - a - 2));
//     console.log(m);
//   }
  

//   dot = "";
//   for (i = 0; i < m; i++) {
//     dot += ".";
//   }

//   return dot;
// }

// console.log(dotCalculator("... * ."));
//? **************

// function squareDigits(num) {
//   let tostr = num.toString();
//   console.log(tostr);
//   let result = [];
//   for (let i = 0; i < tostr.length; i++) {
//     result.push(tostr[i]);
//   }
//   return Number(result.map((x) => x ** 2).join(""));
// }
// console.log(squareDigits(9212));

// *************


// function squareDigits(num) {
  
// return Number(
//   num
//     .toString()
//     .split("")
//     .map((x) => x * x)
//     .join("")
// );
// }
// console.log(squareDigits(9212));

// *************
var number = function (busStops) {
    a = busStops.reduce((x,y)=>x+y[0],0)
  
    return a- b;
    

  
}
console.log(
  number([
    [9, 0],
    [3, 5],
    [5, 8],
  ])
);
