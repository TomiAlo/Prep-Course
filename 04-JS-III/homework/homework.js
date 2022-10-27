// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  let ultimo=array.length;
  return array[ultimo-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  let longitud=array.length
  return longitud;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(let i=0;i<array.length;i++){
    array[i]=array[i]+1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let string='';

  for(let i=0;i<palabras.length;i++){
    string+=palabras[i];
    if(i!=palabras.length-1){
      string+=' ';
    }
  }

  return string;
  
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  
  var retornar = false;

  for(let i=0;i<array.length;i++){
    
    if(array[i]===elemento){
      retornar=true;
      break;
    }

  }
  return retornar;
  
}



function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let resultado=0;
  for(let i=0;i<numeros.length;i++){
    resultado+=numeros[i];
  }
  return resultado;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let suma=0;
  let promedio;
  for(let i=0;i<resultadosTest.length;i++){
    suma+=resultadosTest[i];
  }
  promedio=suma/resultadosTest.length;

  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let max;
  let flag=false;

  for(let i=0;i<numeros.length;i++){
    if(flag==false){
      max=numeros[i];
      flag=true;
    }
    else if(flag==true&&numeros[i]>max){
      max=numeros[i];
    }
  }
  return max;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let resultado=1;

  if(arguments.length==0){
    return 0;
  }
  else{
    for(let i=0;i<arguments.length;i++){
      resultado*=arguments[i];
    }
    return resultado;
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let contador=0;

  for(let i=0;i<arreglo.length;i++){
    if(arreglo[i]>18){
      contador++;
    }
  }

  return contador;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí  
  
  let finDeSemana='Es fin de semana';
  let diaLaboral='Es dia Laboral';

  switch(numeroDeDia){
    case 1:
    case 7:
      return finDeSemana;
      break;
    default:
      return diaLaboral;

  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let aux;
  aux=n;
  if(aux>10){
    do{
      aux=Math.floor(aux/10);
    }while(aux>10);
  }

  if(aux===9){
    return true;
  }
  else{
    return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for(let i=1;i<arreglo.length;i++){
    if(arreglo[i-1]==arreglo[i]){
      return true;
    }
    else{
      return false;
    }
  }
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let flagEnero=false;

  let flagMarzo=false;

  let flagNoviembre=false;

  let arrayNuevo=[];
  let eMensaje='No se encontraron los meses pedidos';

  for(let i=0;i<array.length;i++){
    if(array[i]=='Enero'){
      flagEnero=true;
      arrayNuevo.push('Enero');
    }
    else if(array[i]=='Marzo'){
      flagMarzo=true;
      arrayNuevo.push('Marzo');
    }
    else if(array[i]=='Noviembre'){
      flagNoviembre=true;
      arrayNuevo.push('Noviembre');
    }
  }

  if(flagEnero==true&&flagMarzo==true&&flagNoviembre==true){
    return arrayNuevo;
  }
  else{
    return eMensaje;
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let arrayNuevo=[];

  for(let i=0;i<array.length;i++){
    if(array[i]>100){
      arrayNuevo.push(array[i]);
    }
  }

  return arrayNuevo;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let array=[];
  let flag=true;  
  let eMensaje='Se interrumpió la ejecución';
  
  for(let i=0;i<10;i++){

    numero+=2;
    array.push(numero);
    
    if(numero==i){
      flag=false;
      break;
    }
  }
  if(flag==true){
    return array;
  }
  else if(flag==false){
    return eMensaje;
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let array=[];
  
  for(let i=0;i<10;i++){
  
    if(i==5){
      continue;
    }
    else if(i!=5){
      numero+=2;
      array.push(numero);
    }
  }
  return array;  
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
