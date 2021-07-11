function binaryAgent(str) {
    // separo los numero binario
    let binary = str.split(' ');
    // se convierte a un numero decimal
    // se usa ese numero para transormar su valor(UNICODE en este caso) a un string
    
    return binary.map(el => String.fromCharCode(Number.parseInt(el,2))).join('');
  }
  
  console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));
  
  
  // Agentes binarios
  // Devuelve una frase traducida al inglés de una cadena binaria pasada.
  
  // La cadena binaria estará separada por espacios.
  