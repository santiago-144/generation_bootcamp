console.log(window.document);
console.log(document.head);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.links);
console.log(document.images);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() =>{
    console.log(document.getSelection().toString());
}, 3000) 
document.write('hola mundo desde document write');