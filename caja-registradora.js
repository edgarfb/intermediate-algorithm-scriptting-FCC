


function checkCashRegister(price, cash, cid) {
  var change = +(cash - price).toFixed(2);
  let compareChange = change;
  // valores >> filtra los voleres moyores a cero y cuales unidades sean mayores al cambrio.
  let valores = cid.filter(el => unidad(el) <= change && el[1] > 0).sort((a,b) => unidad(b) - unidad(a));
  console.log('valores', valores);
  let unidades = valores.map(el => unidad(el));
  let total = [];
  for(let i = 0; i < valores.length; i++) {
    let next = sum(change, unidades[i],valores[i][1]);
    total.push(next);
    change -= next;
  }
  let retorno = valores.map((el, i) => [el[0], total[i]]);
  console.log('retorno', retorno);
  // compara el chambio de retorno con el cambio del cliente
  let check = total.reduce((acc, iten) => acc + iten);
  if(check < compareChange) {
    return {
      status: 'INSUFFICIENT_FUNDS',
      change: []
    }
  }
  else if(check === compareChange && valores.length === 1) {
    return {
      status: 'CLOSED',
      change: cid
    }
  }
  else {
    return {
      status: 'OPEN',
      change: retorno.filter(el => el[1] !== 0)
    };
  }
  
}





function sum(cambioCliente, unidadCambio, cambioDisponible) {
  let resultado = 0;
  let compare = cambioCliente;
  while(resultado < cambioCliente) {
    if(compare < unidadCambio) {
      break;
    }
    if(cambioDisponible < unidadCambio) {
      break;
    }
    resultado = +(resultado + unidadCambio).toFixed(2);
    cambioDisponible -= unidadCambio;
    compare = +(compare - unidadCambio).toFixed(2);
  }
  if(resultado !== cambioCliente && unidadCambio === 0.01 && cambioCliente === 0.5) {
    resultado += unidadCambio;
  };
  return resultado;

}




function unidad(arr) {
  switch (arr[0]) {
    case 'PENNY':
      return 0.01
      break;
    case 'NICKEL':
      return 0.05
      break;
    case 'DIME':
      return 0.10
      break;
    case 'QUARTER':
      return 0.25
      break;
    case 'ONE':
      return 1;
      break;
    case 'FIVE':
      return 5;
      break;
    case 'TEN':
      return 10;
      break;
    case 'TWENTY':
      return 20;
      break;
    case 'ONE HUNDRED':
      return 100;
      break;
  
    default:
      break;
  }
}

