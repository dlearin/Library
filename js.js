//variables globales

let button = document.querySelector('.mostrarFormulario');
let enviar = document.querySelector('.enviar');
let nombre = document.querySelector('.nombre');
let author = document.querySelector('.año');
let pages = document.querySelector('.autor');
let formulario = document.querySelector('form');
let presentBook = document.querySelector('.bookSection');
let inputNombre = null;
let inputAuthor = null;
let inputPages = null;


//funciones de escucha//

console.log(enviar);

//escucha para abrir formulario

button.addEventListener('click',function(){

    document.getElementById('modal').style.display = 'block';

})


/**escucha para guardar datos de formulario 
 * y prevenir ejecutar modo por defecto
 */

enviar.addEventListener('click', function(event){
  event.preventDefault();
  inputNombre = nombre.value;
  inputAuthor = author.value;
  inputPages = pages.value;
  addBookToLibrary(inputNombre, inputAuthor,inputPages);
  document.getElementById('modal').style.display = 'none';
  formulario.reset();});

/**
 * Adding a new book
 */

//creating library array

let myLibrary = [];

//creating function to create a new book

//adding prototype to add function in order to present new books on front



//function Book

function Book(name, author, pages){
  // the constructor...
  this.name = name;
  this.author = author;
  this.pages = pages;
};

//function to add books to library

function addBookToLibrary(inputNombre, inputAuthor,inputPages){

  let Libro = new Book(inputNombre, inputAuthor,inputPages);
  myLibrary.push(Libro);
  displayBooks();
 };

//function to display books
function removeBook(index) {
  myLibrary.splice(index, 1);
}

function displayBooks() {
  // Limpiar el contenedor de libros antes de agregar los nuevos
  presentBook.innerHTML = "";

  // Iterar sobre el array de libros
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];

    // Crear un nuevo elemento div para el libro y asignarle una clase
    const bookCell = document.createElement("div");
    bookCell.classList.add("bookCell");

    // Agregar el contenido del libro al elemento div
    bookCell.innerHTML = `
      <h2>${book.name}</h2>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <button class="borrarLibro" data-index="${i}">Delete</button>
    `;

    // Obtener el botón de "Delete" y agregarle un evento de click para borrar el libro correspondiente
    const buttonBorrarLibro = bookCell.querySelector(".borrarLibro");
    buttonBorrarLibro.addEventListener("click", function () {
      const index = buttonBorrarLibro.dataset.index;
      removeBook(index);
      displayBooks();
    });

    // Agregar el elemento div al contenedor de libros
    presentBook.appendChild(bookCell);
  }

  // Contar el número total de libros en la biblioteca
  const bookCount = myLibrary.length;
}

//estilos para el grid



