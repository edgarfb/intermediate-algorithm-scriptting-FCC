function pairElement(str) {
    let checkStr = str.split('');
    let variantes = [['A','T'], ['T', 'A'], ['C','G'], ['G', 'C']];
    let result = [];
  
    checkStr.forEach(el => {
      variantes.filter(adnEl => {
        if(el === adnEl[0]) {
          result.push(adnEl);
        }
      });
    });
    return result;
  }
  
  console.log(pairElement("GCG"));
  
  console.log(pairElement("CTCTA")); 
  
  // debe devolver [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
  
  
  
  // Emparejamiento de ADN
  // A la cadena de ADN le falta el elemento de emparejamiento. Toma cada carácter, obtén su par y devuelve los resultados como un arreglo bidimensional.
  
  // Par de bases son un par de AT y CG. Haz coincidir el elemento que falta con el carácter proporcionado.
  
  // Devuelve el carácter proporcionado como primer elemento de cada arreglo.
  
  // Por ejemplo, la entrada GCG, devolverá [["G", "C"], ["C","G"], ["G", "C"]]
  
  // El carácter y su par se emparejan en un arreglo, y todos los arreglos se agrupan en un arreglo encapsulado.