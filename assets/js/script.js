var c = document.getElementById("home");
var ctx = c.getContext("2d");
//Carré principale de la maison
ctx.fillStyle = '#A2D8E5'
ctx.fillRect(150, 150, 200, 200);
//fenetre gauche
ctx.fillStyle = '#C9C9C9';
ctx.fillRect(175, 175, 50, 50);
//fenetre droite
ctx.fillStyle = '#C9C9C9';
ctx.fillRect(275, 175, 50, 50);
//porte
ctx.fillStyle = '#C9C9C9';
ctx.fillRect(225, 275, 50, 75);
//toit
ctx.fillStyle = '#D68241';
ctx.fillRect(150, 50, 200, 100);
//rectangle supprimant la partie gauche toit
ctx.rotate(40 * Math.PI / 180);
ctx.fillStyle = '#FFFFFF';
ctx.fillRect(110, -112, 100, 130);
//rectangle supprimant la partie droite toit
ctx.rotate(5 * Math.PI / 180);
ctx.fillStyle = '#FFFFFF';
ctx.fillRect(202, -270, 150, 130);
