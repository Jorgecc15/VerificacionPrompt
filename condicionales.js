let urlcarafeliz = "https://w7.pngwing.com/pngs/636/645/png-transparent-smiley-emoticon-happy-face-icon-good-sign-symbol-character-cheerful.png"
let urlcaratriste = "https://www.pikpng.com/pngl/m/371-3711139_cara-feliz-y-triste-png-deutsch-biginf-smiley.png"
let imgHtml = document.querySelector("#imagencara")
let nota1 = Number (prompt("Ingrese su primera nota"))
let nota2 = Number (prompt("Ingrese su segunda nota"))
let nota3 = Number (prompt("Ingrese su tercera nota"))
let p = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3;
do{
    nota1=parseInt(prompt("ingrese su primera nota de nuevo"))
} while (isNaN (nota1))
do{
    nota2=parseInt(prompt("ingrese su primera nota de nuevo"))
} while (isNaN (nota2))
do{
    nota2=parseInt(prompt("ingrese su primera nota de nuevo"))
} while (isNaN (nota2))

alert("Su promedio es: "+ p)
if (p>6){
    imgHtml.src = urlcarafeliz
}
else{
    imgHtml.src = urlcaratriste
}
