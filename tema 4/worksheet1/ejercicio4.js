function canvas(){
    document.write("<table border=1px solid black width=1000 height=500>")
    for(x=0;x<=100;x++){
        document.write("<tr>");
        for(y=0;y<=100;y++){
            document.write("<td name=td></td>")
        }
        document.write("</tr>");
    }
}

function colorear(){
    [...document.getElementsByTagName("td")].forEach(td => {
        document.addEventListener("mousemove", cambiarColor)
    });
}

function cambiarColor(e){
    if(e.ctrlKey)
        this.style.background="rgb(250,0,0)";
    else if(e.shiftKey)
        this.style.background="rgb(0,250,0)";
}

window.onload = () => {
    canvas();
    colorear();
}