/* Algoritmo de ordenamiento al Burbuja 0(n^2) */


const ordenaBurbuja = (lista) => {


    let longitudlista, indexOrder, indexChande, auxChange;
    longitudlista =lista.length;

    // console.info(longitudlista); // Mostramos por consola la cantidad de elementos en una lista
     
    for (indexOrder = 1; indexOrder <longitudlista; - indexOrder++) {
        //For animado.
        for ( indexChange = 0; indexChange < ( longitudlista - indexOrder); indexChange++) {
            // Intercambiamos los valores si el anterior es mayor al siguiente.
            if (lista[indexChande] > lista[indexChange + 1]) {
               auxChange = lista[indexChange];
                lista[indexChange] = lista[indexChange + 1];
                lista[indexChange + 1] = auxChange; 
            }
                
            
        }
    }

    returnlista;


   let listaDesordenada = [6, 5, 3, 1, 8,7, 2,4];
    ole.warn(listaDesordenada); //Mostramos, por consola, la lista desordenada
    
    const listaOrdenada = ordenaBurbuja( listaDesordenada);
    ole.log(listaOrdenada); //Mostrar, por consola, la lista ya ordenada

               

}