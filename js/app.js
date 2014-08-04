
$(document).ready(function(){
	console.log("app.js connected");

	//RANDOM NUMBER
	var rndm = Math.floor((Math.random() * 100) + 1);
	console.log(rndm);
	
	// USER GUESS VAR
	//var guess = $('#userGuess').val();
	

	//GUESS COUNTER SET
	var guessCount = 0;
	var counter = $('#count').html(guessCount);
	
	
	//RANDOM NUMBER DATA CAP
	$('#guessButton').click(dataCap);


	function dataCap() {
		guess = $('#userGuess').val();
	
		
		//Evaluates the Number
		
		if (isNaN(guess)){
			alert('The value supplied is not a number');
			console.log('FALSE: guess ISNT a Number');
			return false;
		} else if(guess % 1 != 0){
			alert('The value supplied cannot be a decimal');
			console.log('FALSE: guess IS a Decimal');
			return false;
		} else if(guess > 100){
			alert('The value supplied cannot be greater than 100');
			console.log('FALSE: guess IS +100');
			return false;
		} else {
			console.log(guess);
			guessCount++;
			counter = $('#count').html(guessCount);

			
			
			if (guess == rndm){
				console.log('Your Guess is Correct');
				$("#feedback").html('Correct!');
				return false;
			} else if ((guess < rndm + 5) && (guess > rndm - 5)){
				console.log('Deviation of 5');
				$("#feedback").html('On Fire');
				return false;
			} else if ((guess < rndm + 10) && (guess > rndm - 10)){
				console.log('Deviation of 10');
				$("#feedback").html('Hot');
				return false;
			} else if ((guess < rndm + 20) && (guess > rndm - 20)){
				console.log('Deviation of 20')
				$("#feedback").html('Warm');
				return false;
			} else if ((guess < rndm + 40) && (guess > rndm - 40)){
				console.log('Deviation of 40')
				$("#feedback").html('Cool');
				return false;
			} else if ((guess < rndm + 80) && (guess > rndm - 80)){
				console.log('Deviation of 80')
				$("#feedback").html('Ice');
				return false;
			} else if ((guess < rndm + 100) && (guess > rndm - 100)){
				console.log('Deviation of 100')
				$("#feedback").html('Not even close');
				
			};

			
						
			
		};

	};


	//USER GUESS POST
		
		$('#guessButton').click(dataPost);
		
		function dataPost() {
			var block = '<li>'+ guess +'</li>';
			$('#guessList').prepend(block);
		};
	

	//NEW GAME
		$('.new').click(newGame);

		function newGame() {
			rndm = Math.floor((Math.random() * 100) + 1);
			guessCount = 0;
			counter = $('#count').html(guessCount);
			$("#feedback").html('Make your Guess!');


			$("#guessList").empty();
			

			console.log(rndm + " NEW GAME");
			return true;
		};


	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


  	
});


