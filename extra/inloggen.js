let loggedIn = [];
function getIndexOfElementByName(lijst, naam){
    for(let x = 0; x < lijst.length; x++){
        console.log(x);
    }
    return -1;
}

function handleLogin(){
    console.log(loggedIn);
    console.log(Date())

    let naam = document.getElementById("inputNaam").value;
    if (naam.length <= 0){
        alert("Voer een naam in!")
        return;
    }
    console.log("U hebt op de knop geklikt.");

    let positie = getIndexOfElementByName(loggedIn, naam);
    if (positie > -1){
        loggedIn.splice(loggedIn.indexOf(naam), 1)
        console.log("U bent uitgelogd: " + naam);
        document.getElementById('melding').innerText = "U bent uitgelogd: " + naam;

    } else{
        loggedIn.push({'naam': naam, 'tijd': new Date()});
        console.log("U bent ingelogd: " + naam);
        document.getElementById('melding').innerText = "U bent ingelogd: " + naam;
    }

    document.getElementById("inputNaam").value = "";
    console.log(loggedIn);
    // console.log("U bent ingelogd: " + naam);
    // document.getElementById('melding').innerText = 'Gelukt!';
}

document.getElementById("inlogButton").onclick = handleLogin;