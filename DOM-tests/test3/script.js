const botaoClick = document.getElementById('click');
const botaoClear = document.getElementById('clear');
const botaoClickMenos = document.getElementById('menos');
const numContador = document.getElementById('numero-contador')
let contagem = 0;

botaoClick.addEventListener('click', function() {
    contagem++;
    numContador.textContent = contagem;
})

botaoClickMenos.addEventListener('click', function() {
    contagem--;
    if (contagem < 0) {
        contagem = 0;
    }
    
    numContador.textContent = contagem;
})

botaoClear.addEventListener('click', function() {
    contagem = 0;
    numContador.textContent = contagem;
})

