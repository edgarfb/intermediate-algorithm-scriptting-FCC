// Los caracteres no deben ser letras

// Deben incluir un maximo de 10 caracteres y/o numeros

// Si se agrega un codigo de area este debe ser el numero 1

// Pueden incluir 1 guion despues de tres numeros

// Pueden incluir parentesis en los primeros tres numeros


function telephoneCheck(str) {
    let rex = /^(((?=1)\d\s?)?\(\d{3}\)-?\s?\d{3}-?\d{4})$|^\d{10}$|^(((?=1)\d\s)\d{3}-?\s?\d{3}-?\s?\d{4})$|^(\d{3}-\d{3}-\d{4})$|^(((?=1)\d\s?)\(\d{3}\)\s?\d{3}-\d{4})$/;
    
    return rex.test(str);
  }
  
console.log(telephoneCheck("1 555 555 5555"));


// (^((?=1)[0-9]{11})+$) Tiene en cuenta si el numero empieza con 1 y tiene un maximo de 11 caracteres. FUNCIONA

// Validador de números telefónicos
// Devuelve true si la cadena pasada concuerda con un número de teléfono válido en Estados Unidos.

// El usuario puede completar el campo del formulario de la forma que elija, siempre que tenga el formato de un número estadounidense válido. Los siguientes ejemplos son de formatos válidos para números estadounidenses (consulte las pruebas a continuación para otras variantes):

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// Para este desafío se te presentará una cadena como 800-692-7753 o 8oo-six427676;laskdjf. Tu trabajo es validar o rechazar el número de teléfono estadounidense basado en cualquier combinación de los formatos proporcionados arriba. El código de área es obligatorio. Si el código de país es proporcionado, debes confirmar que el código de país es 1. Devuelve true si la cadena es un número de teléfono estadounidense valido; de lo contrario devuelve false.