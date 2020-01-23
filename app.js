
function randomColors() {
    const r = Math.floor(Math.random() * 256); /*A random # from 0-256, need a whole number */
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    /**Creating string to use our random colors */
    return `rgb(${r},${g},${b})`;
}

/**Now we have it changing every 400 ms */
// setInterval(() => {
//     h1.style.color = randoColors();
// }, 400);

const el = document.querySelectorAll('.letter');

/**Now we're changing each letter */
setInterval(() => {
    for(let letter of el){
        letter.style.color = randomColors();
    }
}, 500);
