const form = document.getElementById('postForm');
const titulo = document.getElementById('titulo');
const conteudo = document.getElementById('conteudo');
const renderizadorTitulo = document.getElementById('renderizador-titulo');
const renderizadorConteudo = document.getElementById('renderizador-conteudo');

// Adicionando um evento de 'submit' ao formulário
form.addEventListener('submit', function(event) {
    // Prevenir o comportamento padrão do formulário
    event.preventDefault();
    
    // Criando o objeto de dados a ser enviado
    const data = {
        title: titulo.value,
        body: conteudo.value,
        userId: 1
    };

    // Realizando a requisição POST para a API
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json()) // Transformando a resposta em JSON
    .then(data => {
        // Renderizando o título e o conteúdo retornados
        renderizadorTitulo.innerHTML = data.title;
        renderizadorConteudo.innerHTML = data.body;

        // Limpar os campos de entrada
        titulo.value = '';
        conteudo.value = '';
    })
    .catch(error => {
        console.error('Erro:', error); // Tratamento de erro
    });
});
