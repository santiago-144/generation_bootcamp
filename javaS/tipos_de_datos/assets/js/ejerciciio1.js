/* primer nivel */
/* const cumple= prompt("que año naciste");
const ano = 2022-parseInt(cumple);
console.log(typeof(ano));
console.log(ano); */

const fecha=document.querySelector('.cumple');
fecha.addEventListener('submit',function (e) {
    e.preventDefault();
    const datos=Object.fromEntries(
        new FormData(e.target)
    )
    console.log(datos.fecha);
   
    }
)