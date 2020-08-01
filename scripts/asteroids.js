/***************************/
/****Variables & Objects****/
/***************************/

var htmlCanvas = document.getElementById('myCanvas'), ctx = htmlCanvas.getContext('2d'); //get the context for the canvas
var rightKey = false; //boolean for right arrow key press
var leftKey = false; //boolean for left arrow key press
var upKey = false; //boolean for up arrow key press
var spaceKey = false; //boolean for space key press
var asteroidArray = []; //all the asteroids are stored in this array
var bulletArray = []; //all the bullets are stored in this array
var drawBulletBoole = true; //boolean for knowing if you can draw the bullet
var numLives = 3; //set number of lives to 3
var score = 0; //set the score to zero

/*****************/
/*Event Listeners*/
/*****************/

document.addEventListener("keydown", keyPressed, false); //if any key is pushed down this calls keyPressed
document.addEventListener("keyup", keyReleased, false);//if any key is released this calles keyReleased
window.addEventListener('resize', resizeCanvas, false);//if the window is resized, resize Canvas is called

/*********************/
/*Object Constructors*/
/*********************/

function Ship() { //Ship object constructor

  this.x = htmlCanvas.width/2; //x position
  this.y = htmlCanvas.height/2; //y position
  this.size = 15; //radius of circle encompasing the triangle
  this.rotation = (90*Math.PI)/180; //rotation of ship points
  this.vectorX = 0; //ship velocity in x direction (i.e. amount the ship moves in the x direction every frame)
  this.vectorY = 0; //ship velocity in y direction
}

function Asteroids(x,y,radius) { //Asteroid object constructor

  this.x = x; //x position
  this.y = y; //y position
  this.radius = radius; //radius of circle
  this.velocityX = (Math.random() * (3 - 1) + 1)*Math.cos((Math.random() * (360 - 0) + 0)*Math.PI/180); //set the velocity to a random speed and direction
  this.velocityY = (Math.random() * (3 - 1) + 1)*Math.cos((Math.random() * (360 - 0) + 0)*Math.PI/180); //set the velocity to a random speed and direction
  this.colour ='#'+Math.floor(Math.random()*(16777215-500)+500).toString(16); //giving the asteroid a random colour

}

function Bullet(x,y,vectorX,vectorY) { //Bullet object constructor

  this.x = x; //x position
  this.y = y; //y position
  this.radius = 5; //radius of circle
  this.vectorX = vectorX; //ship velocity in x direction (i.e. amount the bullet moves in the x direction every frame)
  this.vectorY = vectorY; //ship velocity in y direction

}

/*****************/
/***Body of Code**/
/*****************/

  resizeCanvas(); //call resize canvas to set the width and height
  var ship = new Ship(); //insantiating the ship
  createAsteroidBelt(20); //creating the inital asteroid belt
  draw(); //starting the animation

  function resizeCanvas() { //dynamic sizing of the HTML Canvas for different screen sizes.

  htmlCanvas.width = window.innerWidth;
  htmlCanvas.height = window.innerHeight;

}

function startGame() {

  resizeCanvas();
  var ship = new Ship(); //insantiating the ship
  createAsteroidBelt(20);
  draw();

}

