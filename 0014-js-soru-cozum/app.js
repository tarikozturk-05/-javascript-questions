//  function dotCalculator(equation) {
//   y = equation.split("").filter((x) => x != ".");
//   console.log(y)
//   z = y.filter((a) => a != " ").join("");
//   console.log(z);

//   let a = equation.indexOf(z);
//   console.log(a)
//   console.log(a - 1);
//   console.log(equation.length - a - 2);

//  let m; 

//   if(z== "//"){
//     z = "/"
//     m = Math.floor(eval(a - 1 + z + (equation.length - a - 3)));
//     console.log(m);
//   }else{
//      m = Math.floor(eval(a - 1 + z + (equation.length - a - 2)));
//     console.log(m);
//   }
//   dot = "";
//   for (i = 0; i < m; i++) {
//     dot += ".";
//   }
//   return dot;
// }
// console.log(dotCalculator("..... // ..."))


//! ****************

// function addBinary(a ,b){
// return (a + b).toString(2)
// }
// console.log(addBinary(4 ,2))

// *************

    // function productFib(prod) {
    //     let kutu=[];
    //     let ilk=1;
    //     let iki=2;
    //     let toplam;
    //    while(){

    //    }
        


    // }
    // console.log(productFib(4895));
    // // 55,89


//! *****************
    // function productFib(prod) {
    //     let arr =[]
    //     let toplam=0;




    //   let ilk = 0;
    //   let ikinci = 1;
    //   while (ilk * ikinci < prod) {
    //     toplam = ilk +ikinci
    // //    console.log(toplam)

    //     ikinci = ilk + ikinci;
    //     ilk = ikinci - ilk;
    //     arr.push(toplam)

    //   }
    //   console.log(arr);
    //   return [ilk, ikinci, ilk * ikinci === prod];

        
    // }
    // console.log(productFib(193864606));