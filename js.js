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

function displayBooks(){
 
  //obtener el libro mas reciente
  const latestBook = myLibrary[myLibrary.length - 1];

  //crear un nuevo elemento div para la representación del último libro
  const bookCell = document.createElement("div");
  bookCell.classList.add("bookCell");

  //agregar el contenido del libro al elemento div

  bookCell.innerHTML = 
  `
  <h2>${latestBook.name}</h2>
  <p>Author: ${latestBook.author}</p>
  <p>Pages: ${latestBook.pages}</p>
  
  `;

  

  // Agregar el elemento div al grid

  presentBook.appendChild(bookCell);

  // Contar el número total de libros en la biblioteca

  const bookCount = myLibrary.length;

};

//estilos para el grid



