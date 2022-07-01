$(document).ready(function(){

    Aleatorizador();

});

function jogoDaMemoria(){
    var cartasViradas = 0;
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
        cartasViradas += 2;
      }
      else{
        setTimeout(() => {
        cartasClicadas.forEach(card => {
          card.classList.toggle('flip');
        });
        cartasClicadas = [];}, 500);
      }
    }
}
  
function Aleatorizador(){

    let imgs = [], imgs_organizadas = [], i = 0, contador = 0;

    imgs.push('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg');
    imgs.push('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg');
    imgs.push('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ember/ember-original-wordmark.svg');
    imgs.push('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg');
    imgs.push('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codecov/codecov-plain.svg');
    imgs.push('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg');
    imgs.push('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg');
    imgs.push('https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg');

    while(i < 8){

        let posicao = Math.floor(Math.random() * 16);

        if(imgs_organizadas[posicao] < 0){

            imgs_organizadas[posicao].push(imgs[i]);

            contador++;

            if(contador == 2){

                i++;
                contador = 0;

            }

        }
    }

    for (i = 1; i <= 16; i++){

        var img = document.getElementById('teste');
        img.src = 'teste';        

    }

    jogoDaMemoria();
}
