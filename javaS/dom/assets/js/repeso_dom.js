//crear un elemento nuevo
const $padre=document.querySelector(".padre");

const $parr=document.createElement('p');
$parr.textContent="Hola santiago";
$padre.appendChild($parr);
//agregar elementos con innerHTML
const $cuadro=document.querySelector(".cuadro");
$cuadro.innerHTML="";
$cuadro.innerHTML=`<a href="#">este es un enlace </a>
                    <ol>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ol>`;
const estaciones=["primavera","verano","otoño","invierno"];
const $lista=document.createElement('ol');
estaciones.forEach(estacion => {
    const $li=document.createElement('li');
    $li.textContent=estacion;
    console.log($li);
    $lista.appendChild($li);
});
document.body.appendChild($lista);
//////////////////////////
const $continentes=["america","africa","asia","europa","ocenania"];
const $listaOL=document.createElement('ol');
$cuadro.appendChild($listaOL);
$continentes.forEach(continentes=>{
    $listaOL.innerHTML+=`<li>${continentes}</li>`;
});
const $dias=["lunes", "martes", "miercoles","jueves","viernes", "sabado","domingo"]
const $diasUl=document.createElement("ul");
document.appendChild($diasUl);
$dias.forEach(dia => {
    $diasUl.innerHTML+=`<li></li> ${dia}</li>`;
});