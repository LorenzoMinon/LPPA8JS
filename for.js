/*
a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando unbucle for de JavaScript para mostrar una alerta utilizando cada una de laspalabras.
b. Al array anterior convertir la primera letra de cada palabra en mayúscula ymostrar una alerta por cada palabra modificada.
c. Crear una variable llamada “sentence” que tenga un string vacío, luego al arraydel 
punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro dela variable sentence. 
Al final mostrar una única alerta con la cadena completa.d. Crear una array vacío y con un bucle for de 10 repeticiones. 
Llenar el array conel número de la repetición, es decir que al final de la ejecución del bucle fordebería haber 10 elementos dentro del array, desde el número 0 hasta al número9.
 Mostrar por la consola del navegador el array final (utilizar console.log
    */

//a

Array2 = ["Hola","Capo","Nice","rosario","russo"]

for(i in Array2){
    console.log(Array2[i])
}

//b
Array2 = ["Hola","capo","Nice","rosario","Russo"]
for(i in Array2){
    nuevo =Array2[i].substring(0,1).toUpperCase() + Array2[i].substring(1,Array2[i].lenght)
    console.log(nuevo)
}

//c

sentence = ""
Array2 = ["Hola","Capo","Nice","Rosario","Russo"]
for(i in  Array2){
    sentence = Array2[i]
    console.log(sentence)
}



