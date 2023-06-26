// Auto kost standaard 10.000 euro
// Vragen om deuren, 2 of 4. 4 deuren is 1000 euro extra
// Kleur vragen. Wit is standaard. Rood en blauw kosten 500 euro extra. Alle andere kleuren 1500 euro extra
// Alert welke auto en prijs

auto_lijst = {
    'standaard_prijs': 10000
};

while (true) {
    let deuren = parseInt(prompt("Hoeveel deuren wilt u dat de auto heeft? (Kies uit 2 of 4 deuren) "));
    if (!(deuren == '2' || deuren == '4')) {
        alert("Kies uit 2 of 4 deuren.");
    }
    else if (deuren == '4') {
        auto_lijst.standaard_prijs += 1000;
        break
    }
}

let kleur = prompt("Welke kleur wilt u de auto hebben? ");
if (kleur == 'rood' || kleur == 'blauw') {
    auto_lijst.standaard_prijs += 500;
}
else if (!(kleur == 'wit' || kleur == 'rood' || kleur == 'blauw')) {
    auto_lijst.standaard_prijs += 1500;
}

alert("Deuren: " + deuren);
alert("Kleur: " + kleur);
alert("Prijs: " + auto_lijst.standaard_prijs + " euro");