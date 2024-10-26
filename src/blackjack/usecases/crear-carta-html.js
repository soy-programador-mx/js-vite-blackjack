/**
 * Crea un nodo img para HTML
 * @param {<String>} carta Carta 
 * @returns {HTMLImageElement} HTML imagen
 */
export const crearCartaHtml = (carta) => {

    if(!carta) throw new Error("La carta es un argumento obligatorio");
    

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;
};