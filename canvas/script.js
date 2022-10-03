function formatFigure(name, team) {
    return `../figures/${team == 0 ? 'b' : 'w'}_${name}_png_shadow_128px.png`;
}

function makeImage(name, team) {
    var elem = document.createElement("img");
    elem.setAttribute("src", formatFigure(name, team));
    elem.style.width = "40px";
    elem.style.height = "40px";
    elem.style.padding = "5px";
    elem.style.position = "absolute";
    elem.style.backgroundColor = "transparent";
    return elem;
}

let sorrend = [
    "rook",
    "knight",
    "bishop",
    "queen",
    "king",
    "bishop",
    "knight",
    "rook",
    "",
    "pawn",
    "pawn",
    "pawn",
    "pawn",
    "pawn",
    "pawn",
    "pawn",
    "pawn",
];

var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.font = '24px serif';

ctx.fillStyle = "#1f8cce";
ctx.fillRect(0, 0, c.width, c.height)

function drawBoard() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let xpos = 50 +j * 50;
            let ypos = 50 + i * 50;

            ctx.fillStyle = i % 2 == 0 ? j % 2 == 0 ? "black" : "white" : j % 2 == 0 ? "white" : "black";
            ctx.fillRect(xpos, ypos, 50, 50);
        }
    }

    ctx.fillStyle = "white";

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 8; j++) {
            let xpos = 69 + j * 50;
            let ypos = i == 0 ? 31 : 479;
            ctx.fillText(j + 1, xpos, ypos);
        }
    }

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 8; j++) {
            let ypos = 85 + j * 50;
            let xpos = i == 0 ? 20 : 470;

            ctx.fillText(String.fromCharCode(j + 65).toLowerCase(), xpos, ypos);
        }
    }
}

drawBoard();