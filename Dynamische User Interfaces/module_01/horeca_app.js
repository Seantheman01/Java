prijs_lijst = {
    'fris': 1.99,
    'bier': 2.99,
    'wijn': 3.99,
};
let bonnetje = new Object();

while (true) {
    let bestelling = prompt("Wat wilt u bestellen? Kies uit fris, bier of wijn (Typ 'stop' als u wilt stoppen): ");

    if (bestelling in prijs_lijst) {
        let aantal = parseInt(prompt("Hoeveel " + bestelling + " wilt u hebben?"));
        if(isNaN(aantal)) {
            alert("Kies een aantal, alstublieft.");
        }
        if (!(bestelling in bonnetje)) {
            bonnetje[bestelling] = aantal;
        }else {
            bonnetje[bestelling] += aantal;
        }
    }

    else if (bestelling == 'stop') {
        break;
    }
    else {
        alert("Kies uit fris, bier of wijn, alstublieft.");
    };
};
alert("Dank u wel voor uw bestelling!");

for(let drank in bonnetje){
    totaal = bonnetje[drank] * prijs_lijst[drank];
    console.log("Prijs: " + prijs_lijst[drank]);
};
console.log(bonnetje);
console.log("Totaal: " + totaal);