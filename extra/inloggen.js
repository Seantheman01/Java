let loggedIn = ["Sean", "sean"];

function handleLogin(){
    console.log(loggedIn);
    console.log(Date())

    let naam = document.getElementById("inputNaam").value;
    if (naam.length <= 0){
        alert("Voer een naam in!")
        return
    }

    console.log("U hebt op de knop geklikt.");
    if (loggedIn.includes(naam)){
        loggedIn.splice(loggedIn.indexOf(naam), 1)
        console.log("U bent uitgelogd: " + naam);
        document.getElementById('melding').innerText = "U bent uitgelogd: " + naam;

    } else{
        loggedIn.push({'naam': naam, 'moment': new Date()});
        console.log("U bent ingelogd: " + naam);
        document.getElementById('melding').innerText = "U bent ingelogd: " + naam;
    }

    document.getElementById("inputNaam").value = "";
    console.log(loggedIn);
    // console.log("U bent ingelogd: " + naam);
    // document.getElementById('melding').innerText = 'Gelukt!';
}

document.getElementById("inlogButton").onclick = handleLogin;