/*Strings
a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo eltexto en mayúscula (utilizar toUpperCase).
b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevostring con los primeros 5 caracteres guardando el resultado en una nuevavariable (utilizar substring).
c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevostring con los últimos 3 caracteres guardando el resultado en una nueva variable(utilizar substring).
d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevostring con la primera letra en mayúscula
 y las demás en minúscula. Guardar elresultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase yel operador +).}
e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio enblanco. Encontrar la posición del primer espacio en blanco y guardarla en unavariable (utilizar indexOf).
f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres yalgún espacio entre medio). Utilizar los métodos de los ejercicios anteriores paragenerar un nuevo string que tenga la primera letra de ambas palabras
 enmayúscula y las demás letras en minúscula (utilizar indexOf, substring,toUpperCase, toLowerCase y el operador +).
 */

 var string1 = "abcdefghijkl"
 string1.toUpperCase

 //b
 var string2= "aaaaabbbbb"
 nuevostring = string2.substring(0,5)

 //c
 nuevostring1 = string2.substring(string2.length-3, string2.length)

 //d utilizar substring, toUpperCase, toLowerCase yel operador +)
 var string2= "aaaaabbbbb"
 var nuevoTexto = string2.substring(0, 1).toUpperCase() + string2.substring(1).toLowerCase()
 console.log(nuevoTexto)

 //e
 //e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio enblanco. 
 //Encontrar la posición del primer espacio en blanco y guardarla en unavariable (utilizar indexOf).

 var e= "Buenos días América"

 blank= e.indexOf(" ");
 console.log(blank)

 //f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres yalgún espacio entre medio). 
 //Utilizar los métodos de los ejercicios anteriores paragenerar un nuevo string que tenga la primera letra de ambas palabras
 //enmayúscula y las demás letras en minúscula (utilizar indexOf, substring,toUpperCase, toLowerCase y el operador +).
 var e= "Buenos días América"
 postspace= e.indexOf(" ")+1
 nuevostr= (e.substring(0,1).toUpperCase())+ e.substring(1,postspace) + (e.substring(postspace, postspace+1).toUpperCase()) + e.substring(postspace+1,e.lenght)
 console.log(nuevostr)
 