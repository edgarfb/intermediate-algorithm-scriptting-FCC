
function addTogether() {
    let args = [...arguments];
    console.log(args)
    let nn = args[0];
    if(!isNumber(args)) {
      return undefined;
    }
    else if(args.length < 2) {
      if(typeof args[0] === 'number') {
        let result;
        return function suma(n) {
          result = n + nn;
          if(typeof result === 'string') {
            return undefined;
          }
          else {
            return result;
          }
        };
      }
    }
    else {
      return args[0] + args[1];
    }
  }
  function isNumber(arr) {
    return arr.every(el => typeof el === 'number');
  }
  
  console.log(addTogether(2)([3]));
  console.log(addTogether(5)(7));
  // console.log(addTogether(5)(7));
  
  // Argumentos opcionales
  // Crea una función que sume dos argumentos. Si sólo se proporciona un argumento, entonces devuelve una función que espera un argumento y devuelve la suma.
  
  // Por ejemplo, addTogether(2, 3) debe devolver 5 y addTogether(2) debe devolver una función.
  
  // Si se llama a esta función devuelta con un solo argumento, se obtendrá la suma:
  
  // var sumTwoAnd = addTogether(2);
  // sumTwoAnd(3) devuelve 5.
  
  // Si cualquiera de los dos argumentos no es un número válido, devuelve undefined.