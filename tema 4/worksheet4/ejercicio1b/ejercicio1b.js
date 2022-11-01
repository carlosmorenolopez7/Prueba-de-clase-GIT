window.addEventListener("load", primera);

function primera() {
    document.getElementById("normal").addEventListener("click", ponerCss);
    document.getElementById("minimalista").addEventListener("click", quitarCss);
}
function ponerCss(){
    var link = document.head.getElementsByTagName("link")[0];
    link.href = "normal.css";
}
function quitarCss(){
    var link = document.head.getElementsByTagName("link")[0];
    link.href = "minimalista.css";

}