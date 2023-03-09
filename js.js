//variables globales

let button = document.querySelector('.mostrarFormulario');
let enviar = document.querySelector('.enviar');
let nombre = document.querySelector('.nombre');
let author = document.querySelector('.año');
let pages = document.querySelector('.autor');
let formulario = document.querySelector('form');
let inputNombre = null;
let inputAuthor = null;
let inputPages = null;


//funciones de escucha//

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
  formulario.reset();
  cerrar();
});

//escucha para cerrar formulario

function cerrar(){ 
  enviar.addEventListener('click',function(){

  document.getElementById('modal').style.display = 'none';

})
};

/**
 * Adding a new book
 */

//creating library array

let myLibrary = [];

//creating function to create a new book

function Book(name, author, pages){
  // the constructor...
  this.name = name;
  this.author = author;
  this.pages = pages;
};

function addBookToLibrary(inputNombre, inputAuthor,inputPages){

  let Libro = new Book(inputNombre, inputAuthor,inputPages);
  myLibrary.push(Libro);

 };

//function to display books

function displayBooks(){

};

