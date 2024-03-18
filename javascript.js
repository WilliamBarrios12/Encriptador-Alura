function reiniciarCampo() {
    document.getElementById("caja-mensaje").value = "";
    document.getElementById('btn-copy').innerHTML = "Copiar";
}

function encriptar() {

    let mensaje = document.getElementById("caja-mensaje").value;
    mensaje = mensaje.replaceAll("e","enter");
    mensaje = mensaje.replaceAll("i","imes");
    mensaje = mensaje.replaceAll("a","ai");
    mensaje = mensaje.replaceAll("o","ober");
    mensaje = mensaje.replaceAll("u","ufat");
    document.getElementById("mensaje-encriptado").value = mensaje;
    reiniciarCampo();
    opacidad();
    cambiarAtributo("Ingrese el texto a encriptar o desencriptar");
}

function desencriptar(){

    let mensaje = document.getElementById("caja-mensaje").value;
    mensaje = mensaje.replaceAll("enter","e");
    mensaje = mensaje.replaceAll("imes","i");   
    mensaje = mensaje.replaceAll("ai","a");
    mensaje = mensaje.replaceAll("ober","o");
    mensaje = mensaje.replaceAll("ufat","u");
    document.getElementById("mensaje-encriptado").value = mensaje;
    reiniciarCampo();
    opacidad();
    cambiarAtributo("Ingrese el texto a encriptar o desencriptar");
    
}

function opacidad() {
    let elemento = document.getElementById("mensaje-encriptado");
    elemento.classList.remove("opac");
}

function copiar() {

    let texto = document.getElementById("mensaje-encriptado");
    texto.select();
    texto.setSelectionRange(0,9999);
    document.execCommand('copy');
    document.getElementById('btn-copy').innerHTML = "Copiado";

    document.getElementById("mensaje-encriptado").value = "";

}

function verificarTexto() {

    let name = document.getElementById("caja-mensaje").value;
    let regex = /^[a-z]+(\s[a-z]+)*$/;

    if (regex.test(name)) {
        encriptar();
    } else {
        cambiarAtributo("Solo letras minusculas");
    }
}

function verificarTexto2() {

    let name = document.getElementById("caja-mensaje").value;
    let regex = /^[a-z]+(\s[a-z]+)*$/;

    if (regex.test(name)) {
        desencriptar();
    } else {
        cambiarAtributo("Solo letras minusculas");
    }
}

function cambiarAtributo(param) {
    let texto = document.getElementById('caja-mensaje');

    texto.setAttribute("placeholder",param)
    reiniciarCampo();
}
