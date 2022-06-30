const pecas = document.querySelectorAll('.col');

function GirarPecas() {

  this.classList.toggle('girar');
}

pecas.forEach(peca => peca.addEventListener('click', GirarPecas));