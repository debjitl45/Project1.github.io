var userChoose;
var pts=0;
var computerChoose;
var result=results();
const displayResults=document.getElementById("results");
const computerChoice=document.getElementById("computer-choice");
const userChoice=document.getElementById("user-choice");
const score=document.getElementById("score");
const possibleChoices=document.querySelectorAll(".choices");

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
	userChoose=e.target.id
	generateChoice()
	results()
	computerChoice.innerHTML = computerChoose
	userChoice.innerHTML = userChoose
	displayResults.innerHTML = result
	if(result=="User wins")
		score.innerHTML=pts++;
}));


function generateChoice()
{
var randomNo=0;
var lastrandom=0;
while (randomNo === lastrandom) {
    randomNo = Math.floor(Math.random() * 3) + 1;
}
lastrandom = randomNo;
if(randomNo==1)
	return computerChoose="Rock";
if(randomNo==2)
	return computerChoose="Paper";
if(randomNo==3)
	return computerChoose="Scissors";
}


function results()
{
if(computerChoose==userChoose)
	return result="tie";
if(computerChoose=="Rock" && userChoose=="Paper")
	return result="User wins";
if(computerChoose=="Rock" && userChoose=="Scissors")
	return result="Computer wins";
if(computerChoose=="Paper" && userChoose=="Scissors")
	return result="User wins";
if(computerChoose=="Scissors" && userChoose=="Paper")
	return result="Computer wins";
if(computerChoose=="Scissors" && userChoose=="Rock")
	return result="User wins";
if(computerChoose=="Paper" && userChoose=="Rock")
	return result="Computer wins";
}
