function uniteUnique(arr) {
    // This is the first argument and it will be allways the init array.
    let init = [...arguments[0]];
    // The rest of the arguments to compare with the init array
    let compare = Array.from(arguments).slice(1);
    let array = [];
    compare.forEach(el => array.push(...el));

    // Check if an value from array exist on the init array
    // if not >>> and to init array
    array.forEach( el => {
        if(!init.includes(el)) {
            init.push(el);
        }
    });

    return init;
  }
  
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

console.log(uniteUnique([1, 2, 3], [5, 2, 1]));

console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));


// Unión ordenada
// Escribe una función que tome dos o más arreglos y devuelve un nuevo arreglo de valores únicos manteniendo el orden original de los arreglos proporcionados.

// En otras palabras, todos los valores presentes de todos los arreglos deben incluirse en su orden original, pero sin duplicados en el arreglo final.

// Los números únicos deben ser ordenados según su orden original, pero el arreglo final no debe ordenarse según el orden numérico.

// Revisa las pruebas de afirmación para ver ejemplos.