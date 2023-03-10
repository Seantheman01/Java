let vraag = parseInt(prompt("Voer een nummer in: "));
let string = "";

for (let x = 1; x <= vraag; x++){
    for (let y = 1; y <= x; y++){
        string += y.toString() + "-";
    }
    string = string.slice(0,-1);
    string += "<br>";

    document.getElementById("ruit").innerHTML += string;
    string = "";
}
for (let x = vraag -1; x >= 1; x--){
    for (let y = 1; y <= x; y++){
        string += y.toString() + "-";
    }
    string = string.slice(0,-1);
    string += "<br>";

    document.getElementById("ruit").innerHTML += string;
    string = "";
}