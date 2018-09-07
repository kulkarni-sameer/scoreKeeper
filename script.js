var player1score = document.getElementById("player1score").innerText;
var player1button = document.getElementById("play1button");

var player2score = document.getElementById("player2score").innerText;
var player2button = document.getElementById("play2button");

var limit = document.getElementById("dropdown").value;

var limitval = document.getElementById("limit").innerText;


var resetbutton = document.getElementById("reset");

var dropdown = document.getElementById("dropdown").value;



player1button.addEventListener("click", function(){
	limit = document.getElementById("dropdown").value;
	document.getElementById("limit").innerText = limit;
	if(Number(player1score) < Number(limit)){
		player1score++;
		if (Number(player1score) == Number(limit)){
			player1button.disabled=true;
			player2button.disabled=true;
			document.getElementById("player1score").style.color = "green";
		}
		document.getElementById("player1score").innerText = player1score;
		console.log("play1 score is: "+player1score);
	}
});

player2button.addEventListener("click", function(){
	//Number(limit) = Number(dropdown);
	limit = document.getElementById("dropdown").value;
	document.getElementById("limit").innerText = limit;
	if(Number(player2score) < Number(limit)){
		player2score++;
		if (Number(player2score) == Number(limit)){
			player1button.disabled=true;
			player2button.disabled=true;
			document.getElementById("player2score").style.color = "green";
		}
		document.getElementById("player2score").innerText = player2score;
		console.log("play2 score is: "+player2score);
	}
});

resetbutton.addEventListener("click", function(){
	//Number(limit) = Number(dropdown);
	limit = document.getElementById("dropdown").value;
	document.getElementById("limit").innerText = limit;
	player1button.disabled=false;
			player2button.disabled=false;
			player2score=0;
			player1score=0;
			document.getElementById("player1score").style.color = "black";
			document.getElementById("player1score").innerText = player1score;
			document.getElementById("player2score").innerText = player2score;
			document.getElementById("player2score").style.color = "black";
});



