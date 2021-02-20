// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  const primer = array;
  return primer[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  const ultimo = array;
  return ultimo[ultimo.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  const largo = array;
  return largo.length;

}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  const incremento = array;
  for (i=0; i < incremento.length; i++){
    incremento[i] =incremento[i] + 1;
  }
  return incremento;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  const agrego = array;
  agrego.push(elemento);
  return agrego;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  const agrego = array;
  agrego.unshift(elemento);
  return agrego;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var frase= palabras[0].toString();
  for(i = 1; i < palabras.length; i++){
    frase = frase + " " + palabras[i].toString();
  }
  return frase;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  const cont = array;
  if(cont.includes(elemento)){
    return true;
  }else{
    return false;
  }
}


function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  for (i = 0; i < numeros.length; i++){
    suma = suma + numeros[i];
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var total = 0;
  for (i = 0; i < resultadosTest.length; i++){ 
    total = total + resultadosTest[i];
  }
  total = total / resultadosTest.length;
  return total;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var grande = 0;
  for (i = 0; i < numeros.length; i++){
    if ( numeros[i] >= grande){
      grande = numeros [i];
    }
  }
  return grande;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length === 0){
    return 0;
  }else if (arguments.length === 1){
    return arguments[0];
  }else{
    var multi = 1;
    for (i = 0; i < arguments.length; i++){
      multi = multi * arguments[i];
    }
    return multi;
  }
  
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí
  var cantidad= 0;
  for (i = 0; i < arreglo.length; i++){
    if ( arreglo[i] > 19){
      cantidad++;
    }
  }
  return cantidad;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia === 1 || numeroDeDia === 7){
    return "Es fin de semana";
  }else{
    return "Es dia Laboral";
  }
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var num = n.toString();
  if (num.charAt(0) === "9"){
    return true;
  }else{
    return false;
  }
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var igual= arreglo[0];
  for (i = 1; i < arreglo.length; i++){
    if (igual !== arreglo[i]){
      return false;
    }else{
      return true;
    }
  }
  
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  const nuevo= [];
  for (i = 0; i < array.length; i++){
    if ( array[i] === "Enero" || array [i] === "Marzo" || array [i] === "Noviembre" ){
      nuevo.push(array[i]);
    }
  }
  if (nuevo.length < 3){
    return "No se encontraron los meses pedidos";
  }else{
    return nuevo;
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  const nuevo=[]
  for (i = 0; i < array.length; i++){
    if(array[i] > 100){
      nuevo.push(array[i]);
    }
  }
  return nuevo;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  const nuevo= [];
  var suma;
  for (i = 1; i < 11; i++){
    suma = numero + (2 * i);
    nuevo.push(suma);
    if (suma === i){
      break;
    }
  }
  if (suma === (numero + (2*10))){
    return nuevo;
  }else{
    return "Se interrumpió la ejecución";
  }


}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  const nuevo= [];
  var suma;
  var sumame = 0;
  for (i = 1; i < 11; i++){
    if (i === 5){
      continue;
    }
    sumame = sumame + 2;
    suma = numero + sumame;
    nuevo.push(suma);
  }
  return nuevo;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
