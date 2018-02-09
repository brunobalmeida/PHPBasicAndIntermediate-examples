<!DOCTYPE html>
<html>
	<head>
		<title>inClass7</title>
		<style>
		p {
			font-size:150%;
		}
		h1 {
			
			font-size:250%;
		}
		
		body{
			
			width: 960px;
			margin:auto;
			border: 1px solid;
			padding: 0 0 0.5em 1.3em;
			
		}
		
		</style>
	</head>
	
	<body>
		<h1>Guessing numbers</h1>
		<p>Hello User, this is a simple guessing game.</p>
		<p>There is a secret number hidden, try to figure it out.</p>
		<p>Choose a number and submit it:</p>
		
		
		<?php
			echo 
			'<form action="CheckGuess.php" method="post">
				<input type="radio" name="guess" id="guess1" value="1"><label for="guess1">1</label>
				<input type="radio" name="guess" id="guess2" value="2"><label for="guess2">2</label>
				<input type="radio" name="guess" id="guess3" value="3"><label for="guess3">3</label>
				<input type="radio" name="guess" id="guess4" value="4"><label for="guess4">4</label>
				<input type="radio" name="guess" id="guess5" value="5"><label for="guess5">5</label>
				<input type="radio" name="guess" id="guess6" value="6"><label for="guess6">6</label>
				<input type="radio" name="guess" id="guess7" value="7"><label for="guess7">7</label>
				<input type="radio" name="guess" id="guess8" value="8"><label for="guess8">8</label>
				<input type="radio" name="guess" id="guess9" value="9"><label for="guess9">9</label>
				<br />
				<br />
				<input type="submit" value="Guess">
			</form>'
		?>
		
		

	</body>

</html>

	