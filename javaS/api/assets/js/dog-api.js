const url="https://dog.ceo/api/breeds/image/random";
const $img=document.getElementById('perrito')
const $img2=document.getElementById('perro2');
fetch(url).then(respuesta=>respuesta.json()).then(datos=>{
    console.log(datos.message);
    $img.src=datos.message;
})
async function obtenerPerro() {
    const infoPerrito=await fetch(url);
    console.log(infoPerrito);
    const perrito=await infoPerrito.json();
    console.log(perrito);
    $img2.src=perrito.message;
}
obtenerPerro();

