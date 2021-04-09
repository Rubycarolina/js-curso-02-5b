/* Algoritmo de ordenamiento al Burbuja 0(n^2) */


const ordenaBurbuja = (lista) => {


    let longitudlista, indexOrder, indexChange, auxChange;
    longitudlista =lista.length;

    // console.info(longitudlista); // Mostramos por consola la cantidad de elementos en una lista
     
    for (indexOrder = 1; indexOrder <longitudlista; indexOrder++) {
        //For animado.
        for ( indexChange = 0; indexChange < ( longitudlista - indexOrder); indexChange++) {
            // Intercambiamos los valores si el anterior es mayor al siguiente.
            if (lista[indexChange] > lista[indexChange + 1]) {
               auxChange = lista[indexChange];
                lista[indexChange] = lista[indexChange + 1]; 
                lista[indexChange + 1] = auxChange; 
            }
                
            
        }
    }

    return lista;

}
   let listaDesordenada = [6, 5, 3 ];
    console.warn(listaDesordenada); //Mostramos, por consola, la lista desordenada
    
    const listaOrdenada = ordenaBurbuja( listaDesordenada);
    console.log(listaOrdenada); //Mostrar, por consola, la lista ya ordenada

               

