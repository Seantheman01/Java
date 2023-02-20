let loggedIn = "";

function handleLogin(){
    let naam = document.getElementById("inputNaam").value;
    console.log("U hebt op de knop geklikt!");
    if (naam in loggedIn){
        console.log("U zit al in de lijst.");
    }

    console.log("U bent ingelogd: " + naam);
    document.getElementById("inputNaam").value = "";
    document.getElementById('melding').innerText = 'Gelukt!';

}

document.getElementById("inlogButton").onclick = handleLogin;