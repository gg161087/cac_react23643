// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hola Mundo";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 3;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

// "Return" la string provista: str
// Tu código:
const devolverString = (str) => str
console.log(devolverString("Hola Codo a Codo"));

// "x" e "y" son números
// Suma "x" e "y" juntos y devuelve el valor
// Tu código:
const suma = (x, y) => x+y;
console.log(suma(10,10));

// Resta "x" de "y" y devuelve el valor
// Tu código:
const resta = (x, y) => x-y;
console.log(resta(20,10));

// Multiplica "x" por "y" y devuelve el valor
// Tu código:
const multiplica = (x, y) => x*y
console.log(multiplica (10,2));

// Divide "x" entre "y" y devuelve el valor
// Tu código:
const divide = (x, y) => x/y
console.log(divide(10, 2));

// Devuelve "true" si "x" e "y" son iguales
// De lo contrario, devuelve "false"
// Tu código:
const sonIguales=(x,y)=>  x===y ? true : false;
console.log(sonIguales(10,11));

// Devuelve "true" si las dos strings tienen la misma longitud
// De lo contrario, devuelve "false"
// Tu código:
const tienenMismaLongitud = (str1, str2) => str1.length ===  str2.length;
console.log(tienenMismaLongitud("cuatro","123456"));

// Devuelve "true" si el argumento de la función "num" es menor que noventa
// De lo contrario, devuelve "false"
// Tu código: 
const menosQueNoventa = (num) => num<90;
console.log(menosQueNoventa(99));

// Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
// De lo contrario, devuelve "false"
// Tu código:
const mayorQueCincuenta = (num) => num>50
console.log(mayorQueCincuenta(51));

// Obten el resto de la división de "x" entre "y"
// Tu código:
const obtenerResto = (x, y) => x%y;
console.log(obtenerResto(22, 7));

// Devuelve "true" si "num" es par
// De lo contrario, devuelve "false"
// Tu código:
const esPar = (num) => num%2===0;
console.log(esPar(2))

// Devuelve "true" si "num" es impar
// De lo contrario, devuelve "false"
// Tu código:
const esImpar = (num) => num%2!==0;
console.log(esImpar(7));

// Devuelve el valor de "num" elevado al cuadrado
// ojo: No es raiz cuadrada!
// Tu código:
const elevarAlCuadrado = (num) => Math.pow(num,2);
console.log(elevarAlCuadrado(8));

// Devuelve el valor de "num" elevado al cubo
// Tu código:
const elevarAlCubo = (num) => Math.pow(num,3);
console.log(elevarAlCubo(3));

// Devuelve el valor de "num" elevado al exponente dado en "exponent"
// Tu código:
const elevar = (num, exponent) => Math.pow(num,exponent);
console.log(elevar(3, 3));

// Redondea "num" al entero más próximo y devuélvelo
// Tu código:
const redondearNumero = (num) => Math.round(num);
console.log( redondearNumero(1.5));

// Redondea "num" hacia arriba (al próximo entero) y devuélvelo
// Tu código:
const redondearHaciaArriba = (num) => Math.ceil(num);
console.log(redondearHaciaArriba(4.1));

//Generar un número al azar entre 0 y 1 y devolverlo
//Pista: investigá qué hace el método Math.random()
const numeroRandom = () => Math.random();
console.log(numeroRandom());

//La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
//Si el número es positivo, devolver ---> "Es positivo"
//Si el número es negativo, devolver ---> "Es negativo"
//Si el número es 0, devuelve false
const esPositivo = (numero) => numero > 0? "Es positivo": (numero < 0)? "Es Negativo": console.log(false);
console.log(esPositivo(10));

// Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
// Ejemplo: "hello world" pasaría a ser "hello world!"
// Tu código:
const agregarSimboloExclamacion = (str) => `${str}!`;
console.log(agregarSimboloExclamacion("estudiar como se juega a la papa"));

// Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
// Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
// Tu código:
const combinarNombres = (nombre, apellido) => `Hola hoy voy a hablar sobre ${nombre} su apellido es ${apellido}`;
console.log(combinarNombres("Bruce","Wayne"));

// Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
// "Martin" -> "Hola Martin!"
// Tu código:
const obtenerSaludo = nombre => `Hola ${nombre}`;console.log(obtenerSaludo("martin"));

// Retornar el area de un cuadrado teniendo su altura y ancho
// Tu código:
const obtenerAreaRectangulo = (alto, ancho) => alto*ancho;
console.log(obtenerAreaRectangulo(10,20)); 

//Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
//Escribe tu código aquí
const retornarPerimetro = lado => lado*4;
console.log(retornarPerimetro(34))

//Desarrolle una función que calcule el área de un triángulo.
//Escribe tu código aquí
const areaDelTriangulo = (base, altura) => (base*altura)/2;
console.log(areaDelTriangulo(10,8));

//Supongamos que 1 euro equivale a 1.20 dólares. 
//Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
//Escribe tu código aquí
const deEuroAdolar = euro => `El cambio a dolares es ${euro*1.2}`;
console.log(deEuroAdolar(200))


const esVocal=letra=>{
    if(letra.length!=1){
        alert ("Dato incorrecto ingresaste mas de un caracter")
    }else if (letra=="a"||letra=="e"||letra=="i"||letra=="o"||letra=="u"){
        alert (`Efectivamente la letra ${letra} es vocal XD`)
    }else {
        alert (`Ingresaste ${letra} NO es vocal :(`)
    }
};
esVocal(prompt("escribe una letra").toLowerCase())