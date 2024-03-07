function exibirInformacoes() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const botao = document.getElementById('botao');
    const situacaoDescElement = document.getElementById('situacao-desc');

    botao.onclick = function() {
        document.getElementById('nome-desc').textContent = nome;
        document.getElementById('idade-desc').textContent = idade;

        if (idade < 18) {
            situacaoDescElement.textContent = 'Reprovado';
            situacaoDescElement.style.color = 'red';
        
        } else {
            situacaoDescElement.textContent = 'Aprovado';
            situacaoDescElement.style.color = 'green'; 
        }
    };
}
