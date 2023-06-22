function knop(e) {
    let button = document.getElementById('knop').innerHTML;
    alert("Je hebt " + button + " aangeklikt!");
    console.log(e)
}

function plus() {
    
}

let toaal = 0;
let teller = 0;
let plus = true

function switch_functie(y) {
    plus = y.innerText === '+';
}

// function mijn_functie(a) {
//     console.log(a);
//     getal - parseInt(a.innerText);
//     alert("Je hebt op " + getal + " geklikt!");
//     if (plus){
//         totaal += getal;
//     }else {
//         totaal -= getal;
//     }

//     totaal += getal;
//     teller++;
//     if (teller > 1) {
//         alert("Het totaal is nu: " + totaal);
//     }
// }

// for (x=0; x<10; x++) {
//     let mijn_button = document.createElement('button');
//     mijn_button.id = x;
//     mijn_button.type = 'button';
//     mijn_button.innerText = 'Klik hier';
//     mijn_button.setAttribute('onclick', 'mijn_functie(this)');
//     // calculator.appendChild(mijn_button);
// }

// let plus_button = document.createElement('button');
// plus_button.id = 'plus';
// plus_button.type = 'button';
// plus_button.innerText = '+';
// plus_button.setAttribute('onclick', 'mijn_functie(this)');
// mijn_button.setAttribute('onclick', 'mijn_functie(this)');
// // calculator.appendChild(mijn_button);