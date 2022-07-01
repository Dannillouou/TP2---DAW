const cards = document.querySelectorAll('.memory-card');
var cartasClicadas = [];

function flipCard() {
  this.classList.toggle('flip');
  cartasClicadas.push(this);
  console.log(this);
  id = this.getAttribute('id');
  console.log(id);
  if(cartasClicadas.length == 2){
    jogoMemorial();
  }
}

cards.forEach(card => card.addEventListener('click', flipCard));

function jogoMemorial(){
  if(cartasClicadas[0].id == cartasClicadas[1].id){
    console.log("if");
    /*cartasClicadas.forEach(card => {
      card.parentNode.removeChild(card);
    });*/
    cartasClicadas = [];
  }
  else{
    /*cartasClicadas.forEach(card => {
      card.classList.toggle('flip');
    });*/
    console.log("else");
    for(let i = 0; i < cartasClicadas.length; i++){
      cartasClicadas[i].classList.toggle('flip');
    }
    cartasClicadas = [];
  }
}
