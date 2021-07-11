function steamrollArray(arr) {
    // filtro aquellos elementos que son arrays
    let helper = arr.filter(el => Array.isArray(el));
    // filtro aqueloos elementos que no son array
    let notArr = arr.filter(el => !Array.isArray(el));
  
    let result = helper.reduce((a,b) => {
      return a.concat(Array.isArray(b) ? steamrollArray(b) : b);
    },[])
    return notArr.concat(result);
  }
  
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]));
  
  
  // Aplanadora
  // Aplana un arreglo anidado. Debes tener en cuenta los diferentes niveles de anidación.
  
  
  
  
  