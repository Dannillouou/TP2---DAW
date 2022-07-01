const cards = document.querySelectorAll('.memory-card');
var cartasClicadas = [];

function flipCard() {
  this.classList.toggle('flip');
  cartasClicadas.push(this);
  id = this.getAttribute('id');
  console.log(id);
  if(cartasClicadas.length == 2){
    jogoMemorial();
  }
}

cards.forEach(card => card.addEventListener('click', flipCard));

function jogoMemorial(){
  let id1 = cartasClicadas[0].getAttribute('id');
  let id2 = cartasClicadas[1].getAttribute('id');
  if(id1 === id2){
    cartasClicadas = [];
  }
  else{
    setTimeout(() => { //delay de 1 segundo depois de clicar em cartas diferentes; tudo dentro de setTimeout demora um segundo para ser executado
    cartasClicadas.forEach(card => {
      card.classList.toggle('flip');
    });
    cartasClicadas = [];}, 1000);
  }
}
