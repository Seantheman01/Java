let naam_ingelogd = "";


function handleLogin(){
    let naam = document.getElementById("inputNaam").value;
    console.log("U hebt op de knop geklikt!");
    if (naam_ingelogd === ""){
        console.log("U bent ingelogd: " + naam);
    }
}