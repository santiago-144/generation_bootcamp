const $formulario=document.getElementById('form1');

$formulario.addEventListener('submit',(e)=>{
 e.preventDefault();
 const $nombre=$formulario.fname.value;
 console.log($nombre);
 const $apellido=$formulario.lname.value;
 console.log($apellido);
})

const $boton=document.getElementById('btn1');
$boton.addEventListener('click',()=>{
 const $enlaces=document.querySelectorAll('a');
 const $nume=$enlaces.length;
     alert(`numeros de enlaces ${$nume}, primer enlace ${$enlaces[0]}, ultimo enlace ${$enlaces[$nume-1]}`)
 
})
