// function consecKprimes(k, arr) {
//     let sayac = 0 ;
//     let num = 0 ;
  
//     for(let i=0 ; i<arr.length ;i++){
//         if (arr[i] % 2 == 0) {
//           sayac++;
 
//         } if (arr[i] % 3 == 0) {
//           sayac++;
          
//         } if (arr[i] % 5 == 0) {
//           sayac++;
//         } if (arr[i] % 7 == 0) {
//           sayac++;
//         } if (arr[i] % 11 == 0) {
//           sayac++;
//         } if (arr[i] % 13 == 0) {
//           sayac++;
//         } if (arr[i] % 17 == 0) {
//           sayac++;
//         } if (arr[i] % 19 == 0) {
//           sayac++;
//         } if (arr[i] % 23 == 0) {
//           sayac++;
//         } else{
//             return sayac ;
//         }
//           if (sayac !== k) {
//             return 0;
//           } else {
//             return num;
//           }
//     }
   


// }





function consecKprimes(k, arr) {
  return arr
    .map(countPrimes)
    .reduce(
      (a, b, i, array) => (i > 0 && b == k && array[i - 1] == k ? a + 1 : a),
      0
    );
  function countPrimes(num) {
    var count = 0;
    for (var i = 2; i <= num; i++) {
      while (num % i == 0) {
        num /= i;
        count++;
      }
    }
    return count;
  }
}


console.log(
  consecKprimes(
    2,
    [10098,12, 10123, 10132, 10129, 10145, 10148, 10147, 10135, 10146, 10134]
  )
);
