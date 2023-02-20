function abrirWord() {            
    var boton = document.getElementById("link");
    boton.setAttribute("href","cvGerRod.docx");
    boton.click();
}
function cambiarColor(x){
    var body = document.getElementById("body");
    body.style.backgroundColor=x.value;
    var header = document.getElementById("header");
    header.style.backgroundColor = x.value;
}
