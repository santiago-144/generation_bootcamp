window.addEventListener("keydown", function (event) {
    console.log(event);
    console.log(event.keyCode);
    const letra= String.fromCharCode(event.keyCode);
    console.log(letra);
 const texto=this.document.querySelector('p');
 texto.textContent+=letra;
}
),false;
