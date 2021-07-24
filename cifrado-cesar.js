function rot13(str) {
    let aToM = 'ABCDEFGHIJKLM'.split('');
    let nToZ = 'NOPQRSTUVWXYZ'.split('');
    let splited = str.split('');
    splited.forEach((el, i) => {
        if(aToM.includes(el)) {
            splited[i] = nToZ[aToM.indexOf(el)];
        }
        else if(nToZ.includes(el)) {
            splited[i] = aToM[nToZ.indexOf(el)];
        }
    });
    
    
    return splited.join('');
  }
  
console.log(rot13("SERR YBIR?"));

// recursos
// https://www.xataka.com/historia-tecnologica/asi-rot13-algoritmo-cifrado-simple-que-ha-revivido-para-ocultar-spoilers


// Cifrado César
// Uno de los cifrados más simples y conocidos es el cifrado César, también conocido como cifrado por desplazamiento. En un cifrado por desplazamiento los significados de las letras se desplazan por una cantidad determinada.

// Un uso moderno común es el cifrado ROT13, donde los valores de las letras son desplazados por 13 lugares. Así que A ↔ N, B ↔ O y así sucesivamente.

// Escribe una función que reciba una cadena codificada en ROT13 como entrada y devuelva una cadena decodificada.

// Todas las letras estarán en mayúsculas. No transformes ningún carácter no alfabético (espacios, puntuación, por ejemplo), pero si transmítelos.

