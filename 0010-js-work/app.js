document.querySelector(".btn-on").addEventListener("click",()=>{
    const sr =document.querySelector(".lamb-off")
  sr.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS8XP5L6Nv4jNgYL6fM03_Ak28IH--b7Qqd8gdgFY854b040qFQiwjed0X2CPq1UWn52E&usqp=CAU";
    
    
}
 );

document.querySelector(".btn-off").addEventListener("click", () => {
  const sr = document.querySelector(".lamb-off");
  sr.src =
    "https://media.istockphoto.com/vectors/incandescent-light-bulb-flat-icon-vector-id1142466326?k=20&m=1142466326&s=170667a&w=0&h=8OahyCzcUktAtaRoaFov2M_bbhBadZOXZkyFvXBK57s=";
});








// **********
document.querySelector(".btn-ekle").addEventListener("click", () => {
  const liste = document.querySelector(".liste");
  const inputListe = document.querySelector(".input-liste");
  const yeniListe = document.createElement("li");
  const textNode = document.createTextNode(inputListe.value);
  yeniListe.appendChild(textNode);
  liste.appendChild(yeniListe);
})
document.querySelector(".btn-sil").addEventListener("click",()=>{
const liste = document.querySelector(".liste");
liste.childElementCount > 0
  ? liste.removeChild(liste.lastElementChild)
  : alert("silinecek eleman kalmadi");
})
;
