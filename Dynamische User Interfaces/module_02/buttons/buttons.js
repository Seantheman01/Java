const plaatjes_lijst = ['0.jpg', '1.jpg', '2.jpg', '3.jpg', 'bg0.jpg', 'bg1.jpg', 'bg2.jp', 'bg3.jpg']

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

function knop_maken() {
    let plaatje = document.createElement("img");
    plaatje.src = "images/" + plaatjes_lijst
}