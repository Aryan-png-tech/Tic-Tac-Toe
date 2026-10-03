let board = ["", "", "", "", "", "", "", "", ""];
let player = "X";
let gameOver = false;

function play(index) {

    if (board[index] != "" || gameOver) {
        return;
    }

    board[index] = player;

    let cell = document.getElementsByClassName("cell")[index];

    cell.innerText = player;

    
    if (player == "X") {
        cell.classList.add("x");
    } else {
        cell.classList.add("o");
    }

    checkWinner();

    if (!gameOver) {

        if (player == "X") {
            player = "O";
        } else {
            player = "X";
        }

        document.getElementById("turn").innerText =
            "Player " + player + "'s Turn";
    }
}


function checkWinner() {

    let winningPositions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let position of winningPositions) {

        let a = position[0];
        let b = position[1];
        let c = position[2];

        if (board[a] != "" &&
            board[a] == board[b] &&
            board[b] == board[c]) {

            document.getElementById("turn").innerText =
                "Player " + player + " Wins!";

            gameOver = true;

            return;
        }
    }

    if (!board.includes("")) {

        document.getElementById("turn").innerText =
            "It's a Draw!";

        gameOver = true;
    }
}


function restart() {

    board = ["", "", "", "", "", "", "", "", ""];

    player = "X";

    gameOver = false;

    let cells = document.getElementsByClassName("cell");

    for (let cell of cells) {
        cell.innerText = "";

        
        cell.classList.remove("x");
        cell.classList.remove("o");
    }

    document.getElementById("turn").innerText =
        "Player X's Turn";
}