function myReplace(str, before, after) {
    let strToFind = arguments[1];
    let strReplace = arguments[2];
    
    let regEx = new RegExp(strToFind, 'gi');
  
    // Use this to check if the first letter is upperCase
    let check = str.match(regEx).join('')[0];
    
  
    // Checking if is upperCase or not
    if(check === check.toUpperCase()) {
      strReplace = strReplace.replace(strReplace[0], strReplace[0].toUpperCase());
    }
    else {
      
      strReplace = strReplace.toLowerCase();
    }
  
    
  
  
    return str.replace(regEx, strReplace);
  }
  
  // console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
  
  console.log(myReplace("I think we should look up there", "up", "Down"));
  
  
  // Busca y reemplaza
  // Realiza una búsqueda y reemplaza en la oración usando los argumentos proporcionados y devuelve la nueva oración.
  
  // El primer argumento es la frase sobre la que se va a realizar la búsqueda y el reemplazo.
  
  // El segundo argumento es la palabra que se reemplazará (antes).
  
  // El tercer argumento es lo que reemplazará el segundo argumento (después).
  
  // Note: Mantén la capitalización del primer carácter en la palabra original cuando lo estés reemplazando. Por ejemplo, si quieres reemplazar la palabra Book por la palabra dog, debe ser reemplazada como Dog
  