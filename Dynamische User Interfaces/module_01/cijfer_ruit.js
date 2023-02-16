let getal = parseInt(input("Typ een getal in: "))

for (let x = 1; x <= getal; x++) {
    for (let y = 1; y < getal - x + 1; y++) {
        string += "";
    }

    for (let z = 1; z <=2 * x - 1; z++) {
        string += z;
    }
    string += "\n";
}