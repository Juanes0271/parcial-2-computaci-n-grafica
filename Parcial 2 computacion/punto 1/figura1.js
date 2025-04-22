let figura1=document.getElementById("figura1")
let lienzo1=figura1.getContext('2d')

lienzo1.beginPath()
//centro
lienzo1.moveTo(250,250)
lienzo1.lineTo(250,135)
lienzo1.lineTo(135,192.5)
lienzo1.lineTo(135,307.5)
lienzo1.lineTo(250,250)
lienzo1.moveTo(250,250)
lienzo1.lineTo(365,307.5)
lienzo1.lineTo(250,365)
lienzo1.lineTo(135,307.5)
lienzo1.lineTo(250,250)

//Rampa
lienzo1.moveTo(365,307.5)
lienzo1.lineTo(250,135)
lienzo1.lineTo(365,77.5)
lienzo1.lineTo(480,250)
lienzo1.lineTo(365,307.5)

//triangulo
lienzo1.moveTo(250,250)
lienzo1.lineTo(250,135)
lienzo1.lineTo(365,307.5)

//L de la izquierda
lienzo1.moveTo(250,365)
lienzo1.lineTo(250,480)
lienzo1.lineTo(20,365)
lienzo1.lineTo(20,135)
lienzo1.lineTo(135,192.5)
lienzo1.lineTo(135,307.5)

//rectangulo superior
lienzo1.moveTo(365,77.5)
lienzo1.lineTo(250,20)
lienzo1.lineTo(20,135)
lienzo1.lineTo(135,192.5)

//rectangulo inferior
lienzo1.moveTo(480,250)
lienzo1.lineTo(480,365)
lienzo1.lineTo(250,480)
lienzo1.lineTo(250,365)

lienzo1.moveTo(0,0)
lienzo1.strokeStyle="black"
lienzo1.fillStyle = "yellow";
lienzo1.fill();
lienzo1.closePath()
lienzo1.stroke()