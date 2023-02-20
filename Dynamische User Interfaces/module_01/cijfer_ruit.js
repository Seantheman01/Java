let getal = parseInt(prompt("Typ een getal in: "))
let ruit = "";

for (let x=1; x == getal; x++) {
    for (let y=1; y == getal - x; y++) {
        ruit += "-";
    }
    for (let z = 1; z <= 2 * (getal - x + 1) - 1; z++) {
        string += z;
    }
    string += "\n";
}
console.log(ruit);