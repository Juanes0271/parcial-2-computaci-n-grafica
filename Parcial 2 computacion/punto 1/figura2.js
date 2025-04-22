let figura2=document.getElementById("figura2")
let lienzo2=figura2.getContext('2d')

lienzo2.beginPath()
//centro
lienzo2.moveTo(250,250)
lienzo2.lineTo(250,135)
lienzo2.lineTo(135,192.5)
lienzo2.lineTo(135,307.5)
lienzo2.lineTo(250,250)
lienzo2.moveTo(250,250)
lienzo2.lineTo(365,307.5)
lienzo2.lineTo(250,365)
lienzo2.lineTo(135,307.5)
lienzo2.lineTo(250,250)



//triangulo
lienzo2.moveTo(250,250)
lienzo2.lineTo(250,135)
lienzo2.lineTo(365,192.5)
lienzo2.lineTo(365,307.5)
lienzo2.lineTo(250,250)

//L de la izquierda
lienzo2.moveTo(250,365)
lienzo2.lineTo(250,480)
lienzo2.lineTo(20,365)
lienzo2.lineTo(20,135)
lienzo2.lineTo(135,192.5)
lienzo2.lineTo(135,307.5)

//L Superior
lienzo2.moveTo(480,135)
lienzo2.lineTo(250,20)
lienzo2.lineTo(20,135)
lienzo2.lineTo(135,192.5)
lienzo2.lineTo(250,135)
lienzo2.lineTo(365,192.5)


//L de la derecha
lienzo2.moveTo(365,307.5)
lienzo2.lineTo(365,192.5)
lienzo2.lineTo(480,135)
lienzo2.lineTo(480,365)
lienzo2.lineTo(250,480)
lienzo2.lineTo(250,365)

lienzo2.moveTo(0,0)
lienzo2.strokeStyle="black"
lienzo2.fillStyle = "lightblue";
lienzo2.fill();
lienzo2.closePath()
lienzo2.stroke()