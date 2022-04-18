
/*
 * Complete the 'mostCommonWord' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING parrafo
 *  2. STRING_ARRAY palabrasNoPermitidas
 */

function mostCommonWord(parrafo, palabrasNoPermitidas) {
    /*     1.- De la primera sección Obtener la palabra que mas se repite. No importa si son mayusculas o minúsculas.
        Si esta palabra se encuentra en el arreglo de las palabras no permitidas se omite y se obtiene como resultado la palabra que le sigue.
        No se toma en cuenta las comas ni espacios. */
}




function main() {
    const parrafo = "Bob hit a ball, the hit BALL flew long after it was hit.";
    const palabrasNoPermitidas= ["hit"];
    const parrafo2 = 'a, a, a, a, b,b,b,c, c';
    const palabrasNoPermitidas2 = ['a', ]
    const result = mostCommonWord(parrafo, palabrasNoPermitidas);
    console.log(result + '\n--------------');
    const result2 = mostCommonWord(parrafo2, palabrasNoPermitidas2);
    console.log(result2 + '\n--------------');
    return;
}

main();






/*
 * Complete the 'MaxProfit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING pricesAsString as parameter.
 */

function MaxProfit(pricesAsString) {
    /*     2.- En la segunda sección "pricesAsString" Representa el precio de un coche por semana a lo largo del tiempo.  Dado lo siguen obtener la máxima ganancia que se le puede sacar si se supiera cuándo comprar y cuando vender el carro. 
        No se puede vender si el carro aun no a sido comprado. */
}


function main2() {
    var pricesAsString = "7,1,5,3,6,4";
    var result = MaxProfit(pricesAsString);
    // Valor esperado 5
    console.log(result + '\n--------------');

    pricesAsString = "2, 50, 10, 1, 11";
    result = MaxProfit(pricesAsString);
    // Valor esperado 48
    console.log(result + '\n--------------');

    pricesAsString = "7,6,4,3,1";
    result = MaxProfit(pricesAsString);
    // Valor esperado 0
    console.log(result + '\n--------------');
}

main2();


