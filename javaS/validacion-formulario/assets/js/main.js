const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/, // 7 a 14 numeros.
};

const formulario = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const nombreError = document.querySelector("#error-nombre");
const apellidoError = document.querySelector("#error-apellido");
const emailError = document.querySelector("#error-email");
const contraError = document.querySelector("#error-contra");
const telefonoError = document.querySelector("#error-telefono");

const statusinf = {
  nombre: false,
  apellido: false,
  email: false,
  password: false,
  telefono: false,
}

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    /* console.log(e.target.name); */

    switch (e.target.name) {
      case "nombre":
        /* console.log(e.target.value); */
        /* console.log(expresiones.nombre.test(e.target.value));//test verifica si es valido con la ex´presion regular */
        if (expresiones.nombre.test(e.target.value)) {
          /* console.log("nombre correcto"); */
          nombreError.textContent = "";
          statusinf.nombre = true;
        } else {
          /* console.log("nombre incorrecto"); */
          nombreError.textContent = "error";
          statusinf.nombre = false;
        }

        break;
      case "apellido":
        /*  console.log(e.target.value); */
        if (expresiones.nombre.test(e.target.value)) {
          /* console.log("apellido correcto"); */
          apellidoError.textContent = "";
          statusinf.apellido = true;
        } else {
          /* console.log("apellido incorrecto"); */
          apellidoError.textContent = "error";
          statusinf.apellido = false;
        }
        break;
      case "email":
        /*  console.log(e.target.value); */
        if (expresiones.email.test(e.target.value)) {
        /*   console.log("correo correcto"); */
          emailError.textContent = "";
          statusinf.email = true;
        } else {
          /* console.log("correo incorrecto"); */
          emailError.textContent = "error";
          statusinf.email = false;
        }
        break;
      case "password":
        /* console.log(e.target.value); */
        if (expresiones.password.test(e.target.value)) {
          /* console.log("contraseña correcto"); */
          contraError.textContent = "";
          statusinf.password = true;
        } else {
          /* console.log("contraseña incorrecto"); */
          contraError.textContent = "error";
          statusinf.password = false;
        }
        break;
      case "telefono" /* 
        console.log(e.target.value); */:
        if (expresiones.telefono.test(e.target.value)) {
         /*  console.log("telefono correcto"); */
          telefonoError.textContent = "";
          statusinf.telefono = true;
        } else {
         /*  console.log("telefono incorrecto"); */
          telefonoError.textContent = "error";
          statusinf.telefono = false;
        }
        break;
      default:
        break;
    }
  })
})
formulario.addEventListener("submit",(e)=>{
	e.preventDefault();
	/* const check =document.querySelector("#terminos").checked */
	console.log(Object.values(statusinf).includes(false));
	if (Object.values(statusinf).includes(false)===false /* && check==true */) 
	{
	/* console.log("enviado"); */
	document.querySelector(".alert-danger").style.display="none"
	const datos=Object.fromEntries(
			new FormData(e.target)
		)
	
	console.log(datos);
	formulario.reset();
    console.log(statusinf);
	}
	else{
		console.log("no enviado");
		document.querySelector(".alert-danger").style.display="block"

	}
})