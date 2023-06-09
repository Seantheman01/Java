plaatjes_lijst = ["beer.jpg", "buffel.jpg", "hagedis.jpg", "insect.jpg", "kikker.jpg", "rat.jpg", "spin.jpg", "tijger.jpg", "vis.jpg", "vogel.jpg"];
function shuffle(array) {
    let currentIndex = array.lenght, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        array[currentIndex], array[randomIndex] = [array[randomIndex], array[currentIndex]]; 
    }
    return array;
}

for (let x = 0; x < plaatjes_lijst.length; x++) {
    for (let y = 0; y < 2; y++) {
        let kaart = document.createElement("img");
        kaart.plaatje = "fotos/" + plaatjes_lijst[x];
        kaart.src = "fotos/background.jpg";
        kaart.setAttribute("onclick", "klikken(this)");
        document.body.appendChild(kaart);
    }
}

// for (let x = 0; x < plaatjes_lijst.length; x++) {
//     let achterkant = document.createElement("div");
//     achterkant.src = "fotos/background.jpg";
//     document.body.appendChild(achterkant);
// }

function klikken(a) {
    a.src = a.plaatje;
    console.log(a);
}