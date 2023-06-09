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
        let plaatjes = document.createElement("img");
        plaatjes.src = "fotos/" + plaatjes_lijst[x];
        plaatjes.src = "fotos/background.jpg";
        kaarten.appendChild(plaatjes);
    }
}

// for (let x = 0; x < plaatjes_lijst.length; x++) {
//     let achterkant = document.createElement("div");
//     achterkant.src = "fotos/background.jpg";
//     document.body.appendChild(achterkant);
// }