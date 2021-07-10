function smallestCommons(arr) {
    let array = fillRange(arr);
    let result = findMCM(array);
    return result;
  }
  
  
console.log(smallestCommons([2,10]));

// toma el array, lo orderna y crea un nuevo array con los numeros entre el rango dado
function fillRange(arr) {
    let arrSort = arr.sort((a,b) => a - b);
    let init = arr[0];
    let end = arr[1];
    let fillArray = [];
    for(; init <= end; init += 1) {
        fillArray.push(init);
    }
    return fillArray;
}

// chequea si todos los numeros del array son divisibles por el mismo numero, teniendo como referencia la variable i
function findMCM(arr) {
    let i = 2;
    while (!arr.every(el => i % el === 0)) {
        i += 1;
    }
    return i;
}


// Múltiplo común más pequeño
// Encuentra el múltiplo común más pequeño de los parámetros proporcionados que pueden dividirse equitativamente por ambos, así como por todos los números consecutivos del rango entre estos parámetros.

// El rango será un arreglo de dos números que no necesariamente estarán en orden numérico.

// Por ejemplo, si se dan 1 y 3, encuentra el múltiplo común más pequeño de 1 y 3 que también es dividido por todos los números entre 1 y 3. La respuesta sería 6.