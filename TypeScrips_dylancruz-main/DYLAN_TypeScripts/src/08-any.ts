let variableRara: any ;

variableRara = 100;
variableRara = "string";
variableRara = [];
variableRara = {};
variableRara = null;
variableRara = true;

//ANY como primitivo
//Caso 1

let myDynamicVar: any;
myDynamicVar = "hola";
const oterString = (myDynamicVar as string).toLowerCase();
console.log(myDynamicVar);

//Caso2
myDynamicVar = 234;
const number = (<number>myDynamicVar).toFixed();
console.log(myDynamicVar)
