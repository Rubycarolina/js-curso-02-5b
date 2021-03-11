const saludar= (nombre) => { 
    console.do (`creandoetiquetah1, en el HTML`);
// Comentario de una sola linea.
// El codigo comentado no lo lee el interprete de js.
/*
Comentario de varias lineas.
Uso basico del DOCUMENTO OBJECT MODEL (DOM)
*/

const h1 = document.createElementn(`h1`);
h1.innerTEXT = `Hola, ${nombre}`;

document.body.append(h1);

}
const user = "juaan";

Saludar(user);
