// Exemplo de interação simples com JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const projetos = document.querySelectorAll('.projeto');

    projetos.forEach(projeto => {
        projeto.addEventListener('click', () => {
            alert('Você clicou em um projeto!');
        });
    });
});
