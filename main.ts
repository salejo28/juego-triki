//Modal
const modal = document.getElementById('modal');
const card = document.getElementById('card');
const start = document.getElementById('start');
const modalInputs = document.getElementById('modal-start');
const cardInputs = document.getElementById('card-form');

//inputs
const paly = document.getElementById('play');
const inpPlayer1 = (<HTMLInputElement>document.getElementById('player1'));
const inpPlayer2 = (<HTMLInputElement>document.getElementById('player2'));

//alert
const closeAlert = document.getElementById('closeBtn');
const alerts = document.getElementById('alert');

//message
const message = document.getElementById('message');
const labelMessage = document.getElementById('fillTheUsername');

//buttons triki
const tableGame = document.getElementById('table');
const p1 = (<HTMLInputElement>document.getElementById('p1'));
const p2 = (<HTMLInputElement>document.getElementById('p2'));
const p3 = (<HTMLInputElement>document.getElementById('p3'));
const p4 = (<HTMLInputElement>document.getElementById('p4'));
const p5 = (<HTMLInputElement>document.getElementById('p5'));
const p6 = (<HTMLInputElement>document.getElementById('p6'));
const p7 = (<HTMLInputElement>document.getElementById('p7'));
const p8 = (<HTMLInputElement>document.getElementById('p8'));
const p9 = (<HTMLInputElement>document.getElementById('p9'));

//ALert win
const modalWin = document.getElementById('modal-win');
const alertWin = document.getElementById('alert-win');
const messageWin = document.getElementById('h1');

//Btn Restart
const btnRestart = document.getElementById('restart');

//global variables
let game: boolean = false;
let turn: number = 0;
let tab: any[] = new Array();


//AddEventListeners
start.addEventListener('click', Modals);
paly.addEventListener('click', theGame);
closeAlert.addEventListener('click', closeTheAlert);

p1.addEventListener('click', function () {
    place(this)
});

p2.addEventListener('click', function () {
    place(this)
});

p3.addEventListener('click', function () {
    place(this)
});

p4.addEventListener('click', function () {
    place(this)
});

p5.addEventListener('click', function () {
    place(this)
});

p6.addEventListener('click', function () {
    place(this)
});

p7.addEventListener('click', function () {
    place(this)
});

p8.addEventListener('click', function () {
    place(this)
});

p9.addEventListener('click', function () {
    place(this)
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
    game = true
    if (inpPlayer1.value == "" || inpPlayer2.value == "") {
        alerts.classList.add('show')
    } else {
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

        for (let i = 0; i < tab.length; i++) {
            tab[i].value = "I"
        }

        turn = 1;
        labelMessage.innerHTML = "Turn of " + inpPlayer1.value;

    }
}

function place(boton) { 
    if (game == true) {
        if (turn == 1 && boton.value == "I") {
            turn = 2
            labelMessage.innerHTML = "Turn of " + inpPlayer2.value;
            boton.value = "X"
            boton.classList.add('x')
        } else {
            if (turn == 2 && boton.value == "I") {
                turn = 1;
                labelMessage.innerHTML = "Turn of " + inpPlayer1.value;
                boton.value = "O"
                boton.classList.add('o');
            }
        }
    }
    check()
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
    else {
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
    if ((tab[0].value != "I" && tab[1].value != "I" && tab[2].value != "I")
        && (tab[3].value != "I" && tab[4].value != "I" && tab[5].value != "I")
        && (tab[6].value != "I" && tab[7].value != "I" && tab[8].value != "I")
        && (tab[0].value != "I" && tab[3].value != "I" && tab[6].value != "I")
        && (tab[1].value != "I" && tab[4].value != "I" && tab[7].value != "I")
        && (tab[2].value != "I" && tab[5].value != "I" && tab[8].value != "I")
        && (tab[0].value != "I" && tab[4].value != "I" && tab[8].value != "I")
        && (tab[2].value != "I" && tab[4].value != "I" && tab[6].value != "I")) {
        if (!((tab[0].value == tab[1].value == tab[2].value)
            || (tab[3].value == tab[4].value == tab[5].value)
            || (tab[6].value == tab[7].value == tab[8].value)
            || (tab[0].value == tab[3].value == tab[6].value)
            || (tab[1].value == tab[4].value == tab[7].value)
            || (tab[2].value == tab[5].value == tab[8].value)
            || (tab[0].value == tab[4].value == tab[8].value)
            || (tab[2].value == tab[4].value == tab[6].value))) {
            modalWin.classList.add('show');
            alertWin.classList.add('show');
            messageWin.innerHTML = inpPlayer1.value + " and " + inpPlayer2.value + ", this was a tie";
            game = false;
        }
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

    for (let i = 0; i < tab.length; i++) {
        tab[i].classList.remove('x')
        tab[i].classList.remove('o')        
    }
}

function closeTheAlert() {
    alerts.classList.remove('show')
}
