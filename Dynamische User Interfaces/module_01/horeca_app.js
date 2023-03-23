bestel_lijst = [
    {drankjes: 'fris', prijs: 2.99},
    {drankjes: 'bier', prijs: 2.99},
    {drankjes: 'wijn', prijs: 2.99}
];
let bonnetje = new Object();

while(true){
let bestelling = prompt("Wat wilt u bestellen? Kies uit fris, bier of wijn (Typ 'stop' als u wilt stoppen): ");

    if (bestelling == 'fris' || bestelling == 'bier' || bestelling == 'wijn'){
        let aantal = parseInt(prompt("Hoeveel " + bestelling + " wilt u hebben?"));

        bonnetje['drankjes'] = bestelling;
        bonnetje['aantal'] = aantal;
        bonnetje['prijs'] = 2.99;
        console.log(bonnetje);
    }

    else if (bestelling == 'stop'){
        break
    }
    else {
        alert("Kies uit fris, bier of wijn, alstublieft.");
    }
}
alert("Dank u wel voor uw bestelling!");