
// crearemos una funcion llamadda repetir

function repetir(nombre, veces ) {

    /**
     * imprimimos nombre en el numero de vsc que indique veces
     * estos son unos comentarios especiales para indicar
     *  a otros programadores que hace nuestra funcion.
     * @author Ruby Carolina
     * @version 0.1.0
     * @param {string} nombre
     * @param {number} veces
     * @return {none}
     */

    // crearemos un ciclo for 
    for (let index = 1; index < veces; index++) {
// la variable index se va incrementando en 1
// hata que index < veces deje de ser cierto.
// mientras vamos agregando elementos p con el nombre
// a nuestro socumneto html.
let element = document.createElement('p');

element.innerText=(nombre)

document.body.appendChild(element);

    }

}

const nom = prompt ("escribe tu nombre");

const vcs = parseInt(prompt("Escribe la vsc que lo mostraras"));

repetir(nom, vcs);