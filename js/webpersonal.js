// alert("js funciona")

function retornarLienzo(x) {
    var canvas = document.getElementById(x);
    if (canvas.getContext) {
        var lienzo = canvas.getContext("2d");   
        return lienzo;
    } else
        return false;
}

function dibujar() {
    var lienzo=retornarLienzo("lienzo1");
    if (lienzo) {
        lienzo.fillStyle="rgb(255,0,0)";
        lienzo.fillRect(10,10,50,50);
        lienzo.fillStyle="rgba(0,255,0,0.3)";
        lienzo.fillRect(40,40,50,50);
    }
}

function sumaRepetida(){
    let input_first  = Number(prompt());
    let input_second = Number(prompt());

    var a= 0

    while (input_first != 100){
        input_first += 1
        a += input_first
       console.log(a)
    }
    alert(a)
}

function saludo(edad, genero){
    if (edad > 18 ){
        if (genero = "M"){
            alert("Buen dia señor")
        }else{
            alert("Buen dia señora")
        }
    }else if (edad = 18){
        alert("°~°")
    }else{
        alert("D:<")
    }
}

function changeColor(newColor) {
    var elem = document.getElementById("paletaColores");
    elem.style.color = newColor;
}