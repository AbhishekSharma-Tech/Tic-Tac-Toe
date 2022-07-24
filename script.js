let music = new Audio("music/bgsound.mp3")
let audioTurn = new Audio("music/beep.mp3")
let gameover = new Audio("music/gameover2.mp3")

let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// music.play();

const ticTacToe = (element, index) => {
    audioTurn.play();
    element.value = currentPlayer;
    element.disabled = true;
    cells[index] = currentPlayer;
    currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
    result.innerHTML = `Player ${currentPlayer} Turn`;

    for (let i = 0; i < conditions.length; i++) {
        let condition = conditions[i];
        let a = cells[condition[0]];
        let b = cells[condition[1]];
        let c = cells[condition[2]];

        if (a == '' || b == '' || c == '') {
            continue;
        }

        if ((a == b) && (b == c)) {
            result.innerHTML = `Player ${a} Won 🎉`;
            gameover.play();
            btns.forEach((btn) => btn.disabled = true);
        }
    }
};

function reset() {
    cells = ['', '', '', '', '', '', '', '', ''];
    btns.forEach((btn) => {
        btn.value = '';
    });
    currentPlayer = 'X';
    result.innerHTML = `Player X Turn`;
    btns.forEach((btn) => btn.disabled = false);
};

document.querySelector('#reset').addEventListener('click', reset);

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});


// function plays() {
//     let gameover = new Audio("gameover.mp3");
//     if(audio.paused) {
//         audio.plays();
//     }else {
//         audio.currentTime = 0
//     }
// }