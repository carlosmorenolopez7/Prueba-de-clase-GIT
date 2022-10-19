function disorganice(cad_arg){
    let lowerCasedString = cad_arg.toLowerCase();
    let resultingString = "";
    let beginingofString= "";
    let endOfString="";
}

for (let i=0;i<cad_arg.length;i++) {
    let char=lowerCasedString.charCodeAt(i);
    if(char==97||char==101||char==105||char==111||char==117){
        beginingofString = beginingofString + cad_arg.charAt(i);
    }else{
        if(char!=32){
            endOfString = endOfString + cad_arg.charAt(i);
        }
    }
}

resultingString = beginingofString + endOfString;
document.write(resultingString + "<br>");
return resultingString;