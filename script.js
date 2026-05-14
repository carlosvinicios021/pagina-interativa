const botaoMudarCor = document.getElementById('mudarCor');
const botaoMudarTitulo = document.getElementById('mudarTitulo');
const botaoMudarTema = document.getElementById('mudarTema');
const inputTitulo = document.getElementById('novoTitulo');
const tituloPrincipal = document.getElementById('tituloPrincipal');

botaoMudarCor.addEventListener('click', function() {
    const body = document.body;
    const novaCor = body.style.backgroundColor === 'lightblue' ? '#f0f0f0' : 'lightblue';
    body.style.backgroundColor = novaCor;
});

botaoMudarTitulo.addEventListener('click', function() {
    const novoTitulo = inputTitulo.value.trim();
    if (novoTitulo.length > 0) {
        tituloPrincipal.textContent = novoTitulo;
        inputTitulo.value = '';
    } else {
        alert('Digite um novo título antes de atualizar.');
    }
});

botaoMudarTema.addEventListener('click', function() {
    document.body.classList.toggle('dark');
    botaoMudarTema.textContent = document.body.classList.contains('dark') ? 'Desativar Tema Escuro' : 'Ativar Tema Escuro';
});