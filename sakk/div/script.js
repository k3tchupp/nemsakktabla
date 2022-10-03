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
]

let sakkboard = document.getElementById("sakk");
let cols = sakkboard.getElementsByTagName("div");

window.onload = function () {

    for (let index = 0; index < sorrend.length; index++) {
        const element = sorrend[index];
        if (element == "") continue;

        cols[index].appendChild(makeImage(element, 0));
        cols[cols.length - 2 - index].appendChild(makeImage(element, 1));
    }
}