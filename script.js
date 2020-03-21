var userChoose;
var computerChoose;
var result=results();
const displayResults=document.getElementById("results");
const computerChoice=document.getElementById("computer-choice");
const userChoice=document.getElementById("user-choice");
const possibleChoices=document.querySelectorAll(".choices");

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
	userChoose=e.target.id
	generateChoice()
	results()
	computerChoice.innerHTML = computerChoose
	userChoice.innerHTML = userChoose
	displayResults.innerHTML = result
}));


function generateChoice()
{
var randomNo=0;
var lastrandom=0;
while (randomNo === lastrandom) {
    random = Math.floor(Math.random() * 3) + 1;
}
lastrandom = randomNo;
if(randomNo==1)
	return computerChoose="rock";
if(randomNo==2)
	return computerChoose="paper";
if(randomNo==3)
	return computerChoose="scissors";
}


function results()
{
if(computerChoose==userChoose)
	return result="tie";
if(computerChoose=="rock" && userChoose=="paper")
	return result="user wins";
if(computerChoose=="rock" && userChoose=="scissors")
	return result="computer wins";
if(computerChoose=="paper" && userChoose=="scissors")
	return result="user wins";
if(computerChoose=="scissors" && userChoose=="paper")
	return result="computer wins";
if(computerChoose=="scissors" && userChoose=="rock")
	return result="user wins";
if(computerChoose=="paper" && userChoose=="rock")
	return result="computer wins";
}
