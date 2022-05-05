/* let time1=3000;
let datos;
setTimeout(() => {
    datos="carlos";
    console.log("ejecutado despues de 3 segundos");
}, time1);
console.log("hola"); */
const datos = [
  {
    nombre: "juan",
    edad: 15,
  },
  {
    nombre: "juan",
    edad: 15,
  },
  {
    nombre: "juan",
    edad: 15,
  },
];
function obtenerDatos() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(datos)  
        }, 3000);
    })
    
   
}
/* console.log(obtenerDatos()); */
/* obtenerDatos().then((datos)=>{
    console.log(datos);
}) */
async function obtenerDatosAsync() {
    const datosObtenidos=await obtenerDatos();
    console.log(datosObtenidos);
}
obtenerDatosAsync();