function draw() {
  //This is the main function that displays the game on the screen

  ctx.clearRect(0, 0, htmlCanvas.width, htmlCanvas.height);  //clear all drawings from the Canvas.

  if (asteroidArray.length == 0) { //if all the asteroids are gone, generate more

    createAsteroidBelt(20);

  }

  drawShip(ship.x, ship.y, ship.size, ship.rotation);
  drawBullet();
  drawAsteroids()
  collisionDetection();

  /*********************************/
  /*Boundary Detection for The Ship*/
  /*********************************/

  if (ship.x<(0-ship.size)) { //If the ship goes off the left boundary of the page, redraw it on the right
    ship.x = htmlCanvas.width + ship.size;
  }

  if (ship.x>(htmlCanvas.width+ship.size)) {//If the ship goes off the right boundary of the page, redraw it on the left
    ship.x = 0 - ship.size;
  }

  if (ship.y<(0-ship.size)) {//If the ship goes off the top of the page, redraw it on the bottom
    ship.y = htmlCanvas.height + ship.size;
  }

  if (ship.y>(htmlCanvas.height+ship.size)) {//If the ship goes off the bottom of the page, redraw it on the top
    ship.y = 0 - ship.size;
  }


  ship.x += ship.vectorX; //move the ship by the vectorX amount
  ship.y -= ship.vectorY; //move the ship by the vectorY amount

  //Controlling the game:

  if(rightKey) {
    ship.rotation -= 5*Math.PI/180; //rotate the ship right. (radian's per frame)
  }
  else if(leftKey) {
    ship.rotation += 5*Math.PI/180; //rotate the ship left. (radian's per frame)
  }
  if(upKey) {
    //Increase the acceleration of the ship.
    ship.vectorX += 0.03*Math.cos(ship.rotation);
    ship.vectorY += 0.03*Math.sin(ship.rotation);
  } else {
    //This will slow down the ship if the up arrow key is not being pressed.
    ship.vectorX *= 0.99;
    ship.vectorY *= 0.99;
  }
  if(spaceKey) {
    //fire bullets if space key is pressed
    if (bulletArray.length<6  && drawBulletBoole == true) { //maximum 6 bullets are allowed
      drawBulletBoole = false; //If they key is held down, this ensures only 1 bullet is fired.
      bulletArray.push(new Bullet(ship.x,ship.y,10*Math.cos(ship.rotation),10*Math.sin(ship.rotation))); //dynamically generate new bullets and place them in the array
    }
  }

  //The following code draws text to the screen.
  ctx.textAlign = "right";
  ctx.fillStyle = "black";
  ctx.font = '40px Arial';
  ctx.fillText("Score:" + " " +score, htmlCanvas.width-60, 75); //Displays "Score #" onto the screen

  ctx.textAlign = "right";
  ctx.fillStyle = "black";
  ctx.font = '40px Arial';
  ctx.fillText("Lives:" + " " +numLives, 200, 75); //Displays "Lives: #$" onto the screen

  f = requestAnimationFrame(draw); //Infinitely loops through the draw function at 60fps.

}

function drawShip(x,y,size,rotation) {
  ctx.beginPath();
  //The following code draws an equilateral triangle. This is the shape of the Ship.
  ctx.moveTo(x+4/3*size*Math.cos(rotation),y-4/3*size*Math.sin(rotation)); //Front vertex of the Ship (top of triangle).
  ctx.lineTo(x-size*(2/3*Math.cos(rotation)+Math.sin(rotation)),y+size*(2/3*Math.sin(rotation)-Math.cos(rotation))); //Back-left vertex of Ship.
  ctx.lineTo(x-size*(2/3*Math.cos(rotation)-Math.sin(rotation)),y+size*(2/3*Math.sin(rotation)+Math.cos(rotation))); //Back-right vertex of Ship.
  ctx.fillStyle = "black";
  ctx.fill(); //Colour it black.
  ctx.closePath();
}

function drawCircle(x,y,radius,colour) {
  //The drawCircle function draws a circle of different sizes and colours.
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = colour;
  ctx.fill(); //Colour it black.
  ctx.closePath();
}

function drawBullet() {

  //draws the bullet to the screen when called by draw()

  for (var i = 0; i<bulletArray.length; i++) {//loops through the bulletArray and draws them to screen

    drawCircle(bulletArray[i].x, bulletArray[i].y, bulletArray[i].radius,"black");
    bulletArray[i].x+=bulletArray[i].vectorX; //vectorx based on the direction of the ship
    bulletArray[i].y-=bulletArray[i].vectorY; //vectory based on the direction of the ship

    if (bulletArray[i].x > htmlCanvas.width || bulletArray[i].x<0 || bulletArray[i].y > htmlCanvas.height || bulletArray[i].y<0 ) {
      bulletArray.splice(i,1); //removes bullet for garabage collection if it goes off the screen.

    }

  }
}

