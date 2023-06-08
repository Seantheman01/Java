dieren_lijst = shuffle(beer.jpg, buffel.jpg, hagedis.jpg, insect.jpg, kikker.jpg, rat.jpg, spin.jpg, tijger.jpg, vis.jpg, vogel.jpg);

function shuffleArray(array) {
    let currentIndex = array.lenght, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        array[currentIndex], array[randomIndex] = [array[randomIndex], array[currentIndex]]; 
    }
    return array;
}

document.write()