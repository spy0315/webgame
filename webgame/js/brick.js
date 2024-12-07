const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let dx = 2;
let y = canvas.height - 30;
let dy = -2;
let ballRadius = 10;

function getRandomColor() {
	let red = Math.floor(Math.random() * 256);
	let green = Math.floor(Math.random() * 256);
	let blue = Math.floor(Math.random() * 256);
	return 'rgb(${red}, ${green}, ${blue})';
}

function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
	ctx.fillStyle = "red";
	ctx.fill();
	ctx.closePath();
}

function drawRandomBall() {
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
	ctx.fillStyle = getRandomColor();
	ctx.fill();
	ctx.closePath();
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBall();
	if(x+ballRadius>canvas.width || x-ballRadius<0) {
		dx = -dx;
	
	}
	if(y+ballRadius>canvas.height || y-ballRadius<0) dy = -dy;
	x += dx;
	y += dy;
}

setInterval(draw, 10);