function createAsteroidBelt(numberAsteroids) {
  //createAsteroidBelt **recursively** generates a 'numberAsteroids' number of asteroid objects and places them in the asteroidArray.
  if (numberAsteroids==0) {
    asteroidArray = []; //reset the asteroidArray
  } else {
  createAsteroidBelt(numberAsteroids-1);
  createAsteroid(); //creates the asteroid every time the function is called.
}
}

function createAsteroid() {
  //createAsteroid generates a single asteroid and places it in the asteroidArray.

  var ax, ay, arad; //x and y locations and radius of Asteroids
  do { //Generates a random x and y coordinate for the asteroid.
    ax = Math.random()*htmlCanvas.width;
    ay = Math.random()*htmlCanvas.height;
  } while(Math.sqrt(Math.pow(ax-ship.x,2)+Math.pow(ay-ship.y,2))<200) //if the asteroid is too close to the ship, regenerate the inital x and y coordinate.

  arad = Math.random() * (40 - 20) + 20; //set the direction of movement.
  asteroidArray.push(new Asteroids(ax,ay,arad)); //Add a new asteoid to the array with the generated parameters.

}
function drawAsteroids() {
  //The drawAsteroids function is called by draw(). It uses drawCircle to draw an asteroidArray.length-1 number
  //of asteroids to the screen, based on the asteroids contained within asteroid array. This function also
  //does the boundary checking for the asteroid, and set's the asteroids velocity vectors.

  for (var i = 0; i<asteroidArray.length; i++) { //loop through asteroidArray and draw the asteroids using drawCircle.
    drawCircle(asteroidArray[i].x,asteroidArray[i].y,asteroidArray[i].radius,asteroidArray[i].colour);
    asteroidArray[i].x += asteroidArray[i].velocityX; //move the asteroid a distance of velocityX
    asteroidArray[i].y += asteroidArray[i].velocityY; //move the asteroid a distance of velocityY

    if (asteroidArray[i].x<(0-1.5*asteroidArray[i].radius)) { //If the asteroid goes off the left boundary of the page, redraw it on the right
      asteroidArray[i].x = htmlCanvas.width + 1.5*asteroidArray[i].radius;

    }
    if (asteroidArray[i].x>(htmlCanvas.width+1.5*asteroidArray[i].radius)) {//If the asteroid goes off the right boundary of the page, redraw it on the left
      asteroidArray[i].x = 0 - 1.5*asteroidArray[i].radius;
    }
    if (asteroidArray[i].y>(htmlCanvas.height+1.5*asteroidArray[i].radius)) {//If the asteroid goes off the bottom boundary of the page, redraw it on the top
      asteroidArray[i].y = 0 - 1.5*asteroidArray[i].radius;
    }
    if (asteroidArray[i].y<(0-1.5*asteroidArray[i].radius)) { //If the asteroid goes off the top boundary of the page, redraw it on the bottom
      asteroidArray[i].y = htmlCanvas.height + 1.5*asteroidArray[i].radius;

    }
  }
}

