let playerImage;
let playerX = 100;
// this preloads the game assets
function preload() {
	playerImage = loadImage('gustavo.png');
}

// this creates the html element canvas that we can draw into 
function setup() {
	console.log('setup');
	// with javascript
	// use windowWidth and windowHeight for fullscreen
	createCanvas(1000, 600);
}
let x = 50;
let speed = 2;
function draw() {

	clear();
	// this renders the image
	// image(imageItself, x, y, width, height)
	image(playerImage, playerX, 100, 100, 100)

	// this clears the canvas
	// console.log('i am drawing 🙀')
	// this moves the circle along the cursor
	// console.log(mouseX, mouseY);
	// stroke('white')
	// circle(mouseX, mouseY, 100);
	// this draws a circle
	// circle(x, y, radius)
	// this moves the circle to the right and then changes direction
	// x += speed;
	// if (x > 950) {
	// 	speed = - 2
	// }
	// circle(x, 400, 100);
	// this creates a rectangle
	// rect(xCoordinate, yCoordinat, width, height)
	let rectColor = color(0, 256, 0);
	// this fills the rectangle with a color

	// strokeWeight(20);
	// stroke(rectColor);
	// rect(100, 100, 50, 50);
	// fill('red')
	// this draws a line
	// line(startX, startY, endX, endY)
	// stroke('blue');
	// line(0, 500, 1000, 500)
	// line(0, 550, 1000, 550)

	// fill(rectColor)

}

// here you can 
function keyPressed() {
	console.log('key pressed');
	console.log(keyCode);
	if (keyCode === 39) {
		// move the player to the left
		playerX += 20;
	}
}
