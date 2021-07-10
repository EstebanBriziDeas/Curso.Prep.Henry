// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var i = 0
  var j = 0
  for (let clave in objeto) {
    i++
  }
  var LaMatriz = new Array(i)
  for (var a = 0; a < i; a++) {
    LaMatriz[a] = new Array (2)
  }
  for (let clave in objeto) {
    LaMatriz[j][0] = clave
    LaMatriz[j][1] = objeto[clave] 
    j++
  }
  return LaMatriz
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var Devuelve = {
    a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0,i:0,j:0,k:0,l:0,m:0,n:0,ñ:0,o:0,p:0,q:0,r:0,s:0,t:0,u:0,v:0,w:0,x:0,y:0,z:0,
  }
  var ObjetoSalida = {}
  for (i = 0; i < string.length; i++) {
    switch (string.charAt (i)) {
      case 'a': Devuelve.a ++; break;
      case 'b': Devuelve.b ++; break;
      case 'c': Devuelve.c ++; break;
      case 'd': Devuelve.d ++; break;
      case 'e': Devuelve.e ++; break;
      case 'f': Devuelve.f ++; break;
      case 'g': Devuelve.g ++; break;
      case 'h': Devuelve.h ++; break;
      case 'i': Devuelve.i ++; break;
      case 'j': Devuelve.j ++; break;
      case 'k': Devuelve.k ++; break;
      case 'l': Devuelve.l ++; break;
      case 'm': Devuelve.m ++; break;
      case 'n': Devuelve.n ++; break;
      case 'ñ': Devuelve.ñ ++; break;
      case 'o': Devuelve.o ++; break;
      case 'p': Devuelve.p ++; break;
      case 'q': Devuelve.q ++; break;
      case 'r': Devuelve.r ++; break;
      case 's': Devuelve.s ++; break;
      case 't': Devuelve.t ++; break;
      case 'u': Devuelve.u ++; break;
      case 'v': Devuelve.v ++; break;
      case 'w': Devuelve.w ++; break;
      case 'x': Devuelve.x ++; break;
      case 'y': Devuelve.y ++; break;
      case 'z': Devuelve.z ++; break;
    }   
  }

//  for (let clave in Devuelve) {
//    if (this.clave === 0){
//      delete this.clave
//    }
//  }
// NO ENTIENDO QUE HAGO MAL QUE ESTO NO FUNCIONA :S

  if (Devuelve.a === 0) {delete Devuelve.a}
  if (Devuelve.b === 0) {delete Devuelve.b}
  if (Devuelve.c === 0) {delete Devuelve.c}
  if (Devuelve.d === 0) {delete Devuelve.d}
  if (Devuelve.e === 0) {delete Devuelve.e}
  if (Devuelve.f === 0) {delete Devuelve.f}
  if (Devuelve.g === 0) {delete Devuelve.g}
  if (Devuelve.h === 0) {delete Devuelve.h}
  if (Devuelve.i === 0) {delete Devuelve.i}
  if (Devuelve.j === 0) {delete Devuelve.j}
  if (Devuelve.k === 0) {delete Devuelve.k}
  if (Devuelve.l === 0) {delete Devuelve.l}
  if (Devuelve.m === 0) {delete Devuelve.m}
  if (Devuelve.n === 0) {delete Devuelve.n}
  if (Devuelve.ñ === 0) {delete Devuelve.ñ}
  if (Devuelve.o === 0) {delete Devuelve.o}
  if (Devuelve.p === 0) {delete Devuelve.p}
  if (Devuelve.q === 0) {delete Devuelve.q}
  if (Devuelve.r === 0) {delete Devuelve.r}
  if (Devuelve.s === 0) {delete Devuelve.s}
  if (Devuelve.t === 0) {delete Devuelve.t}
  if (Devuelve.u === 0) {delete Devuelve.u}
  if (Devuelve.v === 0) {delete Devuelve.v}
  if (Devuelve.w === 0) {delete Devuelve.w}
  if (Devuelve.x === 0) {delete Devuelve.x}
  if (Devuelve.y === 0) {delete Devuelve.y}
  if (Devuelve.z === 0) {delete Devuelve.z}
   
  return Devuelve
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var Mayus = ''
  var Minus = ''
  var Variable = ''
  for (i = 0; i < s.length; i++) {
    Variable = s.charAt (i)
    if (Variable === Variable.toUpperCase()) {
      Mayus = Mayus + Variable
    }
    else {
      Minus = Minus + Variable
    }
  }
  return Mayus + Minus
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var Palabra = ''
  var Frase = ''
  for (i = 0; i < str.length; i++) {
    if (str.charAt (i) === ' ') {
      Frase = Frase + Palabra + ' '
      Palabra = ''
    }
    else {
      Palabra = str.charAt (i) + Palabra
    }
  }
  return Frase + Palabra
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numerostr = numero+''
  for (i = 0; i < numerostr.length; i++) {
    var IndiceFinal = numerostr.length - 1 -i
    if (numerostr.charAt (i) !== numerostr.charAt (IndiceFinal)) {
      return "No es capicua"
    }
    else {
      return "Es capicua"
    }
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var SeDevuelve = ''
  for (i = 0; i < cadena.length; i++) {
    if (cadena.charAt (i) === 'a' || cadena.charAt (i) === 'b' || cadena.charAt (i) === 'c') {}
    else {
      SeDevuelve = SeDevuelve + cadena.charAt (i)
    }
  }
  return SeDevuelve
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var Flag = false
  var orden = ''
  do {
    Flag = true
    for (i = 0; i < arr.length -1; i++) {
      if (arr[i].length > arr[i+1].length) {
        orden = arr [i]
        arr [i] = arr [i + 1] 
        arr [i + 1] = orden 
        Flag = false
      }
    }
  } while (Flag === false)
  return arr
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var NuevoArray = []

  for (a = 0; a < arreglo1.length; a++) {
    for (b = 0; b < arreglo2.length; b++) {
      if (arreglo1[a] === arreglo2[b]) {
        NuevoArray.push (arreglo1[a])
      }
    }
  }
  return NuevoArray
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

