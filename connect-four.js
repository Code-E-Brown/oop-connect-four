import { Game } from "./game.js";

let game = undefined;

let player1 = document.getElementById("player-1-name");
let player2 = document.getElementById("player-2-name");
let formHolder = document.getElementById("form-holder")
let newGameButton = document.getElementById("new-game")
let clickTargets = document.getElementById("click-targets")

let updateUI = function () {
    if (game === undefined) {
        document.getElementById("board-holder").classList.add("is-invisible")
    } else if (game !== undefined) {
        document.getElementById("board-holder").classList.remove("is-invisible")
        document.getElementById("game-name").innerHTML = `${game.getName()}`
        if (game.currentPlayer === 1) {
            clickTargets.classList.add("black")
            clickTargets.classList.remove("red")
        } else {
            clickTargets.classList.remove("black")
            clickTargets.classList.add("red")
        }
    }

}


window.addEventListener("DOMContentLoaded", (event) => {

    formHolder.addEventListener("keyup", (event) => {
        let name1 = player1.value;
        let name2 = player2.value;
        if (name1.length > 0 && name2.length > 0) {
            document.getElementById("new-game").disabled = false;
        }
    })
    newGameButton.addEventListener("click", event => {
        game = new Game(player1.value, player2.value)
        player1.value = ""
        player2.value = ""
        document.getElementById("new-game").disabled = true;
        updateUI();
    })

    clickTargets.addEventListener("click", event => {

        game.playInColumn();
        updateUI();

    })

})



