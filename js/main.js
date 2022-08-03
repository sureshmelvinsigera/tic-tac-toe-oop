class TicTacToe {
    constructor() {
        // instance variables
        this.gridButtons = document.querySelectorAll("a");   // get all the grid buttons
        this.winMessageDiv = document.querySelector("#message"); // get win message div
        this.countClicks = 0;
    }

    setClickListenerAndLoadGame() {
        // must use arrow function to prevent
        // "Potentially invalid reference access to a class field via 'this.' of a nested function" warning message.
        this.gridButtons.forEach(currentBox => {
            let buttonStyle = currentBox.style;
            // must use arrow function to prevent
            // "Potentially invalid reference access to a class field via 'this.' of a nested function" warning message.
            currentBox.addEventListener('click', () => {
                if (this.countClicks % 2 === 0 && buttonStyle.backgroundColor !== 'red' && buttonStyle.backgroundColor !== 'blue') {
                    console.log(this.countClicks % 2 === 0);
                    // red player
                    buttonStyle.backgroundColor = 'red';
                    this.countClicks += 1;
                } else if (buttonStyle.backgroundColor !== 'red' && buttonStyle.backgroundColor !== 'blue') {
                    // blue player
                    buttonStyle.backgroundColor = 'blue';
                    this.countClicks += 1;
                }
                this.pickWinner();
            });
        });
    }


    // instance method
    pickWinner() {
        /**
         * Algorithm to detect game winner
         */
        /*
         [0, 1, 2]
         [3, 4, 5]
         [6, 7, 8]
         */
        if (this.gridButtons[0].style.backgroundColor === this.gridButtons[1].style.backgroundColor && this.gridButtons[1].style.backgroundColor === this.gridButtons[2].style.backgroundColor && this.gridButtons[0].style.backgroundColor !== "") {
            this.winMessageDiv.innerHTML = `${this.gridButtons[0].style.backgroundColor} player won the game`;
            // since reloadGame() is a static method, we need to use className.methodName() to call it.
            TicTacToe.reloadGame();
        } else if (this.gridButtons[3].style.backgroundColor === this.gridButtons[4].style.backgroundColor && this.gridButtons[4].style.backgroundColor === this.gridButtons[5].style.backgroundColor && this.gridButtons[3].style.backgroundColor !== "") {
            this.winMessageDiv.innerHTML = `${this.gridButtons[3].style.backgroundColor} player won the game`;
            TicTacToe.reloadGame();
        } else if (this.gridButtons[6].style.backgroundColor === this.gridButtons[7].style.backgroundColor && this.gridButtons[7].style.backgroundColor === this.gridButtons[8].style.backgroundColor && this.gridButtons[6].style.backgroundColor !== "") {
            this.winMessageDiv.innerHTML = `${this.gridButtons[6].style.backgroundColor} player won the game`;
            TicTacToe.reloadGame();
        } else if (this.gridButtons[0].style.backgroundColor === this.gridButtons[3].style.backgroundColor && this.gridButtons[3].style.backgroundColor === this.gridButtons[6].style.backgroundColor && this.gridButtons[0].style.backgroundColor !== "") {
            this.winMessageDiv.innerHTML = `${this.gridButtons[0].style.backgroundColor} player won the game`;
            TicTacToe.reloadGame();
        } else if (this.gridButtons[1].style.backgroundColor === this.gridButtons[4].style.backgroundColor && this.gridButtons[4].style.backgroundColor === this.gridButtons[7].style.backgroundColor && this.gridButtons[1].style.backgroundColor !== "") {
            this.winMessageDiv.innerHTML = `${this.gridButtons[1].style.backgroundColor} player won the game`;
            TicTacToe.reloadGame();
        } else if (this.gridButtons[2].style.backgroundColor === this.gridButtons[5].style.backgroundColor && this.gridButtons[5].style.backgroundColor === this.gridButtons[8].style.backgroundColor && this.gridButtons[2].style.backgroundColor !== "") {
            this.winMessageDiv.innerHTML = `${this.gridButtons[2].style.backgroundColor} player won the game`;
            TicTacToe.reloadGame();
        } else if (this.gridButtons[0].style.backgroundColor === this.gridButtons[4].style.backgroundColor && this.gridButtons[4].style.backgroundColor === this.gridButtons[8].style.backgroundColor && this.gridButtons[0].style.backgroundColor !== "") {
            this.winMessageDiv.innerHTML = `${this.gridButtons[0].style.backgroundColor} player won the game`;
            TicTacToe.reloadGame();
        } else if (this.gridButtons[2].style.backgroundColor === this.gridButtons[4].style.backgroundColor && this.gridButtons[4].style.backgroundColor === this.gridButtons[6].style.backgroundColor && this.gridButtons[2].style.backgroundColor !== "") {
            this.winMessageDiv.innerHTML = `${this.gridButtons[2].style.backgroundColor} player won the game!`;
            TicTacToe.reloadGame();
        } else if (this.countClicks === 9) {
            this.winMessageDiv.innerHTML = `You both lose!`;
            TicTacToe.reloadGame();
        }
    }

    // static method to reset the game
    static reloadGame() {
        // https://stackoverflow.com/questions/2787679/how-to-reload-page-every-5-seconds
        setTimeout(function () {
            window.location.reload();
        }, 2000);
    }
}

// create new TicTacToe object
let game = new TicTacToe();
// call setClickListenerAndLoadGame();
game.setClickListenerAndLoadGame();