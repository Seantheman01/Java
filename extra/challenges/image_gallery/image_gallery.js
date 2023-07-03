const plaatjes_lijst = ['fotos/leeuw.jpg', 'fotos/zebra.jpg', 'fotos/giraf.jpg'];
let getal = 0;

function verder_knop() {
    getal++;
    if (getal == 3) {
        getal = 0;
    }
    plaatje.src = plaatjes_lijst[getal];
}

function terug_knop() {
    getal--;
    if (getal == -1) {
        getal = plaatjes_lijst.length - 1;
    }
    plaatje.src = plaatjes_lijst[getal];
}