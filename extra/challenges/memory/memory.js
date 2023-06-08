dieren_lijst = [beer.jpg, buffel.jpg, hagedis.jpg, insect.jpg, kikker.jpg, rat.jpg, spin.jpg, tijger.jpg, vis.jpg, vogel.jpg];

function shuffleArray(array) {
    let currentIndex = array.lenght, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        array[currentIndex], array[randomIndex] = [array[randomIndex], array[currentIndex]]; 
    }
    return array;
}

function kaarten() {
    let foto1 = document.createElement("img");
    foto1.src = "fotos/beer.jpg";

    let foto2 = document.createElement("img");
    foto2.src = "fotos/buffel.jpg";

    let foto3 = document.createElement("img");
    foto3.src = "fotos/hagedis.jpg";

    let foto4 = document.createElement("img");
    foto4.src = "fotos/insect.jpg";

    let foto5 = document.createElement("img");
    foto5.src = "fotos/kikker.jpg";

    let foto6 = document.createElement("img");
    foto6.src = "fotos/rat.jpg";

    let foto7 = document.createElement("img");
    foto7.src = "fotos/spin.jpg";

    let foto8 = document.createElement("img");
    foto8.src = "fotos/tijger.jpg";

    let foto9 = document.createElement("img");
    foto9.src = "fotos/vis.jpg";

    let foto10 = document.createElement("img");
    foto10.src = "fotos/vogel.png";

    document.body.appendChild(foto1);
}