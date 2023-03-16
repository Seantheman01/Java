bestel_lijst = [];
let kladblaadje = new Object();
const bestelling = {
    'fris': 0.99,
    'bier': 1.99,
    'wijn': 2.99
};

while(true){
let drankjes = prompt("Wat wilt u bestellen? Kies uit fris, bier of wijn (Typ 'stop' als u wilt stoppen): ");

    if (drankjes == 'fris' || drankjes == 'bier' || drankjes == 'wijn'){
        let aantal = parseInt(prompt("Hoeveel " + drankjes + " wilt u hebben?"))

        kladblaadje['drankjes'] = drankjes
        kladblaadje['aantal'] = aantal
        kladblaadje['prijs'] = bestelling
        console.log(kladblaadje)
    }

    else if (drankjes == 'stop'){
        break

    }
    else {
        alert("Kies uit: fris, bier of wijn, alstublieft.")
    }
}
alert("Dank u wel voor uw bestelling!")