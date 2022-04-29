/* este es un nodo de comentario */
const $parrafo=document.querySelector("p");
const $titulo=document.querySelector("h1");
const $car=document.querySelector(".car");

console.log($parrafo.nodeName);
console.log($titulo.nodeName);
console.log($parrafo.textContent);
$parrafo.textContent+="Hola mundo!";
$titulo.textContent="Modificando elementos con js";

console.log($parrafo.innerHTML);

/* $parrafo.innerHTML=`<a>este es un enlace</a>`; */
$parrafo.outerHTML+=`<a>este es un enlace</a>`;
/* crear un elemento html */
console.log(document);
function crearElemento() {
    const img=document.createElement("img");
    img.src="https://img.ecartelera.com/noticias/42700/42792-m.jpg"
//appendchild
    $car.appendChild(img);
}
crearElemento();