const cards = document.querySelectorAll('.memory-card');
var cartasClicadas = [];

function flipCard() {
  this.classList.toggle('flip');
  cartasClicadas.push(this);
  if(cartasClicadas.length == 2){
    jogoMemorial();
  }
}

cards.forEach(card => card.addEventListener('click', flipCard));

function jogoMemorial(){
  if(cartasClicadas[0].src === cartasClicadas[1].src){
    cartasClicadas.forEach(card => {
      card.parentNode.removeChild(card);
    });
    cartasClicadas.lenght = 0;
  }
  else{
    cartasClicadas.forEach(card => {
      card.classList.toggle('flip');
    });
    cartasClicadas.lenght = 0;
  }
}
