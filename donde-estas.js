function whatIsInAName(collection, source) {

    // Obtengo el primer argumento el array[0] de objetos
    let obj = [...arguments[0]];
    // obtengo argumentos
    let args = Array.from(arguments).splice(1);
    // guardo las keys de los argumentos objetos
    let keys = []; 
    args.forEach(el => keys = (Object.keys(el)));
  
  // itero por los arguentos y filtro para obtener un nuevo array
    keys.forEach((key, index) => {
      obj = obj.filter(o => o.hasOwnProperty(key));
      obj = obj.filter(o => o[key] === args[0][key]);
    });
    
    return obj;
  }
  
  
  
  console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));
  
  
  // debe devolver [{ "apple": 1, "bat": 2, "cookie": 2 }].