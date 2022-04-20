const color = document.querySelector("#color");
console.log(color);
color.addEventListener("change", function (e) {
  document.body.style.backgroundColor = e.target.value;
});
const formulario=document.querySelector("#formularioDatos");
console.log(formulario);
formulario.addEventListener("submit", function (e) {
    e.preventDefault();//evita elevento 
    const datos=Object.fromEntries(
    new FormData(e.target)
    )
    console.log(datos);
    console.log(datos.email);
})