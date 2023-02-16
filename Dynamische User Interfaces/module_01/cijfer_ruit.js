let getal = parseInt(prompt("Typ een getal in: "))
let ruit = "";

for (let x = 1; x <= getal; x++) {
    for (let y = 1; y < getal - x + 1; y++) {
        ruit += "";
    }

    for (let z = 1; z <=2 * x - 1; z++) {
        ruit += z;
    }
    ruit += "\n";
}
for (let x = 1; x <= getal - 1; x++) {
    for (let y = 1; y < x + 1; y++) {
        ruit += "";
    }
    for (let z = 1; z <= 2 * (getal - x) - 1; z++) {
        ruit += z;
    }
    ruit += "\n";
}

document.getElementById("ruit").innerHTML = ruit;