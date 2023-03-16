bestel_lijst = [];
const bestelling = {
    'fris': 1.99,
    'bier': 1.99,
    'wijn': 1.99
};

while(true){
let drankjes = prompt("Wat wilt u bestellen? Kies uit fris, bier of wijn (Typ 'stop' als u wilt stoppen): ");
    if (drankjes != 'fris' || drankjes != 'bier' || drankjes != 'wijn' || drankjes != 'stop'){
        alert("Kies uit: fris, bier of wijn, alstublieft")
    }
    else if (drankjes == 'stop'){
        break
    }

let aantal = parseInt(prompt("Hoeveel " + drankjes + " wilt u hebben?"))

// let nieuw = new Object();
}