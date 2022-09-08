// function findNextPower(val, pow_) {
//   for (let i = 1; i < val; i++) {
//     if (i ** pow_ > val) {
//       return i ** pow_;
//     } else {
//       return 0;
//     }
//   }

// }
// console.log(findNextPower(8, 3));

// function findNextPower(val, pow_) {
//   for (i = 1; i <= val + 1; i++) {
//     if (i ** pow_ > val) {
//       return i ** pow_;
//     }
//   }
// }
// console.log(findNextPower(1, 3));
// -------------

// function maxMultiple(divisor, bound) {
//   return bound-(bound%divisor);
// }

// --------------------
function digPow(n, p) {
  let x = n.toString().split("");
  console.log(x.length);
  let sayac = 0;
  let toplam;
  for (let i = 0; x.length > i; i++) {
    sayac += x[i] ** p;
    console.log(sayac);
    p += 1;
  }
  toplam = sayac / n;
  if (toplam >= 1) {
    return toplam;
  } else {
    return -1;
  }
}
console.log(digPow(695, 2));
