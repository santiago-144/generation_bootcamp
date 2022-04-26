function reverse(s){
    return s.split("").reverse().join("");
}

var invertir = reverse("Hola mundo")
console.log(invertir)

const saludo=prompt("");

for (let i = 0; i < saludo.length; i++) {
    const element = [];
    element.push([saludo[i]]);
  
console.log(element);
    
}
const inver = (palabra) => {
    if (palabra.length<=1) return console.warn("no ingresaste texto");
    if(typeof(palabra)!=='string') return console.error("valor ingresado no valido");
    let arreglo=palabra.split("");
    let reverso=arreglo.reverse();
    let unir=reverso.join("")
    console.log(unir);
}
inver("hola");