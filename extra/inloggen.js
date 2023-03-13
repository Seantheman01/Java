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
        console.log()
        loggedIn.splice(positie, 1)
        console.log("Uitgelogd");
        document.getElementById('melding').innerText = "U bent uitgelogd: " + naam;

    } else{
        loggedIn.push({'naam': naam, 'tijd': new Date()});
        console.log("Ingelogd");
        document.getElementById('melding').innerText = "U bent ingelogd: " + naam;
    }

    document.getElementById("inputNaam").value = "";
    console.log(loggedIn);
}

document.getElementById("button").onclick = handleLogin;