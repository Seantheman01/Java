var knop = document.createElement('button');
knop.innerText= 'Klik!';
document.body.appendChild(knop);
var heading = document.getElementById('naam');
heading.innerHTML = 'Welkom Sean';
knop.onclick = heading;