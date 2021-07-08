function translatePigLatin(str) {
    // separo la primer letra
    let firstCons = str.slice(0,1);
    let helper = '';
    // get the str with out the firs letter
    let newStr;
    // vocales para la comparacion
    let vocales = 'aeiouAEIOU'.split('');
    let result;
  
    
    let isVocal = vocales.includes(firstCons);
    if(isVocal) {
      newStr = str.split('');
      result = newStr.concat('way').join('');
    }
    else {
      helper = str.match(/^[^aeiou]+/)[0].split('')
      newStr = str.split('').splice(helper.length);
      result = newStr.concat(helper, 'ay').join('');
    }
  
    return result;
  }
  
  
  
  // console.log(translatePigLatin("glove"));
  console.log(translatePigLatin("california"));
  
  // Pig Latin (Latin de los cerdos)
  // Pig Latin (latin de los cerdos) es una manera de alterar las palabras en inglés. Las normas son las siguientes:
  
  // - Si una palabra comienza con una consonante, toma la primer consonante o grupo de consonantes, muévela al final de la palabra, y añade ay a ella.
  
  // - Si una palabra comienza con una vocal, solo añade way al final.
  
  // EG: hello =>>>> ellohay