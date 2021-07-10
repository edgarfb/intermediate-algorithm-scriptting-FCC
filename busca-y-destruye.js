function destroyer(args) {
    // El primer argumento lo combierto a un array
    let arr = [...arguments[0]];
    // separo los argumentos a remover del array[0] a analizar
    let argsWithOutFirst = Array.from(arguments).slice(1);

    // uso cada argumento para filtrar el array
    argsWithOutFirst.forEach(el => {
        // sapra unicamente aquellos elementos que no son iguales
      arr = arr.filter(arrEl => el != arrEl);
      });
    return arr;
  
  }
  
  //
  console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
  
  
  
  
  // Busca y destruye
  // Se proporcionará un arreglo inicial (el primer argumento en la función destroyer), seguido de uno o más argumentos. Elimina todos los elementos del arreglo inicial que tengan el mismo valor que estos argumentos.
  
  // Nota: Tienes que utilizar el objeto arguments.