

const envio   =document.querySelector(".envio");


var i=0;
const enviartexto=()=>{
  
    const content=document.querySelector(".content");//Traemos el contendor de las tareas
    const input = document.querySelector(".tarea");
    // const texto= document.querySelector(".textoruti");
     
    let text=input.value;
    // texto.innerHTML=text;
    // console.log(text);

    
    const divi=document.createElement("DIV");
    divi.classList.add(`production-post-cel`, `celda${i}`);
    i++;

    
    divi.appendChild(listo());

    const texto=document.createElement("P");
    texto.classList="textoruti";
    texto.innerHTML=text;
    divi.appendChild(texto);

    
    divi.appendChild(iconTrash());


    content.appendChild(divi);
    input.value="";
}

const eliminar=document.querySelector(".production-post-cel-second");

const listo=()=>{
    const i=document.createElement("I");
    i.classList.add("fa-solid","fa-check-to-slot","production-post-cel-first");
    i.addEventListener("click",comprobar);
    return i;
}

const comprobar=(event)=>{
    const indicador=event.target;     
    indicador.classList.toggle("nar");
}

const iconTrash=()=>{//A cada i que se esta creando se le esta agregando un event listener
    const i=document.createElement("I");
    i.classList.add("fa-solid","fa-trash","production-post-cel-second");
    i.addEventListener("click",deleteCelda);
    return i;

}
const deleteCelda=(event)=>{
    const ubi=event.target.parentElement;
    ubi.remove();    
}

envio.addEventListener("click",enviartexto);

