const grote_plaatjes = ['bg0.jpg', 'bg1.jpg', 'bg2.jp', 'bg3.jpg'];
const kleine_plaatjes = ['0.jpg', '1.jpg', '2.jpg', '3.jpg'];
let getal = 0

// function knop1() {
//     groot_plaatje.src = "images/bg1.jpg"
//     klein_plaatje.src = "images/1.jpg"
// }

// function knop2() {
//     groot_plaatje.src = "images/bg2.jpg"
//     klein_plaatje.src = "images/2.jpg"
// }

// function knop3() {
//     groot_plaatje.src = "images/bg3.jpg"
//     klein_plaatje.src = "images/3.jpg"
// }

function maken_button(e) {
    for(let i = 0; i < e; i++){
        plaatje = document.getElementById("groot_plaatje");
        plaatje.src = "images/" + grote_plaatjes[1];
        plaatje = document.getElementById("klein_plaatje");
        plaatje.src = "images/" + kleine_plaatjes[1];
    }
}