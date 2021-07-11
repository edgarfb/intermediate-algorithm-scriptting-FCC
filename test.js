function truthCheck(collection, pre) {
  return collection.every(el => el[pre]);

}

console.log(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat"));


// Todo sea verdad
// Comprueba si el predicado (segundo argumento) es truthy en todos los elementos de una colección (primer argumento).

// En otras palabras, se te da una colección de arreglos de objetos. El predicado pre será una propiedad del objeto y debe devolver true si su valor es truthy. De lo contrario, devuelve false.

// En JavaScript, los valores truthy son valores que se traducen en true cuando se evalúan en un contexto booleano.

// Recuerda, puedes acceder a las propiedades del objeto mediante la notación de puntos o la notación de corchetes [].