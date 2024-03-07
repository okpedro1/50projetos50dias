const panels = document.querySelectorAll('.pane1')

panels.forEach(pane1 => {
    pane1.addEventListener('click', () => {
        removeActiveClasses();
        toggleText(pane1);
        pane1.classList.add('active');
    })
})

function removeActiveClasses() {
    panels.forEach(pane1 => {
        pane1.classList.remove('active');
        pane1.querySelector('.text').style.display = 'none'; // Oculta todos os textos ao remover as classes ativas
    })
}

function toggleText(pane1) {
    const text = pane1.querySelector('.text');
    text.style.display = (text.style.display === 'none' || text.style.display === '') ? 'block' : 'none';
}
