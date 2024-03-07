let valorTotalInput = document.getElementById('valorTotal');
let porcentagemGorjeta = document.getElementById('porcentagemGorjeta');
const botaoCalc = document.getElementById('botaoCalcular');
const mostrarTotalGorjeta = document.getElementById('mostrarTotalGorjeta');
const botaoClear = document.getElementById('botaoClear');

function formatacaoDinheiro(quantia) {
    return quantia.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

botaoCalc.addEventListener('click', function() {
    const porcentagem = porcentagemGorjeta.value / 100;
    const valorTotal = valorTotalInput.value;

    const totalGorjeta = valorTotal * porcentagem;
    const quantiaFormatada = formatacaoDinheiro(totalGorjeta);

    mostrarTotalGorjeta.textContent = quantiaFormatada;
});

botaoClear.addEventListener('click', function() {
    valorTotalInput.value = '';
    porcentagemGorjeta.value = '';
    mostrarTotalGorjeta.textContent = '';
});
