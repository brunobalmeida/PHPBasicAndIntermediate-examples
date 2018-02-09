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
		<h1>CheckGuess</h1>
		<?php
			
			if (!isset($_POST['guess']))
			{
				echo "<p>Please you should select a number!</p>";
			}
			else 
			{
				$userGuess = $_POST['guess'];
				$secretNumber = 5; 
				
				echo "<p>Your guess was: $userGuess</p>";
			
				if ($userGuess == "")
				{
					echo "<h1>ERROR MESSAGE - you must select a number</h1>";
				}
				else if ($userGuess == $secretNumber)
				{
					echo "<p>Congratulations, Five is the secret number </p>";
				}
				else
				{
					echo "<p>Nice try, but $userGuess is not the secret number.</p>";
				}
			}
			
		?>
	</body>

</html>
