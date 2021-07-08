// Suma todos los números en un rangoAprobado

function sumAll(arr) {
    // create a copy from arr
    let sortArr = arr.splice(0).sort((a,b) => a - b);
    // index start  ---- indez end  I use this to the for loop
    let i = sortArr[0];
    let end = sortArr[1];
  
    // make a new arr with all the numbers between the arr given as argument
    let rangoArr = []; 
    for(i; i <= end; i += 1) {
      rangoArr.push(i);
    }
    // sum all the numbers and return it
    return rangoArr.reduce((acc, currentValue) => {
      return acc + currentValue;
    });
  }
  
  console.log(sumAll([1,4]));
  
  // Te pasaremos un arreglo de dos números. Devuelve la suma de estos dos números más la suma de todos los números entre ellos. El número más bajo no siempre será el primero.
  
  // Por ejemplo, sumAll([4,1])> debe devolver 10 porque la suma de todos los números entre 1 y 4 (ambos incluidos) es 10.
  