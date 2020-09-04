let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 36;

function criarBG() {
    context.fillStyle = "lightblack";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

criarBG();