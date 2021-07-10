
function fearNotLetter(str) {
    // String de comparacion
    let abc = 'abcdefghijklmnopqrstuvwxyz';
    // utilizo la primera y ultima letra para RegEx
    let i = str[0];
    let end = str[str.length - 1];
    // filtro el argumento str desde ei inicio al fin
    // el resultado de la busqueda lo vulevo a filtrar para rescatar la letra que falta y devolverla
    // God save RexExp!!!
    let abcUser = `[^${str}]`;
    let r = `[${i}-${end}]`;
    let reEx = new RegExp(r, 'g');
    let reExUser = new RegExp(abcUser, 'g');
  
    if(abc.length === str.length) {
      return undefined;
    }
    
  
    
    let compare = abc.match(reEx);
    let result = compare.join('').match(reExUser).join('');
  
  
    return result;
  }
  
  console.log(fearNotLetter("abce"));
  
  
  
  
  
  
  
  
  
  // Letras faltantes
  // Encuentra la letra que falta en la siguiente cadena de letras y devuélvela.
  
  // Si todas las letras están presentes en la cadena, devuelve undefined.