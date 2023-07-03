const grote_plaatjes = ['bg0.jpg', 'bg1.jpg', 'bg2.jp', 'bg3.jpg'];
const kleine_plaatjes = ['0.jpg', '1.jpg', '2.jpg', '3.jpg'];

// function knop1() {
//     groot_plaatje.src = "images/bg1.jpg"
//     plaatje.src = "images/1.jpg"
// }

// function knop2() {
//     groot_plaatje.src = "images/bg2.jpg"
//     plaatje.src = "images/2.jpg"
// }

// function knop3() {
//     groot_plaatje.src = "images/bg3.jpg"
//     plaatje.src = "images/3.jpg"
// }

function groot_getal() {
    var afbeelding = document.createElement("img");
    afbeelding.src = "images/" + grote_plaatjes[0];
    console.log(afbeelding);
}

function klein_getal() {
    let plaatje = document.createElement("img");
    plaatje.src = "images/" + kleine_plaatjes[0];
    console.log(afbeelding);
}