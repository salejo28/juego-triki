//Modal
var modal = document.getElementById('modal');
var card = document.getElementById('card');
var start = document.getElementById('start');
var modalInputs = document.getElementById('modal-start');
var cardInputs = document.getElementById('card-form');
//inputs
var paly = document.getElementById('play');
var inpPlayer1 = document.getElementById('player1');
var inpPlayer2 = document.getElementById('player2');
//alert
var closeAlert = document.getElementById('closeBtn');
var alerts = document.getElementById('alert');
//message
var message = document.getElementById('message');
var labelMessage = document.getElementById('fillTheUsername');
//buttons triki
var tableGame = document.getElementById('table');
var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var p3 = document.getElementById('p3');
var p4 = document.getElementById('p4');
var p5 = document.getElementById('p5');
var p6 = document.getElementById('p6');
var p7 = document.getElementById('p7');
var p8 = document.getElementById('p8');
var p9 = document.getElementById('p9');
//ALert win
var modalWin = document.getElementById('modal-win');
var alertWin = document.getElementById('alert-win');
var messageWin = document.getElementById('h1');
//Btn Restart
var btnRestart = document.getElementById('restart');
//global variables
var game = false;
var turn = 0;
var tab = new Array();
//AddEventListeners
start.addEventListener('click', Modals);
paly.addEventListener('click', theGame);
closeAlert.addEventListener('click', closeTheAlert);
p1.addEventListener('click', function () {
    place(this);
});
p2.addEventListener('click', function () {
    place(this);
});
p3.addEventListener('click', function () {
    place(this);
});
p4.addEventListener('click', function () {
    place(this);
});
p5.addEventListener('click', function () {
    place(this);
});
p6.addEventListener('click', function () {
    place(this);
});
p7.addEventListener('click', function () {
    place(this);
});
p8.addEventListener('click', function () {
    place(this);
});
p9.addEventListener('click', function () {
    place(this);
});
btnRestart.addEventListener('click', restart);
//functions
function Modals() {
    modal.classList.add('disabled');
    card.classList.add('disabled');
    modalInputs.classList.add('visible');
    cardInputs.classList.add('visible');
}
function theGame() {
    game = true;
    if (inpPlayer1.value == "" || inpPlayer2.value == "") {
        alerts.classList.add('show');
    }
    else {
        modalInputs.classList.remove('visible');
        cardInputs.classList.add('hidden');
        alerts.classList.remove('show');
        //show the game
        message.classList.add('show');
        tableGame.classList.add('show');
        //start The game
        tab[0] = p1;
        tab[1] = p2;
        tab[2] = p3;
        tab[3] = p4;
        tab[4] = p5;
        tab[5] = p6;
        tab[6] = p7;
        tab[7] = p8;
        tab[8] = p9;
        for (var i = 0; i < tab.length; i++) {
            tab[i].value = "I";
        }
        turn = 1;
        labelMessage.innerHTML = "Turn of " + inpPlayer1.value;
    }
}
function place(boton) {
    if (game == true) {
        if (turn == 1 && boton.value == "I") {
            turn = 2;
            labelMessage.innerHTML = "Turn of " + inpPlayer2.value;
            boton.value = "X";
            boton.classList.add('x');
        }
        else {
            if (turn == 2 && boton.value == "I") {
                turn = 1;
                labelMessage.innerHTML = "Turn of " + inpPlayer1.value;
                boton.value = "O";
                boton.classList.add('o');
            }
        }
    }
    check();
}
function check() {
    if ((tab[0].value == "X" && tab[1].value == "X" && tab[2].value == "X")
        || (tab[3].value == "X" && tab[4].value == "X" && tab[5].value == "X")
        || (tab[6].value == "X" && tab[7].value == "X" && tab[8].value == "X")
        || (tab[0].value == "X" && tab[3].value == "X" && tab[6].value == "X")
        || (tab[1].value == "X" && tab[4].value == "X" && tab[7].value == "X")
        || (tab[2].value == "X" && tab[5].value == "X" && tab[8].value == "X")
        || (tab[0].value == "X" && tab[4].value == "X" && tab[8].value == "X")
        || (tab[2].value == "X" && tab[4].value == "X" && tab[6].value == "X")) {
        modalWin.classList.add('show');
        alertWin.classList.add('show');
        messageWin.innerHTML = "Congrautulations " + inpPlayer1.value + ", you won";
        game = false;
    }
    if ((tab[0].value == "O" && tab[1].value == "O" && tab[2].value == "O")
        || (tab[3].value == "O" && tab[4].value == "O" && tab[5].value == "O")
        || (tab[6].value == "O" && tab[7].value == "O" && tab[8].value == "O")
        || (tab[0].value == "O" && tab[3].value == "O" && tab[6].value == "O")
        || (tab[1].value == "O" && tab[4].value == "O" && tab[7].value == "O")
        || (tab[2].value == "O" && tab[5].value == "O" && tab[8].value == "O")
        || (tab[0].value == "O" && tab[4].value == "O" && tab[8].value == "O")
        || (tab[2].value == "O" && tab[4].value == "O" && tab[6].value == "O")) {
        modalWin.classList.add('show');
        alertWin.classList.add('show');
        messageWin.innerHTML = "Congrautulations " + inpPlayer2.value + ", you won";
        game = false;
    }
}
function restart() {
    turn = 0;
    game = false;
    message.classList.remove('show');
    tableGame.classList.remove('show');
    modalInputs.classList.add('visible');
    cardInputs.classList.remove('hidden');
    alerts.classList.add('show');
    modalWin.classList.remove('show');
    alertWin.classList.remove('show');
    for (var i = 0; i < tab.length; i++) {
        tab[i].classList.remove('x');
        tab[i].classList.remove('o');
    }
}
function closeTheAlert() {
    alerts.classList.remove('show');
}
