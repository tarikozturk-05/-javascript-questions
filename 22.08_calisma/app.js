// let taban = +prompt("tabanı giriniz ")
// let yuksek = +prompt("yükseklik giriniz ")

// let alanhesapla = (taban , yuksek)=> taban * yuksek / 2 
// console.log(alanhesapla(taban , yuksek));

//----------------

// let sayı1 = +prompt("sayı giriniz")
// let sayı2 = +prompt("2.sayıyı giriniz")

// let kareAl = (sayı1)=>sayı1**2

// let küpAl = (abc)=> abc**3

// let üstAl = (sayı1 , sayı2)=> sayı1**sayı2

// console.log(kareAl(sayı1), küpAl(sayı2), üstAl(sayı1, sayı2));

//-Yıl değerini parametre olarak alan ve bu yılın artık yıl olup olmadığını
// hesaplayarak sonucu ana programa döndüren fonksiyonu function-expression
// yöntemi ile yazınız. NOT: Yıl 4’e tam bölünüyorsa VE (100'e tam bölünmüyorsa
// VEYA 400'e tam bölünüyorsa) artık yıldır aksi takdirde değildir.

// let Yıl =(new Date.getFullYear());
// const artıkYıl = function (x){
// let aYıl;
//  if(x%4==0){
//   console.log("artık yıldır");
// }else if(x%100 ==0){
//   console.log("artık yldır");
// }else if(x%400 !=0 ){
//   console.log("artık yıldır");
// }else{console.log("artık yıl değildir");}

// return aYıl;
// }
// let x= +prompt("yıl giriniz:");
// console.log(artıkYıl(x));



// let y =+prompt("yıl giriniz")

// const artıkYıl = function(y){
    
//     if((y%4)==0 ){
//         console.log("artık yıldır")
//     }else if((y%100)!=0){
//         console.log("artık yıldır")
//     }else if((y%400)==0)
//     {console.log("artık yıldır")}
//     else{
//         console.log("artık yıl değildir")
//     }

    

// }
// console.log(artıkYıl(y));


// let artikYil = function (x) {
//   if (x%4==0 && (x % 100!=0 || x % 400==0)) {
//     console.log("artık yıldır");
//   } else {
//     console.log("artık yıl değildir");
//   }
// };
// artikYil(2022)



//---------------


// let r = +prompt("yarıçap giriniz")
// let pi = Math.PI
// const alan = (pi , r)=>{
//     const sonuc = pi*r**2
//     return sonuc ;
// }
// console.log(alan(pi ,r));

//-------------

// let get= +prompt("gir")
// let yasHesapla = (e)=>{
//     let sonuc = 2022-get
//     return sonuc

// }
// console.log(yasHesapla())
// console.log(yasHesapla())
// console.log(yasHesapla())

// const yuzyıl =function(){    

//     let sayi = +prompt("yıl giriniz")
//     if(1<=sayi&& sayi<=2022){
// let islem = Math.ceil(sayi/100)
// console.log(`girmiş olduğunuz yıl ${islem}.Yüzyıldır`)
// }else{
//     console.log("düzgün bir sayı gir")
// }
// }

// setInterval(yuzyıl,10000);
 //*-----------------------------