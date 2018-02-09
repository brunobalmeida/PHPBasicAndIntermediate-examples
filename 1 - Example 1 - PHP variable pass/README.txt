Example 1 - PHP variable pass

Background:
The purpose of this exercise is to provide you with more experience with PHP.

Preamble:
Create a web application using PHP which stores a "secret" number. The user will submit
their guess. Finally, the application will display an appropriate message telling the user if
the guess was correct or not.

Tasks:
1. PHP - HTML Form 
Create a web form in a php file to retrieve the user's guess. You may use the following
example code in your work:

<form action="CheckGuess.php" method="post">
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
</form>

2. PHP - Output 
When the user submits the form, the data should be sent to the web server. Compare
the guess to a pre-determined "secret" number and display a message to the user that
tells them if the guess was correct or not.