function periodoOrbital(arr) {
    let newArr = [];
    arr.forEach(el => {
        newArr.push({name: el.name, orbitalPeriod: getOrbital(el.avgAlt)});
    });
    return newArr;
}



function getOrbital(altProm) {
    let piToPow = Math.PI * 2;
    let earthRad = 6367.4447 ;
    let altPromedio = Math.pow(earthRad + altProm, 3);
    let GM = 398600.4418;
    return Math.round(piToPow * (Math.sqrt(altPromedio / GM)));
}

console.log(periodoOrbital([{name : "sputnik", avgAlt : 35873.5553}]))



// Mapea el DebrisAprobado
// Devuelve un nuevo arreglo que transforma la altitud media de los elementos en sus periodos orbitales (en segundos).

// El arreglo contendrá objetos en el formato {name: 'name', avgAlt: avgAlt}.

// Puedes leer sobre los períodos orbitales en Wikipedia.

// Los valores deben redondearse al número entero más cercano. El cuerpo orbitado es la Tierra.

// El radio de la tierra es de 6367.4447 kilómetros y el valor GM de la tierra es de 398600.4418 km3s-2.
