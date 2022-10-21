function getRandomInt(num) {
    return Math.floor(Math.random() * num);
}

var map = [
[[],[],[],[],[]],
[[],[],[],[],[]],
[[],[],[],[],[]],
[[],[],[],[],[]],
[[],[],[],[],[]]];

function crear(map){
    let x = getRandomInt(5), y = getRandomInt(5);
    map[x][y].push(x+1,y+1);
    sigue = true;
    while(sigue){
        aux = [x,y];
        x = getRandomInt(5);
        y = getRandomInt(5);

        if(map[x][y] == '')
            map[x][y] = [aux[0]+1,aux[1]+1];
        if(x==0 && y==0)
            sigue = false;
    }
    for(i=0;i<map.length;i++){
        for(j=0;j<map[i].length;j++){
            if(map[i][j] == '')
                map[i][j] = [getRandomInt(5)+1,getRandomInt(5)+1]
        }
    }
    return map
}