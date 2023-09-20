//Array:
let seleccion = ['Messi', 'De Paul', 'Martinez'];
//extraer los datos SIN DESTRUCTURIN:
let dibu = seleccion[2]
console.log(dibu);
//extraer los datos CON DESTRUCTURIN:
let [leo, rodrigo, dibu2] = seleccion
console.log(leo);

//Objetos:
//extraer los datos SIN DESTRUCTURIN:
let auto = {
    marca: 'Citroen',
    modelo: 'C3',
    anio: 2003
}
let marca1 = auto.marca;
console.log(marca1);
let {marca} = auto;
//extraer los datos CON DESTRUCTURIN:
console.log(marca);

//Spread operator:
//Array:
let rapido = ['rapido y furioso','rapido y furioso 2', 'rapido y furioso 3'];
console.log(rapido);
let furioso = ['rapido y furioso 4', 'rapido y furioso 5'];
console.log(furioso);
let todas = [...rapido , ...furioso ];
console.log(todas);
//Objeto:
let generoAccion = {
    NombreGenero : 'Accion',
    popularidad: 10
}
console.log(generoAccion);
let rambo = {
    titulo: 'Rambo',
    ranking: 1,
    ...generoAccion
}
console.log(rambo);