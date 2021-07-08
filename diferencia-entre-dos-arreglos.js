function diffArray(arr1, arr2) {
    var newArr = [];
  
    let test1 = arr1.filter(el => arr2.includes(el) !== true);
    let test2 = arr2.filter(el => arr1.includes(el) !== true);
  
    newArry = test1.concat(test2);
    return newArry;
  }
  
  console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
  
  
  
  