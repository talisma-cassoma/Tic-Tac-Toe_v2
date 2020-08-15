var id;
var xo = "X";
var estado = 1;
var clicksound = new Audio("smb-coin.mp3");
var winsound = new Audio("smb-powerup.mp3");
var quadrante = ["a", "b", "c", "d", "e", "f", "g", "h", "k"];

function check(estado, id) {
	if (estado % 2 == 0) {
		document.getElementById(id).style.color = "white";
		return (xo = "X");
	} else {
		document.getElementById(id).style.color = "#2F4F4F";
		return (xo = "O");
	}
}

function restartGame() {
	location.reload();
}

function felicitacoes() {
	winsound.play();
	document.getElementById("winimage").src =
		"https://cdn.dribbble.com/users/1884546/screenshots/4969286/you-win-slower-jump-800-x-600.gif";
}
function vencedor() {
	if (quadrante[0] == quadrante[1] && quadrante[1] == quadrante[2]) {
		felicitacoes();
	}
	if (quadrante[3] == quadrante[4] && quadrante[3] == quadrante[5]) {
		felicitacoes();
	}
	if (quadrante[6] == quadrante[7] && quadrante[7] == quadrante[8]) {
		felicitacoes();
	}
	if (quadrante[0] == quadrante[3] && quadrante[3] == quadrante[6]) {
		felicitacoes();
	}
	if (quadrante[1] == quadrante[4] && quadrante[4] == quadrante[7]) {
		felicitacoes();
	}
	if (quadrante[2] == quadrante[5] && quadrante[5] == quadrante[8]) {
		felicitacoes();
	}
	if (quadrante[0] == quadrante[4] && quadrante[4] == quadrante[8]) {
		felicitacoes();
	}
	if (quadrante[2] == quadrante[4] && quadrante[4] == quadrante[6]) {
		felicitacoes();
	}
}

function escreve(square) {
	if (quadrante[0] != "O" && quadrante[0] != "X" && square == 1) {
		id = "um";
		document.getElementById("um").innerHTML = check(estado, id);
		quadrante[square - 1] = xo;
		clicksound.play();
		estado = estado + 1;
		vencedor();
	}
	if (quadrante[1] != "O" && quadrante[1] != "X" && square == 2) {
		id = "dois";
		document.getElementById("dois").innerHTML = check(estado, id);
		quadrante[square - 1] = check(estado, id);
		clicksound.play();
		estado = estado + 1;
		vencedor();
	}
	if (quadrante[2] != "O" && quadrante[2] != "X" && square == 3) {
		id = "tres";
		document.getElementById("tres").innerHTML = check(estado, id);
		quadrante[square - 1] = check(estado, id);
		clicksound.play();
		estado = estado + 1;
		vencedor();
	}
	if (quadrante[3] != "O" && quadrante[3] != "X" && square == 4) {
		id = "quatro";
		document.getElementById("quatro").innerHTML = check(estado, id);
		quadrante[square - 1] = check(estado, id);
		clicksound.play();
		estado = estado + 1;
		vencedor();
	}
	if (quadrante[4] != "O" && quadrante[4] != "X" && square == 5) {
		id = "cinco";
		document.getElementById("cinco").innerHTML = check(estado, id);
		quadrante[square - 1] = check(estado, id);
		clicksound.play();
		estado = estado + 1;
		vencedor();
	}
	if (quadrante[5] != "O" && quadrante[5] != "X" && square == 6) {
		id = "seis";
		document.getElementById("seis").innerHTML = check(estado, id);
		quadrante[square - 1] = check(estado, id);
		clicksound.play();
		estado = estado + 1;
		vencedor();
	}
	if (quadrante[6] != "O" && quadrante[6] != "X" && square == 7) {
		id = "sete";
		document.getElementById("sete").innerHTML = check(estado, id);
		quadrante[square - 1] = check(estado, id);
		clicksound.play();
		estado = estado + 1;
		vencedor();
	}
	if (quadrante[7] != "O" && quadrante[7] != "X" && square == 8) {
		id = "oito";
		document.getElementById("oito").innerHTML = check(estado, id);
		quadrante[square - 1] = check(estado, id);
		clicksound.play();
		estado = estado + 1;
		vencedor();
	}
	if (quadrante[8] != "O" && quadrante[8] != "X" && square == 9) {
		id = "nove";
		document.getElementById("nove").innerHTML = check(estado, id);
		quadrante[square - 1] = check(estado, id);
		clicksound.play();
		estado = estado + 1;
		vencedor();
	}
}
