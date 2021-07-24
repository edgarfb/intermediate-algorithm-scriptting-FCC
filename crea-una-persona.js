var Person = function(firstAndLast) {
    // Cambia solo el código debajo de esta línea
    // Completa el método de abajo e implementa los otros de manera similar
    let firstName = firstAndLast.split(' ')[0];
    let lastName = firstAndLast.split(' ')[1];
    let fullName = firstAndLast;
  
    this.getFirstName = function() {
      return firstName;
    }
    this.setFirstName = function(firstNameArg) {
      firstName = firstNameArg;
    }
    this.getLastName = function() {
      return lastName;
    }
    this.setLastName = function(lastNameArg) {
      lastName = lastNameArg;
    }
    this.getFullName = function() {
      return firstName + ' ' + lastName;
    }
    this.setFullName = function(fullNameArg) {
      fullName = fullNameArg;
      firstName = fullNameArg.split(' ')[0];
      lastName = fullNameArg.split(' ')[1];
      
    }
  };
  
  var bob = new Person('Bob Ross');
  
  
  console.log(Object.keys(bob).length);
  
  
  // Crea una persona
  // Completa el constructor de objetos con los siguientes métodos:
  
  // getFirstName()
  // getLastName()
  // getFullName()
  // setFirstName(first) Done
  // setLastName(last)  Done
  // setFullName(firstAndLast) Done
  // Ejecuta las pruebas para ver el resultado esperado para cada método. Los métodos que toman un argumento deben aceptar sólo un argumento y tiene que ser una cadena. Estos métodos deben ser el único medio disponible para interactuar con el objeto.