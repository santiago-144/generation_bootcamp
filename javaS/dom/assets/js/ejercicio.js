const $car=document.querySelector(".car");
const $form=document.querySelector("form");


$form.addEventListener("submit", (e)=>{
    e.preventDefault();
const datos=Object.fromEntries(
    new FormData(e.target)
)//captura los dartos dentro del formulario
/* console.log(datos); */
crearElemento(datos.url, datos.texto);
});



function crearElemento(url,texto) {
    const img=document.createElement("img");
    const txt=document.createElement('figcaption');
    img.src=url;
    img.alt=texto;
    txt.textContent=texto;
//appendchild
    $car.appendChild(img);
    $car.appendChild(txt);
}
