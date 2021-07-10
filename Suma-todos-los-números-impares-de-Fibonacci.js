// 1,1,2,3,5,8,13,21,34




function sumfibo(limit) {
    // realizo la funcion de fibonacci
    let init = [0,1];
    let i = 2;
    for(; i <= limit; i += 1) {
        
        init[i] = init[i - 1] + init[i - 2];
    }
    // filtro el resultado de fibonacci a los <= a limit
    let result = init.filter(el => el % 2 !== 0 && el <= limit);
    // sumo los filtrados y retorno
    let total = result.reduce((a,b) => a + b);
    return total;
}


console.log(sumfibo(4));



// Suma todos los números impares de Fibonacci
// Dado un entero positivo num, devuelve la suma de todos los números impares de Fibonacci que son menores o iguales a num.

// Los dos primeros números en la secuencia de Fibonacci son 1 y 1. Cada número adicional en la secuencia es la suma de los dos números anteriores. Los seis primeros números de la secuencia de Fibonacci son 1, 1, 2, 3, 5 y 8.

// Por ejemplo, sumFibs(10) debe devolver 10 porque todos los números impares de Fibonacci menores o iguales a 10 son 1, 1, 3 y 5.
