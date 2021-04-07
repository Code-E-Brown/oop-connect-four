import { Game } from "./game.js";

let game = undefined;
window.addEventListener("DOMContentLoaded", (event) => {
    let player1 = document.getElementById("player-1-name");
    let player2 = document.getElementById("player-2-name");
    let formHolder = document.getElementById("form-holder")
    formHolder.addEventListener("keyup", (event) =>{
        event.target.id.includes("player-1")
    })

})



