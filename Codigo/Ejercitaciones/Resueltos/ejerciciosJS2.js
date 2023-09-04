/* ARGUMENTOS Y PARAMETROS
El parametro es la representacion simbolica de un valor
El argumento es el valor como tal.
Por ejemplo
En la funcion el area de un rectantulo tenemos
Area=Base*Altura
Los parametros son las palabras base y altura y los Argumentos son por ejemplo
3 y 1, entonces el valor de la base es 3 y el de la altura es 1. entonces 3 y 1 con los argumentos.
 */

const obtenerMayor = (x, y) => {
  // "x" e "y" son números enteros .
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  /* Metodos de MAth */
  return Math.max(x, y);
  /* return x>y?x:y
   */ // ternario
};
console.log(obtenerMayor(32, 45));

const mayoriaDeEdad = (edad) => (edad >= 18 ? "Allowed" : "Not allowed");
console.log(mayoriaDeEdad(19));
//Determinar si la persona según su edad puede ingresar a un evento.
//Si tiene 18 años ó más, devolver --> "Allowed"
//Si es menor, devolver --> "Not allowed"
/*   if (edad>=18){
return "Allowed"
  }else{
return "Not allowed"
  }
 */
//if ternario

const conection = (status) => {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico.
  //Cuando el estado es igual a 1, el usuario está "OnLine"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  /*   if (status==1){
    return "OnLine"
  } else if (status==2){
    return "Away"
  }else{
    return  "Offline"
  } */

  // ternario
  /*   return status==1?"OnLine": status==2? "Away" :  "Offline" */

  // swicth
  switch (status) {
    case 1:
      return "OnLine";

    case 2:
      return "Away";

    default:
      return "Offline";
  }
};
console.log(conection(4));

const saludo = (idioma) => {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  /*   switch (idioma.toLowerCase()) {
    case "aleman":
      return "Guten Tag!"
    case "mandarin":
     return "Ni Hao!"
    case "ingles":
      return "Hello!"
    default:
      return "Hola!"
   
  } */

  if (idioma == "aleman") {
    return "Guten Tag!";
  } else if (idioma == "mandarin") {
    return "Ni Hao!";
  } else if (idioma == "ingles") {
    return "Hello!";
  } else {
    return "Hola";
  }

  //TAREA if ternario 


};

console.log(saludo("Mandarin"));

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuelve --> "This is blue"
  //En caso que el color recibido sea "red", devuelve --> "This is red"
  //En caso que el color recibido sea "green", devuelve --> "This is green"
  //En caso que el color recibido sea "orange", devuelve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  switch (color) {
    case 'blue':
        return ("This is blue");
   
    case 'red':
        return ("This is red");
  
    case 'green':
        return ("This is green");
   
    case 'orange':
        return ("This is orange");
     
    default:
        return ("Color not found");
     
}
}
console.log(colors("blue"));

const esDiezOCinco = numero=>
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
numero ==10 || numero ==5

console.log(esDiezOCinco(1));

const estaEnRango = numero =>{
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
return numero >20 && numero <50
}
console.log(estaEnRango(45));

const esEntero= numero=> 
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
 numero === Math.floor (numero)

console.log(esEntero(1));

const fizzBuzz = numero => {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  let retorno = ""
  if (numero%3===0) retorno += "fizz";
   //retorno = retorno +   "fizz"
  if(numero%5===0) retorno += "buzz";     
  return retorno || numero

}
//resolver si se pasa un numero 0
console.log(fizzBuzz(15));

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos.
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false.

  if (num1<0||num2<0||num3<0){
    return "Hay negativos"
  } else if (num1===0||num2===0||num3==0){
    return "error"
  }else if (num1>num2&&num1>num3&&num1>0){
    return "numero 1 es mayor y positivo"
  }else if (num3>num1&&num3>num2){
    return ++num3
  }else{
    return false
  }
/*   const operadoresLogicos = (num1, num2, num3) => {
    return num1 ===0 || num2===0 ||num3===0 ? "Error" : num1<0 || num2<0 || num3<0 ? "Hay negativos" : num1>Math.max(num2,num3) ? "Número 1 es mayor y positivo" : num3>Math.max(num1,num2) ? ++num3 : false 
  } */
  
  //ternario
}
console.log(operadoresLogicos(0,4,-6)); 

const esPrimo = (numero) =>{
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  if (numero==0||numero==1){
    return false
  }
  for (let i=2;i<numero;i++){
    if(numero%i==0){
      return false
    }
  }
  return true

}
console.log(esPrimo(9));

function esVerdadero(valor) {
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero”
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  return valor ? "Soy verdadero" : "Soy falso"
}
console.log(esVerdadero(false))

const tablaDelSeis= ()=> {
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí
  let tabla = []
  for (let i = 0;i<=10;i++){
  tabla.push(6*i)
  }
return tabla
}
console.log(tablaDelSeis());

const tieneTresDigitos = (numero) =>{
  //Leer un número entero y determinar si tiene 3 dígitos.
  //Escribe tu código aquí
return numero >=100&&numero<1000
/* return String(numero).length==3 */
}
console.log(tieneTresDigitos(400));

const doWhile = (numero) => {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
let i = 0
do {
  numero += 5
  i++
}while (i<8)
return numero

}
console.log( doWhile(5));
