const nombre="juan";
const nombre2= new String("santiago");

const persona = new Object();
persona.nombre="santiago";
persona.apellido="gomez";
persona.edad="23";
console.log(persona);

const nuevaPersona = {
    nombreCompleto: {
        nombre:"carlos",
    apellido:"cruz",
    },
    edad: 28,
    pasatiempos: ["futbol", "estudiar", "anime"],
    tieneTrabajo:true,
    /* metodo */
    saludar:function() {
        console.log("hola");
    },
    sumar: function(n1,n2) {
        console.log(`el resultado de la suma es ${n1+n2}`);
        
    }

    
}
"hola".length;/* atributo o propiedad */
"hola".toLowerCase();/* metodo */
console.log(nuevaPersona.edad);
console.log(nuevaPersona.nombreCompleto.nombre);
console.log(nuevaPersona.pasatiempos[1]);
nuevaPersona.saludar();
nuevaPersona.sumar(5,10);
/* para ca,biart valores */
nuevaPersona.edad=10;
console.log(nuevaPersona.edad);
/* agregar nuevo aributo */
nuevaPersona.colorFav="morado";
console.log(nuevaPersona);
console.log( nuevaPersona.hasOwnProperty("edad"));
console.log(Objet.keys(nuevaPersona));
console.log(Objet.values(nuevaPersona));

