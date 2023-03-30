var knop = document.createElement('button');
knop.innerText= 'Klik!';
document.body.appendChild(knop);
function verander_h1(){
    var heading = document.getElementById('naam');
    heading.innerHTML = 'Welkom Sean';
}
knop.onclick = verander_h1;