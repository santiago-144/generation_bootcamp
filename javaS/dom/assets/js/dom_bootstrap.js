const db=[{
    url:'https://placeimg.com/200/200/animals',
    title:'animales',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vitae impedit ea minima et ratione '

},
{
    url:'https://placeimg.com/200/200/nature',
    title:'naturaleza',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vitae impedit ea minima et ratione '

},
{
    url:'https://placeimg.com/200/200/arch',
    title:'arquitectura',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vitae impedit ea minima et ratione '

},
{
    url:'https://placeimg.com/200/200/people',
    title:'personas',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vitae impedit ea minima et ratione '

},
{
    url:'https://placeimg.com/200/200/tech',
    title:'tecnologias',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vitae impedit ea minima et ratione '

}]

const $cards=document.getElementById('cards');
$cards.innerHTML="";
db.forEach(objeto=>{
 $cards.innerHTML+=`
 <div class="col mb-4">
 <div class="card h-100">
   <img src="${objeto.url}"" class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">${objeto.title}</h5>
     <p class="card-text">${objeto.description}</p>
   </div>
 </div>
</div> 
 `});
//converir un objeto json a un string
 const dbJSON=JSON.stringify(db);
 console.log(dbJSON);
 //convertir a json
console.log(JSON.parse(dbJSON));