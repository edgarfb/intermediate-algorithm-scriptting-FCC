function dropElements(arr, func) {
    let i = 0;
    let result = [];

    for(; i < arr.length; i += 1) {
        // en cuanto la condicion se cumpla se retorna un nuevo array desde esa posicion al final.
        if(func(arr[i])) {
            return result = arr.slice(i);
        };
    }
    return result;
  }
  
  dropElements([1, 2, 3], function(n) {return n < 3; });

  console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;})); 


  console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));


  console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));


console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}));



//   Déjalo caer
// Dado el arreglo arr, itera y elimina cada elemento comenzando desde el primer elemento (el índice 0) hasta que la función func devuelva true cuando el elemento iterado se pasa a través de él.

// Luego devuelve el resto del arreglo una vez que se cumpla la condición, de lo contrario, arr debe devolverse como un arreglo vacío.

