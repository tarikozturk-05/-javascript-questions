// function solution(str) {
//   return  str.split("").reverse().join("")

// }
// console.log(solution("tarik"))

// function sum(num) {
// let result = [];
// for(let i=0 ; i<num.length;i++){
    
//         result.push(num[i]);
       
    
// }
// return result;
// }
// console.log(sum(1,2,3,4))


// function sum(num) {
//     console.log(num.join(""));
//   result = [];
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] > 0) {
//       result.push(num[i])
//     }
//   }
//    num.reduce((a,b)=> a+b,0)
// }
// console.log(sum(1,2,3));

//* function sum(...arr) {
//     return arr.reduce((a,b)=>a+b)
// }
// console.log(sum(1,2,3,4,5,6,7,8,9,0))


// function generateShape(integer){
//     let arr = [];

//     for(let i=1 ; i<= integer ;i++){
//      for(let i=1 ; i<=1;i++){
//         console.log(arr.push("+")); 
      
     
    
//      }
//     }
//     // }console.log(arr.split("").map((item)=> item * 4).join("")) 
  
  
  
// }
// generateShape(4);








//* function generateShape(int) {
//   let string = '';
//   for (let i = 0; i < int * int; i++) {
//     if (i % int === 0 && i !== 0) {
//       string += '\n';
//     }
//     string += '+';
//   }
  
//   return string;
// }
// console.log(generateShape(5));



function generateShape(int) {
  let str = '';
  let arr = [];
  for (let i = 0; i < int; i++) {
    str += '+';
  }
  for (let i = 0; i < int; i++) {
    arr.push(str);
  }
  return arr.join('\n');
}
console.log(generateShape(2));


// function generateShape(int) {
//   let arr = [];
//   for (let i = 0; i < int; i++) {
//     arr.push('+'.repeat(int));
//   }
//   return arr.join('\n');
// }


// function generateShape(int) {
//   return [...Array(int)].map((x) => '+'.repeat(int)).join('\n');
// }


// const generateShape = (int) =>
//   [...Array(int)].map((x) => '+'.repeat(int)).join`\n`;