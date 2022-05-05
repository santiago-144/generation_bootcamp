const url="https://api.thecatapi.com/v1/images/search "
const $buton=document.getElementById('cambiar');
const $imaGa=document.getElementById('gato');
/* fetch(url).then(respuesta=>respuesta.json()).then(datos=>{
    console.log(datos);
    console.log(datos[0].url);

}) */
$buton.addEventListener('click', (e)=>{
   fetch(url).then(resp=>resp.json().then(datos=>{
       
   }))
    })