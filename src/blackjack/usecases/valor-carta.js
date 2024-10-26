/**
 * Obtiene el puntaje de una carta
 * @param {String} carta Carta de la baraja
 * @returns {Number} Valor de la carta
 */
export const valorCarta = ( carta ) => {

    if(!carta || carta == '') throw new Error("carta es obligatorio")

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}