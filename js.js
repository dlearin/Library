//variables globales

let button = document.querySelector('.mostrarFormulario');
let enviar = document.querySelector('.enviar');
let nombre = document.querySelector('.nombre');
let author = document.querySelector('.año');
let pages = document.querySelector('.autor');
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
  cerrar();
});

//escucha para cerrar formulario

function cerrar(){ 
  enviar.addEventListener('click',function(){

  document.getElementById('modal').style.display = 'none';

})
};

//

let myLibrary = [];

function Book(name, author, pages){
  // the constructor...
  name = name;
  author = author;
  pages = pages;
};

function addBookToLibrary(){
  // do stuff here
    
 

  Book();
};


const HarryPotter = new Book("HarryPotter", "Uno", "734");

