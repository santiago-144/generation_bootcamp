function saludar(nombre,apellido) {
    /* let nombre=true;
    console.log(`Hola mi nombre es: ${nombre?"carlos": "desconocido"}`);; */
    return `Mi nombre es ${nombre} ${apellido}`
}
saludar('juan','perez');
let funcionSaludar=saludar();
console.log(funcionSaludar.toLowerCase());
document.write('<h1>este es un h1 </h1>');
/* funcion declarada */
function suma(a,b) {
    return a+b;
}
console.log(suma(10,20));
/* funcion expresada */
const resta=function(a,b) {
    return a-b;
    
}
console.log(resta(30,10));
//funcion flecha
const multiplicacion= (a,b) => {
    return a*b;
}
console.log(multiplicacion(40,5));