let loggedIn = ["Sean"];

function handleLogin(){
    let naam = document.getElementById("inputNaam").value;
    console.log("U hebt op de knop geklikt!");
    if (loggedIn.includes(naam)){
        console.log("U zit al in de lijst: " + naam);
    }

    console.log("U bent ingelogd: " + naam);
    document.getElementById("inputNaam").value = "";
    document.getElementById('melding').innerText = 'Gelukt!';

}

document.getElementById("inlogButton").onclick = handleLogin;