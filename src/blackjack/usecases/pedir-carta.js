
/**
 * Pide una carta y se elimina del deck
 * @param {Array<String>} deck Baraja de cartas
 * @returns {String} Carta del deck
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) 
        throw 'No hay cartas en el deck';

    const carta = deck.pop();
    return carta;
}