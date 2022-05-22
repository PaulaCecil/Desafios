



/*DESAFIOS*/

/*Desafìo de programación  #2: Imprimí los números impares del 1 al 100
 1 3 5 ... 99*/

/*let resultado;


 for (let i = 1; i<100; i++){

    resultado = i;

        if (resultado < 4){

        console.log (resultado);

    } else if (resultado >4 && resultado < 8 && resultado%2 !== 0){

        console.log (resultado);

    } else if (resultado%2 !==0 && resultado%3 !== 0 && resultado%5 !== 0 && resultado%7 !== 0){

            console.log (resultado);

        }


 }*/
 
/* Desafío de programación #1: Imprimí los números del 1 al 10
 
 

for (let i = 1; i<11; i++) {

    resultado=i;

    console.log (resultado);

}
*/

/*

Del 10 al 1:

for (let i = 10; i>0; i--) {

    resultado=i;

    console.log (resultado);

}

*/

/*Desafìo de programación  #2: Imprimí los números impares del 1 al 100

UNA FORMA:

for (let i = 1; i<100; i++) {

    resultado=i;

    if (i%2 ==! 0){

    console.log(resultado);

    }    
}


OTRA FORMA:

for (let i = 1; i<100; i=i+2) {

    resultado=i;

    console.log(resultado);

}

*/

/*

Desafío de programación #3: Imprimí la tabla de multiplicación del 7*/

/*

const MULTIPLICADOR = 7;
let multiplicando;
let resultado;


function tablaDelSiete (multiplicando, MULTIPLICADOR){

return multiplicando * MULTIPLICADOR;

}

for (let i=0; i<=10; i++){

    multiplicando=i;

    
    console.log (`${MULTIPLICADOR} x ${multiplicando} = ${tablaDelSiete (multiplicando, MULTIPLICADOR)}`);

}


*/


/* Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9

let multiplicador;
let multiplicando;


function tablaDeMultiplicar (multiplicando, multiplicador){

return multiplicando * multiplicador;

}

for (let i=0; i<=10; i++) {
    
    multiplicando=i;

    for (let m=0; m<=10; m++){

    multiplicador=m;    

        
    console.log (`${multiplicador} x ${multiplicando} = ${tablaDeMultiplicar (multiplicando, multiplicador)}`);

}

}
*/

/*Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.

let decena = [1,2,3,4,5,6,7,8,9,10];

let totalSumaDecena=0;

for (let i=0; i<decena.length; i++){

    totalSumaDecena= totalSumaDecena + decena[i];


}

console.log (totalSumaDecena );
*/

/*Desafío de programación #6: Calcula 10! (10 factorial)
 10 * 9 * 8 * ... * 1
 
let decena = [1,2,3,4,5,6,7,8,9,10];

let totalMultiplicacionDecena=1;

for (let i=0; i<decena.length; i++){

    totalMultiplicacionDecena= totalMultiplicacionDecena * decena[i];


}

console.log (totalMultiplicacionDecena);

*/

/*Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30

let numerosImpares=[];
let totalSumaNumerosImpares=0;


for (let i= 10; i<30; i++){

    resultado=i;
    
    if (resultado%2==!0){

        numerosImpares.push (resultado);
    }

}

for (let m=0; m<numerosImpares.length; m++){

    totalSumaNumerosImpares= totalSumaNumerosImpares + numerosImpares[m];

    
}

console.log(totalSumaNumerosImpares);

*/

/*Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit*/

/*

const FORMULA_CELSIUS_A_FAHRENHEIT = 1.8;
const FORMULA_CELSIUS_A_FAHRENHEIT_2 = 32;


let gradosCelsius = (prompt ("Ingrese un valor en grados celsius para convertir a Fahrenheit"));


function CalculoCelsiusAFahrenheit (gradosCelsius, FORMULA_CELSIUS_A_FAHRENHEIT,FORMULA_CELSIUS_A_FAHRENHEIT_2){

    return ((gradosCelsius*FORMULA_CELSIUS_A_FAHRENHEIT)+FORMULA_CELSIUS_A_FAHRENHEIT_2);
   
}


console.log (`${gradosCelsius} grados celsius es igual a ${CalculoCelsiusAFahrenheit (gradosCelsius, FORMULA_CELSIUS_A_FAHRENHEIT,FORMULA_CELSIUS_A_FAHRENHEIT_2)} grados Fahrenheit`);

*/
/*Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius

const FORMULA_CELSIUS_A_FAHRENHEIT = 0.56;
const FORMULA_CELSIUS_A_FAHRENHEIT_2 = 32;


let gradosCelsius = (prompt ("Ingrese un valor en grados celsius para convertir a Fahrenheit"));


function CalculoCelsiusAFahrenheit (gradosCelsius, FORMULA_CELSIUS_A_FAHRENHEIT,FORMULA_CELSIUS_A_FAHRENHEIT_2){

    return ((gradosCelsius-FORMULA_CELSIUS_A_FAHRENHEIT_2)*FORMULA_CELSIUS_A_FAHRENHEIT);
   
}


console.log (`${gradosCelsius} grados celsius es igual a ${CalculoCelsiusAFahrenheit (gradosCelsius, FORMULA_CELSIUS_A_FAHRENHEIT,FORMULA_CELSIUS_A_FAHRENHEIT_2)} grados Fahrenheit`);

*/

/* Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función)

let numerosRandom = [2,5,98,34,6,10];
let sumaNumerosRandom = 0;

function PromedioNumerosRandom (numerosRandom,sumaNumerosRandom){

       for (let i=0; i< numerosRandom.length; i++){

        sumaNumerosRandom = sumaNumerosRandom + numerosRandom[i];
    
    }

    return sumaNumerosRandom/numerosRandom.length;

}


console.log (PromedioNumerosRandom (numerosRandom, sumaNumerosRandom));

 */

/* Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos 

let numerosRandom = [2,-7,5,-15,98,-32,34,-2,6,-9,10];
let numerosRandomPositivos=[];


function separarNumeros (numerosRandom,numerosRandomPositivos){

    for (let i=0;i<numerosRandom.length;i++){

           if (numerosRandom[i] > 0){

         numerosRandomPositivos.push (numerosRandom[i]);

    }
}
return numerosRandomPositivos;
}

console.log (separarNumeros (numerosRandom,numerosRandomPositivos));
*/

/* Desafío de programación #13: Find the maximum number in an array of numbers 

const numerosRandom = [2,-7,5,-15,98,-32,34,-2,6,-9,10];

console.log (Math.max(...numerosRandom));

 */

