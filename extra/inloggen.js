let loggedIn = [];

function getString(datum1, datum2){
    let seconden = (datum1 - datum2) / 1000;
    if (seconden > 60){
        const minuten = Math.floor(seconden / 60);
    }
    seconden -= verschil * 60;
    return 'Gewerkt:' + minuten + 'minuten' + seconden + 'seconden';
}

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
    console.log(Date());

    let naam = document.getElementById("inputNaam").value;
    if (naam.length <= 0){
        alert("Voer een naam in!");
        return;
    }
    console.log("U hebt op de knop geklikt.");

    const positie = getIndexOfElementByName(loggedIn, naam);
    if (positie !== null){
        const oldDate = loggedIn[positie]['tijd']
        const newDate = new Date();
        const verschil = (newDate - oldDate) / 1000;
    
        loggedIn.splice(positie, 1);
        console.log("Uitgelogd");
        document.getElementById('melding').innerText = "U bent uitgelogd: " + naam + getString(newDate, oldDate);

    } else{
        loggedIn.push({'naam': naam, 'tijd': new Date()});
        console.log("Ingelogd");
        document.getElementById('melding').innerText = "U bent ingelogd: " + naam + getString(newDate, oldDate);
    }

    document.getElementById("inputNaam").value = "";
    console.log(loggedIn);
}

document.getElementById("button").onclick = handleLogin;