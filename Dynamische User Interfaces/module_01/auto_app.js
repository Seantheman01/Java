// auto kost standaard 10.000 euro
// vragen om deuren, 2 of 4. 4 deuren is 1000 euro extra
// kleur vragen. Wit is standaard. Rood en blauw kosten 500 euro extra. Alle andere kleuren 1500 euro
// alert welke auto en prijs

auto_lijst = {
    'standaard_prijs': 10000
};

let deuren = parseInt(prompt("Hoeveel deuren wilt u dat de auto heeft? (Kies uit 2 of 4 deuren) "));
if (!(deuren == '2' || deuren == '4')) {
    alert("Kies uit 2 of 4 deuren.")

}else {
    if (deuren == '4') {
        
    }
}

console.log(auto_lijst);

// let kleuren = prompt("Welke kleur wilt u de auto hebben? ");