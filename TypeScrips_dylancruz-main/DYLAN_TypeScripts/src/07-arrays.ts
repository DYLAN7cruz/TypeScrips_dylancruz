let arreglo = [1,2,3,4,5,6,7];

//metodo Push agregar un elemento al final
arreglo.push(20);
console.log(arreglo);

//no se puede agregar un tipo string al arreglo  arreglo.push("10");


let meses: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];

// no se puede operar datos tipo string:  
//meses.map(item => item * 2);
arreglo.map(item => item * 2);

//Definir arrays de varios tipos de datos:

let mezclado: (number | string)[] = ["Hola mundo", 1, 2, 3, "Pedro"];

console.log(mezclado);

(() => {
  let mezcla: (number | string | boolean | object | any)[] = [12, 1, 2, 4344, "Sting", "Ejemplo", 'hi mama', true, false, '', null]
  
  //Agregar cosas
  mezcla.push({});
  mezcla.push(null);
  mezcla.push({});

  console.log(mezcla);

}
)