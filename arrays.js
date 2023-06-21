/*
a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 
mostrar porconsola los meses 5 y 11 (utilizar console.log).
b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
e. Invertir el orden del array (utilizar reverse).
f. Unir todos los elementos del array en un único string donde cada mes esteseparado por un guión - (utilizar join).
g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre(utilizar slice)
*/
array= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log(array[4] +" y " + array[10])

//b
arrayordenado = array.sort()
console.log(arrayordenado)

array.unshift("NotEnero")
array.push("NotDiciembre")
console.log(array)

//D
array= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

array.shift()
arraynuevo= array.pop()

//E
array.reverse()
console.log(array)

//F
array= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

newarray = array.join(",")
console.log(newarray)
console.log(typeof(newarray))