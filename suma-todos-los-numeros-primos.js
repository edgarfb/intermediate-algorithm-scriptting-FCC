function sumPrimes(num) {
    let i = 2;
    let primos = [];
    let result = 0;
    for(; i <= num; i += 1) {
        if(isPrime(i)) {
            primos.push(i);
        }
    }
    result = primos.reduce((a,b) => a + b);
    return result;
    
  }
  
console.log(sumPrimes(10));

function isPrime(num) {
    if(num === 1) {
        return false;
    }
    let i = num - 1;
    for(; i > 1; i -= 1) {
        
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}


// Suma todos los números primos
// Un número primo es un número entero mayor que 1 con sólo dos divisores: 1 y el propio número. Por ejemplo, 2 es un número primo porque sólo es divisible entre 1 y 2. Por el contrario, 4 no es primo ya que es divisible entre 1, 2 y 4.

// Reescribe sumPrimes para que devuelva la suma de todos los números primos que sean menores o iguales a num.


