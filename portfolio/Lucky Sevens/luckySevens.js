function rollDice() {
	return Math.floor(Math.random() * 6) + 1;
}

alert("How many dollars do you have to bet?")
	function lucky7(){
		var firstBet = Number(document.forms["luckyForm"]["startingBet"].value);
		var money = firstBet;
		var firstDice = 0;
		var secondDice = 0;
		var total = 0;
		var rolls = 0;
	  var maxWon = 0;
		var highestRolls = 0;

			if(money <= 0){
			alert("Starting bet should be at least $1");
			}
				else{
					while(money > 0){
						firstDice = rollDice();
						secondDice = rollDice();
						total = firstDice + secondDice;
						rolls++;

							if(total != 7){
				        money = money - 1;
							}
							else{

								money = money + 4;
					        if(money > maxWon){
					          maxWon = money;
					          highestRolls = rolls;
			  					}
							}
						}

				}
	document.getElementById("results").style.display = "table";
	document.getElementById("firstBet").innerText = firstBet;
	document.getElementById("rolls").innerText = rolls;
	document.getElementById("maxWon").innerText = maxWon;
	document.getElementById("highestRolls").innerText = highestRolls;
	return false;
}
