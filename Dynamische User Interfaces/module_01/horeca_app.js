const bestelling = {
    'fris': 1.99,
    'bier': 1.99,
    'wijn': 1.99
};

let drankjes = prompt("Wat wilt u bestellen? Kies uit fris, bier of wijn (Typ 'stop' als u wilt stoppen): ");
    if (drankjes != 'fris' || drankjes != 'bier' || drankjes != 'wijn'){
        console.log("Kies uit: fris, bier of wijn, alstublieft")
}
let aantal = parseInt(prompt("Hoeveel" + drankjes + "wilt u hebben?"))

// let nieuw = new Object();
// bestelling['drank'] = 'fris';
// bestelling['aantal'] = 3;

// bestel_lijst.push(nieuw);
// bestelling.push({'drank': 'bier', 'aantal': 3});
// bestelling[1]['aantal'] += 3;

// console.log(bestelling);