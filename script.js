// Função para adicionar um livro à lista
function addBook() {
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;
    const genre = document.getElementById('bookGenre').value;
    const status = document.getElementById('bookStatus').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const notes = document.getElementById('bookNotes').value;

    // Verifica se todos os campos estão preenchidos
    if (title && author && genre && status && startDate && endDate && notes) {
        const book = {
            title,
            author,
            genre,
            status,
            startDate,
            endDate,
            notes
        };

        // Recupera a lista de livros salva no LocalStorage
        let books = JSON.parse(localStorage.getItem('books')) || [];
        
        // Adiciona o novo livro à lista
        books.push(book);

        // Salva a lista atualizada no LocalStorage
        localStorage.setItem('books', JSON.stringify(books));

        // Atualiza a lista exibida na página
        renderBookList();

        // Limpa os campos de entrada
        clearInputFields();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

// Função para limpar os campos de entrada após adicionar um livro
function clearInputFields() {
    document.getElementById('bookTitle').value = '';
    document.getElementById('bookAuthor').value = '';
    document.getElementById('bookGenre').value = '';
    document.getElementById('bookStatus').value = '';
    document.getElementById('startDate').value = '';
    document.getElementById('endDate').value = '';
    document.getElementById('bookNotes').value = '';
}

// Função para carregar e renderizar a lista de livros
function renderBookList() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = ''; // Limpa a lista atual

    // Recupera a lista de livros do LocalStorage
    const books = JSON.parse(localStorage.getItem('books')) || [];

    // Exibe os livros na lista
    books.forEach((book, index) => {
        const li = document.createElement('li');
        li.classList.add('book-item');
        li.innerHTML = `
            <strong>Título:</strong> ${book.title}<br>
            <strong>Autor:</strong> ${book.author}<br>
            <strong>Gênero:</strong> ${book.genre}<br>
            <strong>Status:</strong> ${book.status}<br>
            <strong>Início:</strong> ${book.startDate}<br>
            <strong>Conclusão:</strong> ${book.endDate}<br>
            <strong>Notas:</strong> ${book.notes}
            <button onclick="deleteBook(${index})">Excluir</button>
        `;
        bookList.appendChild(li);
    });
}

// Função para excluir um livro da lista
function deleteBook(index) {
    // Recupera a lista de livros do LocalStorage
    let books = JSON.parse(localStorage.getItem('books')) || [];

    // Remove o livro da lista pelo índice
    books.splice(index, 1);

    // Atualiza o LocalStorage com a lista modificada
    localStorage.setItem('books', JSON.stringify(books));

    // Atualiza a lista exibida na página
    renderBookList();
}

// Carrega a lista de livros assim que a página for carregada
window.onload = function() {
    renderBookList();
};
