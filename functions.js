// Funcionesa. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
// Ejecutar la función y guardar el resultado en una variable, mostrando el valor dedicha variable en la consola del navegador.
// b. A la función suma anterior, agregarle una validación para controlar si alguno de 
// los parámetros no es un número,
// mostrar una alerta aclarando que uno de losparámetros tiene error y retornar el valor NaN como resultado.
// c. Crear una función validate integer que reciba un número como parámetro ydevuelva verdadero si es un número entero.
// d. A la función suma del ejercicio b agregarle una llamada que valide que losnúmeros sean enteros.
// En caso que haya decimales mostrar un alerta con elerror y retorna el número convertido a entero (redondeado).
// e. Convertir la validación del ejercicio 6d) en una función separada y 
// llamarladentro de la función suma probando que todo siga funcionando igual.

// A

function suma(a, b){
    
    return a+b;
}

var resultado = a + b
console.log(resultado)


// B 

let suma= (a,b)
    if(typeof a !== "number" || typeof b !== "number"){
        alert("Uno de los parámetros no es un número")
        return NaN
    }  
    return a+b; 

// C

function ValidateInteger(num){
    num = 5
    return Number.isInteger(num)
}

let prueba = ValidateInteger(5)
console.log(prueba)

let suma = (num1, num2) => {
    if (!validateInt(num1) || !validateInt(num2)) {
      alert("Uno de los numeros no es entero");
      return Math.round(num1) + Math.round(num2);
    }
    return num1 + num2;
  };
  let resultado = suma(0.2, 1.5);
  console.log(resultado);

// E
let validateIntE = (num) => {
    return Number.isInteger(number);
  };
  let suma = (num1, num2) => {
    if (!validateIntE(num1) || !validateIntE(num2)) {
      alert("Uno de los numeros no es entero");
      return Math.round(num1) + Math.round(num2);
    }
    return num1 + num2;
  };