function collisionDetection(){
  //The collisionDetection function is called by the 'draw()''.
  //It detects whether there has been a collision between an Asteroid and a bullet.
  //It also detects whether there has been a collision between the ship and an Asteroid.

  for (var i = 0; i<asteroidArray.length; i++) {
    //This for-loop is used to check every Asteroid for a collision with the ship.
    //It loops through every Asteroid contained within the asteroidArray

    if (Math.sqrt(Math.pow(asteroidArray[i].x-ship.x,2)+Math.pow(asteroidArray[i].y-ship.y,2))<=asteroidArray[i].radius+ship.size-3){ //Conditional statement to see if the ship is hit.
      //If the ship gets hit by an Asteroid, the following code happens:

      numLives--; //reduce the number of lives by 1.

      //reset ship to the start position (middle of the screen)
      ship.x = htmlCanvas.width/2;
      ship.y = htmlCanvas.height/2;
      ship.size = 15;
      ship.rotation = (90*Math.PI)/180;
      ship.vectorX = 0; //set the ships movement to zero.
      ship.vectorY = 0; //set the ships movement to zero.

      if (numLives == 0) { //If the number of lives reaches zero, the game is reset.
        //resetting variables and arrays for the next game.
        asteroidArray = [];
        bulletArray = [];
        numLives = 3;
        score = 0;
        startGame();
        cancelAnimationFrame(f); //cancels the animation frame so a new one can be started
        break;

      }

      if (asteroidArray[i].radius<2*ship.size) {
        asteroidArray.splice(i,1); //If the asteroid is less than two times the size of the ship (when it collides), it is removed from the array for garbage collection.
      } else { //Otherwise, the asteroid is removed from the array, and two smaller asteroids are added to the array.
          createAsteroid();
          asteroidArray[asteroidArray.length-1].radius = asteroidArray[i].radius/2;
          asteroidArray[asteroidArray.length-1].x = asteroidArray[i].x;
          asteroidArray[asteroidArray.length-1].y = asteroidArray[i].y;
          createAsteroid();
          asteroidArray[asteroidArray.length-1].radius = asteroidArray[i].radius/2;
          asteroidArray[asteroidArray.length-1].x = asteroidArray[i].x;
          asteroidArray[asteroidArray.length-1].y = asteroidArray[i].y;
          asteroidArray.splice(i,1); //removing asteroid for garbage collection
      }
    }
  }

  for (var i = 0; i<asteroidArray.length; i++) {
    //This for-loop is used to check every Asteroid for a collision with a bullet.
    //It loops through every Asteroid contained within the asteroidArray and compares it's location against every bullet contained within bulletArray
    for (var j = 0; j<bulletArray.length; j++) { //loop through the bullet array
      if (Math.abs(bulletArray[j].x-asteroidArray[i].x) < asteroidArray[i].radius && Math.abs(bulletArray[j].y-asteroidArray[i].y) < asteroidArray[i].radius) { //check to see if the bullet collides
        bulletArray.splice(j,1); //remove bullet from the array (and thus from the screen)
        score += 1; //increment the score by 1
        if (asteroidArray[i].radius<2.5*ship.size) { //if the asteroid is less than 2.5 times the size of the ship, it will disappear when hit by a bullet
          asteroidArray.splice(i,1); //remove asteroid from the array for garbage collection
        } else { //Otherwise, the asteroid is removed from the array, and two smaller asteroids are added to the array.
          createAsteroid();
          asteroidArray[asteroidArray.length-1].radius = asteroidArray[i].radius/2;
          asteroidArray[asteroidArray.length-1].x = asteroidArray[i].x;
          asteroidArray[asteroidArray.length-1].y = asteroidArray[i].y;
          createAsteroid();
          asteroidArray[asteroidArray.length-1].radius = asteroidArray[i].radius/2;
          asteroidArray[asteroidArray.length-1].x = asteroidArray[i].x;
          asteroidArray[asteroidArray.length-1].y = asteroidArray[i].y;
          asteroidArray.splice(i,1);
        }
        break; //break from the for-loop if a bullet and asteroid are found to have collided. This ensures you aren't accessing parts of the Array that have been spliced.
      }

    }
  }
}

function keyPressed(key) {
  //The keyReleased function is called by the 'keydown' event listener.
  //It sets the boolean pretaining to a specific key to true.
  //This indicates to the game that the key is being held down.

  if(key.keyCode == 39) {
    rightKey = true;
  }
  else if(key.keyCode == 37) {
    leftKey = true;
  }
  if (key.keyCode == 38 ) {
    upKey = true;
  }
  if (key.keyCode == 32 ) {
    spaceKey = true;
  }
}

function keyReleased(key) {
  //The keyReleased function is called by the 'keyup' event listener.
  //It sets the boolean pretaining to a specific key to false.
  //This indicates to the game that the key is being held down.

  if(key.keyCode == 39) {
    rightKey = false;
  }
  else if(key.keyCode == 37) {
    leftKey = false;
  }
  if (key.keyCode == 38 ) {
    upKey = false;
  }
  if (key.keyCode == 32 ) {
    spaceKey = false;
    drawBulletBoole = true;

  }
}

/*******************************************/
/****End of Document - Jamal Habash 2018****/
/*******************************************/
