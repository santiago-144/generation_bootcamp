const url = "https://dog.ceo/api/breeds/list/all";
const lista = document.querySelector("ul");
fetch(url)
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    console.log(datos.message.terrier);
    const aregloTerrier = datos.message.terrier;

    aregloTerrier.forEach((tipoTerrier) => {
      console.log(tipoTerrier);
      const template = `<li class="list-group-item">${tipoTerrier}</li>`;
      lista.innerHTML += template;
    });
  });
