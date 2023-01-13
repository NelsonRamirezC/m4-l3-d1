//ejemplo 1
//let parrafos = document.getElementsByTagName("p");
let parrafos = document.querySelectorAll("#ejemplo1 > p")

for(p of parrafos){
    p.innerText = "Cambiamos el contenido de todos los parrafos."
}


//ejemplo 2
let imagen = document.querySelector("#ejemplo2 img");
console.log(imagen.getAttribute("src"));
imagen.setAttribute("src", "https://picsum.photos/id/665/200/150");
console.log(imagen.hasAttribute("id"));
imagen.removeAttribute("src");


//ejemplo 3

let textoEjemplo3 = document.querySelector("#ejemplo3 > p")
console.log(textoEjemplo3.className)
/* textoEjemplo3.classList.add("color_parrafo");
textoEjemplo3.classList.remove("bg-success"); */

textoEjemplo3.addEventListener("click", function(event){
    textoEjemplo3.classList.toggle("color_parrafo")
})

//articulos.innerHTML = "<p>Hola mundo!</p>"
let elementoParrafo = document.createElement("p");
console.log(elementoParrafo)
