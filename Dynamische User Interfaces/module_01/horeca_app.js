let bestel_lijst = [];

let nieuw = new Object();
bestelling['drank'] = 'fris';
bestelling['aantal'] = 3;

bestel_lijst.push(nieuw);
bestelling.push({'drank': 'bier', 'aantal': 3});
bestelling[1]['aantal'] += 3;

console.log(bestelling)