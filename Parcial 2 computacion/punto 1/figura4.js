let figura4=document.getElementById("figura4")
let lienzo4=figura4.getContext('2d')

lienzo4.beginPath()
//triangulo de la izquierda
lienzo4.moveTo(250,480)
lienzo4.lineTo(20,365)
lienzo4.lineTo(20,135)

// rampa izquierda
lienzo4.moveTo(135,307.5)
lienzo4.lineTo(20,135)
lienzo4.lineTo(135,77.5)
lienzo4.lineTo(250,250)
lienzo4.lineTo(135,307.5)

//cuadrado superior
lienzo4.moveTo(365,77.5)
lienzo4.lineTo(250,20)
lienzo4.lineTo(135,77.5)
lienzo4.lineTo(250,135)
lienzo4.lineTo(365,77.5)

//cuadro debajo del superior
lienzo4.moveTo(365,77.5)
lienzo4.lineTo(365,192.5)
lienzo4.lineTo(250,250)
lienzo4.lineTo(250,135)

//triangulo superior
lienzo4.moveTo(250,250)
lienzo4.lineTo(250,135)
lienzo4.lineTo(135,77.5)

// rectangulo central
lienzo4.moveTo(365,192.5)
lienzo4.lineTo(480,250)
lienzo4.lineTo(365,307.5)
lienzo4.lineTo(135,307.5)

//rectangulo inferior
lienzo4.moveTo(480,250)
lienzo4.lineTo(480,365)
lienzo4.lineTo(250,480)
lienzo4.lineTo(365,307.5)

//triangulo inferior
lienzo4.moveTo(365,307.5)
lienzo4.lineTo(250,480)
lienzo4.lineTo(135,307.5)

lienzo4.moveTo(0,0)
lienzo4.strokeStyle="black"
lienzo4.fillStyle = "green";
lienzo4.fill();
lienzo4.closePath()
lienzo4.stroke()