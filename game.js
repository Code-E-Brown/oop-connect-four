export class Game {
    constructor(playerOne, playerTwo) {
        this.name1 = playerOne;
        this.name2 = playerTwo;
        this.currentPlayer = 1;
    }
    getName() {
        return `${this.name1} vs. ${this.name2}`;
    }
    playInColumn() {
        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }
    }
}

