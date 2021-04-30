const WindowWidth = 1000;
let PreviousX = 500;
let pillarWidth = 10;
let distanceAllowed = 300;
let min = 50;

let count = 0;
let torsk = 0;
function GenerateXpos() {
    let fisk = Math.floor(Math.random() * (distanceAllowed*2)) + (PreviousX - distanceAllowed);
    while (Math.abs(fisk-PreviousX) < 50) {
        fisk = Math.floor(Math.random() * (distanceAllowed*2)) + (PreviousX - distanceAllowed);
        count++;
        let sei = parseInt(count/10000);
        if (sei > torsk) {
            console.log(count);
        }
        torsk = parseInt(count/10000);
    }
    xPos = fisk;
    xPos = CheckXPos(xPos);
    PreviousX = xPos;
    if (xPos >= 1000) return true;
}
function CheckXPos(xPos){
    if (xPos + pillarWidth >= WindowWidth) return WindowWidth + (WindowWidth - xPos - pillarWidth*2); // for langt til høyre
    else if (xPos < 0) return Math.abs(xPos); // for langt til venstre
    return xPos;
}

while (!GenerateXpos()) {
}