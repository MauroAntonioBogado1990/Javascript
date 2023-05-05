//2- Escribir una funcion que reciba 2 array y devuelva un array con todos 
//los elementos que coinciden entre ellos
//creacion de varaibles de ejemplo, para utilizar posteriormente
let pri = [2,6,8,4,"a",2];
let seg = ["a",3,4,5,7];
let ter = [];
//recorrido de los arrays para la busqueda de las variables
for ( i = 0; i < pri.length; i++){

let existeRepetido = seg.find(element => element == pri[i]);

if(existeRepetido != undefined ){
     ter.push(existeRepetido);    
}}

console.log("Los elementos repetidos en los dos arrays son " + ter.length +  " elementos: " + ter);