// opdracht 1:
let giraf_aantal = parseInt(prompt("Hoeveel giraffen zijn er?"));
let struisvogel_aantal = parseInt(prompt("Hoeveel struisvogels zijn er?"));
let zebra_aantal = parseInt(prompt("Hoeveel zebra's zijn er?"));

// giraf_aantal = 1
// struisvogel_aantal = 1
// zebra_aantal = 1

const GIRAF_POTEM = 4
const STRUISVOGEL_POTEN = 2
const ZEBRA_POTEN = 4

function mijn_functie(giraffen, struisvogels, zebras){
    let aantal_poten = giraf_aantal * GIRAF_POTEN + struisvogel_aantal * STRUISVOGEL_POTEN + zebra_aantal * ZEBRA_POTEN
    return aantal_poten
}

document.getElementById("poten").innerText = mijn_functie;