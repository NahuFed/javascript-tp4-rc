// 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
// ● ISBN
// ● Título
// ● Autor
// ● Número de páginas
// Crear sus respectivos métodos get y set correspondientes para cada propiedad.
// Crear el método mostrarLibro() para mostrar la información relativa al libro con el
// siguiente formato:
// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

const determinarMayorNumeroDePaginas = (libro1,libro2) =>{
  return libro1.obtenerNumeroDePaginas >= libro2.obtenerNumeroDePaginas? `El libro ${libro1.obtenerTitulo} tiene mas paginas`: `El libro ${libro2.obtenerTitulo} tiene mas paginas`
}

class Libro {
  constructor(isbn, titulo, autor, numeroDePaginas) {
    this._isbn = isbn;
    this._titulo = titulo;
    this._autor = autor;
    this._numeroDePaginas = numeroDePaginas;
  }

  set modificarIsbn(isbn) {
    this._isbn = isbn;
  }
  get obtenerIsbn() {
    return this._isbn;
  }
  set modificarTitulo(titulo) {
    this._titulo = titulo;
  }
  get obtenerTitulo() {
    return this._titulo;
  }
  set modificarAutor(autor) {
    this._autor = autor;
  }
  get obtenerAutor() {
    return this._autor;
  }
  set modificarNumeroDePaginas(numeroDePaginas) {
    this._numeroDePaginas = numeroDePaginas;
  }
  get obtenerNumeroDePaginas() {
    return this._numeroDePaginas;
  }

  mostrarLibro() {
    return document.write(
      `El libro ${this._titulo} con ISBN ${this._isbn} creado por el autor ${this._autor} tiene ${this._numeroDePaginas} páginas<hr>`
    );
  }
}

let elPrincipito = new Libro(
  9783140464079,
  "El Principito",
  "Antoine de Saint-Exupéry",
  120
);
let harryPotter = new Libro(
  9788498381405,
  "Harry Potter y las reliquias de la muerte",
  "J.K. Rowling",
  640
);

harryPotter.mostrarLibro()
elPrincipito.mostrarLibro()

console.log(determinarMayorNumeroDePaginas(elPrincipito,harryPotter))