// function scramble(str1, str2) {
//      if(str1.length<str2.length){
//         return false;
//      }

//      let arr1 = str1.split("").sort()
//      let arr2 = str2.split("").sort()
//      console.log(arr1)
//      console.log(arr2)
//      let sayac =0;
//     //  arr1.forEach(el => {
//     //     el.includes()
//     //  });
    
// for(let i=0;i<=arr1.length && sayac<arr2.length;i++){
// if(arr2[sayac]==arr1[i])

// sayac++
// }


  
// return sayac == arr2.length




//   }

//   
//   scramble('katas', 'steak'))

function scramble(str1, str2) {

for(let kelime of str2){
    if(!str1.includes(kelime)){
return false

    }
    return true
}




 




 }
 console.log(scramble('srawkdfedoc', 'codewars'))