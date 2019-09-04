var numSquares = 6;
var squares = document.querySelectorAll(".square");
var color = generateRandom(numSquares);
var pickColor = randomColor();
var colorDisplay = document.getElementById("colorDisplay");
var answerSpan = document.querySelector("#answer")
var helement = document.querySelector("h1");
var reset = document.getElementById("reset");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");

colorDisplay.textContent = pickColor;

reset.addEventListener("click",function(){
	color = generateRandom(numSquares);
	pickColor = randomColor();
	colorDisplay.textContent = pickColor;
	for (var i = 0; i<squares.length;i++)
	{
	squares[i].style.background = color[i];
	}
	helement.style.backgroundColor = "steelblue";	 
})

easy.addEventListener("click",function(){
	this.classList.add("blue-class");
	hard.classList.remove("blue-class");
	numSquares = 3;
	color = generateRandom(numSquares);
	pickColor = randomColor();
	colorDisplay.textContent = pickColor;
	for (var i = 0; i<(squares.length);i++)
	{
		if(color[i]){
			squares[i].style.background = color[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	

})

hard.addEventListener("click",function(){
	this.classList.add("blue-class");
	easy.classList.remove("blue-class");
	numSquares = 6;
	color = generateRandom(numSquares);
	pickColor = randomColor();
	colorDisplay.textContent = pickColor;
	for (var i = 0; i<(squares.length);i++)
	{
	squares[i].style.background = color[i];
	squares[i].style.display = "inline";
	}
})


for (var i = 0; i<squares.length;i++)
{
	squares[i].style.background = color[i];
	squares[i].addEventListener("click",function(){
		if (this.style.backgroundColor === pickColor)
	{
		answerSpan.textContent = "Correct!";
		colorChange(pickColor)
		helement.style.backgroundColor = pickColor;
	}
	else
	{
		answerSpan.textContent = "Try Again!";
		this.style.backgroundColor = "#232323";
	}
	});
	
}
function colorChange(color){
	for (var i =0; i<squares.length;i++)
	{
		squares[i].style.background = color;
	}
}

function randomColor(){
	var random = Math.floor(Math.random() * color.length)
	return color[random];
}

function generateRandom(num){
	var arr = [];
	for (var i =0; i < num ; i++){
		arr.push(randomColorGenerator());
	}
	return arr;
}

function randomColorGenerator(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r +", " + g + ", " + b +")";

}
