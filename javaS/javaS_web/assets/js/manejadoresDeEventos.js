addEventListener('load', function () {
    this.alert('se ha termimnado de cargar la pagina');    
})
function saludar() {
    alert('hola');
}
/* manejador de eventos semanticos */
const $botonSemantico=document.querySelector('#evenSema');
$botonSemantico.onclick=saludar;
$botonSemantico.onclick=function(e){
    console.log(e.target);
}
/* manejador de eventos multiples */
const $botonMultiple=document.querySelector('#evenMul');
$botonMultiple.addEventListener('click',saludarM);
$botonMultiple.addEventListener('click', function (e) {
    console.log(e.target);
});
function saludarM() {
    alert('hola mundo2');
}