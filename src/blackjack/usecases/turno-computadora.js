import { pedirCarta, valorCarta, crearCartaHtml } from "./";

/**
 * Ejecuta turno de la computadora
 * @param {Number} puntosMinimos Puntos del jugador
 * @param {HTMLElement} puntosHTML Nodo HTML para mostrar puntos del jugador
 * @param {HTMLElement} divCartasComputadora Nodo HTML para mostrar puntos del jugador
 * @param {Array<String} deck Baraja
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if(!puntosMinimos) throw new Error("Puntos minímos son necesario");
    if(!puntosHTML) throw new Error("puntosHTML es necesario");
    if(!divCartasComputadora) throw new Error("divCartasComputadora es necesario");

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHtml(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}