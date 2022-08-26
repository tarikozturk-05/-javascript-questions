// arr=[false ,true ,true,false,true]


// function countTrue(arr) {
//   for (let arr = 0; i <= 6; i++) {
//     let sayac = 0;
//     if (arr[arr] == true) {
//       sayac += 1;
//       return sayac;
//     } else {
//       return 0;
//     }
//   }
// }
// console.log(countTrue())

// //--------------------
// function countTrue(arr) {
//   var count = 0;
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === true) {
//       count++;
//     }
//   }
//   return count;
// }





var sayilar = new Array(20); //[43,4,3,44,32,56,89,43,23,1,43,5,778,6,43,2];
var min, mak;
/*diziye rasgele sayı aktarma.*/
for (var i = 0; i < sayilar.length; i++) {
  sayilar[i] = Math.floor(Math.random() * 100);
}
/*dizideki en büyük ve en küçük sayının ilk index içinde olduğunu varsayıyoruz.*/
min = sayilar[0];
mak = sayilar[0];
/*dizideki en küçük ve enbüyük sayıyı bulmak min, ve mak değerlerini karşılaştırarak en büyük ve en küçük değelerini aratıyoruz.*/
for (var i = 0; i < sayilar.length; i++) {
  /*min dizideki değerden büyükse mini dizideki ile değiştiriyoruz.*/
  if (min > sayilar[i]) {
    min = sayilar[i];
  }
  /*mak dizideki değerden küçükse makı dizideki değer ile değiştiriyoruz.*/
  if (mak < sayilar[i]) {
    mak = sayilar[i];
  }
}