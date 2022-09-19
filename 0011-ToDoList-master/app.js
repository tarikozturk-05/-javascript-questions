const text = document.querySelector('.text')
const btn = document.querySelector('.btn')
const results= document.querySelector('.results')

let template = {
}; 
       

window.onload = () => text.focus();
window.addEventListener("load", ()=>{
    let liste =  localStorage.getItem("liste");
  

    if(liste === null){
     localStorage.setItem("liste", JSON.stringify([]))
    }else{
        let liste = JSON.parse(localStorage.getItem("liste"));
        liste.forEach((e) => {
            baslatıcı(e)
        });
    }

} )


const baslatıcı = (e)=>{
    
    results.innerHTML += ` <div class="result">
            <i class="${e.icon}"></i>
        <p>${e.isim}</p>
        <i class="fa-sharp fa-solid fa-trash-can"></i>
        </div>`
    
}

btn.addEventListener('click',()=>{
    
    if(!text.value){
        alert('Listeye Birşeyler Giriniz')
    }
    else{
        results.innerHTML += ` <div class="result">
            <i class="fa-regular fa-square"></i>
        <p>${text.value}</p>
        <i class="fa-sharp fa-solid fa-trash-can"></i>
        </div>`;
        

         template ={
            isim:text.value,
        //    icon:"fa-regular fa-square",
        } 
       
        let liste =JSON.parse(localStorage.getItem("liste"));
        liste.push(template);
      
        localStorage.setItem("liste",JSON.stringify(liste));
        
        text.value = "";
    }
    
})

text.addEventListener('keydown',(e) =>{
    if(e.code === 'Enter'){
        btn.click()
    }
})

results.addEventListener('click',(e)=>{
    if (e.target.classList.contains("fa-trash-can")) {
        e.target.parentElement.remove()
    }

    else if(e.target.classList.contains('fa-square')){
        e.target.parentElement.classList.add("bg")
      e.target.classList.remove("fa-regular","fa-square");
       e.target.classList.add("fa-solid" ,"fa-check");
    //    liste.map((icon , index)=>{
    //     if(icon.isim== isim){
    //         liste[index].icon = !liste[index].icon

    //     }

    //    })
      template.icon = "fa-solid fa-check"
      console.log(template);
      liste = JSON.parse(localStorage.getItem("liste"));
      liste.push(template);

      localStorage.setItem("liste", JSON.stringify(liste));
      
    }
    else if (e.target.classList.contains("fa-check")) {
         e.target.parentElement.classList.remove("bg");
      e.target.classList.add("fa-regular", "fa-square");
      e.target.classList.remove("fa-solid", "fa-check");
       template.icon ="fa-regular fa-square",
       console.log(template)
        liste = JSON.parse(localStorage.getItem("liste"));
        liste.push(template);

        localStorage.setItem("liste", JSON.stringify(liste));
      
    }
   
    })

