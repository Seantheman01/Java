let loggedIn = [];
function getIndexOfElementByName(lijst, naam){
    for(let x = 0; x < lijst.length; x++){
        if(lijst[x]['naam'] === naam){
            return x;
        }
    }
    return null;
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

    const positie = getIndexOfElementByName(loggedIn, naam);
    if (positie !== null){
        loggedIn.splice(loggedIn.indexOf(naam), 1)
        console.log("U bent uitgelogd");
        document.getElementById('melding').innerText = "U bent uitgelogd: " + naam;

    } else{
        loggedIn.push({'naam': naam, 'tijd': new Date()});
        console.log("U bent ingelogd");
        document.getElementById('melding').innerText = "U bent ingelogd: " + naam;
    }

    document.getElementById("inputNaam").value = "";
    console.log(loggedIn);
}

document.getElementById("button").onclick = handleLogin;