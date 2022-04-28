/* primer nivel */
/* const cumple= prompt("que año naciste");
const ano = 2022-parseInt(cumple);
console.log(typeof(ano));
console.log(ano); */


/* const fecha=document.querySelector('.cumple');
fecha.addEventListener('submit',function (e) {
    e.preventDefault();
    const datos=Object.fromEntries(
        new FormData(e.target)
    )
    console.log(datos.fecha);
   
    }
) */
/* nivel 2 opcion 1 */

const anoActual=2022;
/*
function calcularEdad() {
    const anoNacimiento= parseInt( document.getElementById("ano").value);
    console.log(`Tienes ${anoActual-anoNacimiento} años`);
    
} */
/* nivel 2 opcion 2 */
/* const boton=document.getElementById("calcular");
boton.addEventListener("click", () => {
    const anoNacimiento= parseInt( document.getElementById("ano").value);
    console.log(`Tienes ${anoActual-anoNacimiento} años`);
}) */
const fecha=new Date();
const anio=fecha.getFullYear();
const Month=fecha.getMonth()+1;
const date=fecha.getDate();
const anioActual=2022;
const mesActual=4;
const diaActual=27;

function mostrarDatos() {
    const datos=document.getElementById("anio").value;
    console.log(datos);
    const fechas=datos.split("-");
    console.log(fechas);
    const an= parseInt(fechas[0]);
    const mes=parseInt(fechas[1]);
    const dia=parseInt(fechas[2]);
    console.log(an,mes,dia);
if (mes<=Month && dia<=date) {

    console.log(`tu edad es de ${anio-an}`);
} else {
    console.log(`tu edad es de ${(anio-an)-1}` );
}
    
}
const boton=document.getElementById("calcular");
boton.addEventListener("click", ()=>{

    const datos=document.getElementById("anio").value;
    const fechas=datos.split("-");
    const an= parseInt(fechas[0]);
    const mes=parseInt(fechas[1]);
    const dia=parseInt(fechas[2]);
if (mes<=mesActual && dia<=diaActual) {

    console.log(`tu edad es de ${anioActual-an} años con ${diaActual-dia} dias`);
} else {
    console.log(`tu edad es de ${(anioActual-an)-1}` );
}

})