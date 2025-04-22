let figura3=document.getElementById("figura3")
let lienzo3=figura3.getContext('2d')

lienzo3.beginPath()
// rampa izquierda
lienzo3.moveTo(135,307.5)
lienzo3.lineTo(20,135)
lienzo3.lineTo(135,77.5)
lienzo3.lineTo(250,250)
lienzo3.lineTo(135,307.5)

// cuadro central
lienzo3.moveTo(250,250)
lienzo3.lineTo(365,307.5)
lienzo3.lineTo(250,365)
lienzo3.lineTo(135,307.5)

//Rampa derecha
lienzo3.moveTo(365,307.5)
lienzo3.lineTo(250,135)
lienzo3.lineTo(365,77.5)
lienzo3.lineTo(480,250)
lienzo3.lineTo(365,307.5)

//Rampa central
lienzo3.moveTo(250,250)
lienzo3.lineTo(135,77.5)
lienzo3.lineTo(250,135)
lienzo3.lineTo(365,307.5)

//L de la izquierda
lienzo3.moveTo(250,365)
lienzo3.lineTo(250,480)
lienzo3.lineTo(20,365)
lienzo3.lineTo(20,135)
lienzo3.lineTo(135,307.5)

//cuadrado superior
lienzo3.moveTo(365,77.5)
lienzo3.lineTo(250,20)
lienzo3.lineTo(135,77.5)
lienzo3.lineTo(250,135)

//rectangulo inferior
lienzo3.moveTo(480,250)
lienzo3.lineTo(480,365)
lienzo3.lineTo(250,480)
lienzo3.lineTo(250,365)

lienzo3.moveTo(0,0)
lienzo3.strokeStyle="black"
lienzo3.fillStyle = "red";
lienzo3.fill();
lienzo3.closePath()
lienzo3.stroke()