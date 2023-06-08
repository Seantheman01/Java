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

for (let x = 0; x < 21; x++) {
    let kaarten = document.createElement("img");
    kaarten.src = "fotos/" + plaatjes_lijst[0];
    document.body.appendChild(kaarten);
}