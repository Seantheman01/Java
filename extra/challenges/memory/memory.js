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
    let kaarten = document.createElement("img");
    kaarten.src = "fotos/" + plaatjes_lijst[x];
    plaatjes.appendChild(kaarten);
    }
}

let achterkant = document.createElement("div");
achterkant.src = "fotos/background.jpg";
achterkant.appendChild(kaarten);