function spinalCase(str) {
    let txt = str;
    let char = txt.match(/([a-z]+|[A-Z][a-z]+)/g);
    
    return char.join('-').toLowerCase();
  }
  
  console.log(spinalCase('This Is Spinal Tap'));
  
  console.log(spinalCase("thisIsSpinalTap"));
  
  console.log(spinalCase("Teletubbies say Eh-oh"));
  
  console.log(spinalCase("AllThe-small Things"));
  
  
  // Spinal caseAprobado
  // Convierte una cadena a spinal case. Spinal case significa todas-las-palabras-en-minúscula-unidas-por-guiones.