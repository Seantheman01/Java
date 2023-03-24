prijs_lijst = {
    'fris': 1.99,
    'bier': 2.99,
    'wijn': 3.99,
    'appelsal': 0.50
};
let bonnetje = new Object();

while (true) {
    let bestelling = prompt("Wat wilt u bestellen? Kies uit fris, bier of wijn (Typ 'stop' als u wilt stoppen): ");

    if (bestelling in prijs_lijst) {
        let aantal = parseInt(prompt("Hoeveel " + bestelling + " wilt u hebben?"));
        if (!(bestelling in bonnetje)) {
            bonnetje[bestelling] = aantal;
        }else {
            bonnetje[bestelling] += aantal;

        }
        console.log(bonnetje);
    }

    else if (bestelling == 'stop') {
        break;
    }
    else {
        alert("Kies uit fris, bier of wijn, alstublieft.");
    }
}
alert("Dank u wel voor uw bestelling!");
// in de div app ga ik het bonnetje printen met de totaal prijzen