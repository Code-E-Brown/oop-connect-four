export class Game {
    constructor(playerOne, playerTwo){
        this.name1 = playerOne;
        this.name2 = playerTwo;
    }
    getName() {
        return `${this.name1} vs. ${this.name2}`;
    }
}

