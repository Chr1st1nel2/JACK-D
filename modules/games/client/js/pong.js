/* coming soon to a theater near you (maybe) */

function pong() {

  console.log("script running");

  document.getElementById('draw-shapes').style.visibility="visible";

  var elem = document.getElementById('draw-shapes');
  var CANVAS_HEIGHT = 400;
  var CANVAS_WIDTH = 600;
  var PADDLE_HEIGHT = 100;
  var PADDLE_WIDTH = 20;
  var BALL_SIZE = 12;
  var keyboard = new KeyboardState();
  var score1 = 0;
  var score2 = 0;
  var P1up = false;
  var P1down = false;
  var P2up = false;
  var P2down = false;
  var PADDLE1_XPOS = 50;
  var PADDLE2_XPOS = 500;
  var params = { width: 600, height: 400 };
  var two = new Two(params).appendTo(elem);
  var addScore = function(player){
    if (player === 1) score1++;
    else if (player === 2) score2++;
    console.log("Score 1: " + score1);
    console.log("Score 2: " + score2);
    reset();
    document.getElementById("score1").innerHTML = score1.toString();
    document.getElementById("score2").innerHTML = score2.toString();
  }
  var reset = function(){
    drawFrame();
    BALLSPEED = 2;
    makeBar(200, 200);
    ballX = 250;
    ballY = PADDLE_HEIGHT + 52;
    ballVelX = BALLSPEED;
    ballVelY = BALLSPEED*1.5;
    ballRand();
    drawBall();
  }
  var makeBar = function(player1Y, player2Y){
    var player1 = two.makeRectangle(50, player1Y, PADDLE_WIDTH, PADDLE_HEIGHT);
    player1.fill = 'rgb(43, 209, 255)';
    player1.opacity = 0.75;
    player1.stroke = 'rgb(0, 0, 150)'; // Accepts all valid css color
    player1.linewidth = 5;
    var player2 = two.makeRectangle(500, player2Y, PADDLE_WIDTH, PADDLE_HEIGHT);
    player2.fill = 'rgb(255, 61, 61)';
    player2.opacity = 0.75;
    player2.stroke = 'rgb(150, 0, 0)'; // Accepts all valid css color
    player2.linewidth = 5;
  }
  //should rename to paddl#Y
  var player1Y = 200;
  var player2Y = 200;
  var BALLSPEED = 2;
  var PLAYERSPEED = 3;
  var ballX = 250;
  var ballY = PADDLE_HEIGHT + 52  ;
  var ballVelX = BALLSPEED;
  var ballVelY = BALLSPEED*1.5;
  var ballRand = function(){
    var coinFlipX = Math.floor(Math.random() * 2);
    var coinFlipY = Math.floor(Math.random() * 2);
      if (coinFlipX) {
        ballVelX = BALLSPEED;
      }
      else{
        ballVelX = -BALLSPEED;
      }
      if (coinFlipY) {
        ballVelY = BALLSPEED*1.5;
      }
      else{
        ballVelY = -BALLSPEED*1.5;
      }
  }
  var W = 87;
  var S = 83;
  var UP = 38;
  var DOWN = 40;
  // two has convenience methods to create shapes.
  // Don't forget to tell two to render everything
  // to the screen
  var circle;
  var drawBall = function(color){
    circle = two.makeCircle(ballX, ballY, BALL_SIZE);
    // The object returned has many stylable properties:
    circle.fill = '#FF8000';
    circle.stroke = 'orangered'; // Accepts all valid css color
    circle.linewidth = 5;
  }
  drawBall();
  two.update();
  var drawFrame = function(){
    var frameRect = two.makeRectangle(CANVAS_WIDTH/2, CANVAS_HEIGHT/2, CANVAS_WIDTH, CANVAS_HEIGHT);
    frameRect.stroke = 'black';
    frameRect.linewidth = 10;
    // frameRect.opacity = 0.25;
  }
  var rightActiveCollision = false;
  var leftActiveCollision = false;
  var ballStateUpdate = function() {
    var ballRight = ballX + BALL_SIZE/2;
    var ballLeft = ballX - BALL_SIZE/2;
  var offset = 50;
    var ballTop =    ballY - BALL_SIZE/2;
    var ballBottom = offset + ballY + BALL_SIZE/2;
  //TODO preform collision check
  if( ballRight > PADDLE2_XPOS - 15 ){
    //TODO end round in favor of P1;
    addScore(1);
  }
  if( ballLeft < PADDLE1_XPOS - 20  ){
    //TODO end round in favor of P2;
    addScore(2);
  }
  // console.log("ballBottom: " + ballBottom + "; paddle Top: "+ player2Y + "P2 Y collision: " + ( (ballBottom > player2Y ) && (ballTop < (player2Y + PADDLE_HEIGHT- 55)) ) );
  //if ballRight is inside of paddle 2 && ball is within the height && width of the paddle, then invert it
  if(ballRight > PADDLE2_XPOS - 20      && ( (ballBottom > player2Y ) && (ballTop < (player2Y + PADDLE_HEIGHT- 55)) )  && !rightActiveCollision){
  //TODO  Right paddle collision – invert direction of ball
  ballVelX *= 1.2;
  ballVelY *= 1.2;
  ballVelX = -ballVelX;
  rightActiveCollision = true;
  if (P2up && P2down === false){
    ballVelY -= 1;
  }
  else if (P2down && P2up === false){
    ballVelY += 1;
  }
  console.log("Right paddle collision");
  }else if(ballRight < PADDLE2_XPOS -21 && rightActiveCollision){
    rightActiveCollision = false;
  }
  if(ballLeft < (PADDLE1_XPOS + PADDLE_WIDTH  + 0)    && ( (ballBottom > player1Y ) && (ballTop < (player1Y + PADDLE_HEIGHT- 55)) ) && !leftActiveCollision   ){
  //TODO  Left paddle collision – invert direction of ball
  ballVelX = -ballVelX;
  leftActiveCollision = true;
  if (P1up && P1down === false){
    ballVelY -= 2;
    ballVelX += 0.5;
  }
  else if (P1down && P1up === false){
    ballVelY += 2;
    ballVelX -= 0.5;
  }
  console.log("Left paddle collision");
  }else if(ballLeft > (PADDLE1_XPOS + PADDLE_WIDTH  + 1)  && leftActiveCollision){
    leftActiveCollision = false;
  }
  //TODO update ball velocity based on collisions
  if(ballTop <= 15){
  //TODO: invert y velocity
    ballVelY = -ballVelY;
  }
  if(ballBottom >= CANVAS_HEIGHT+30){
  //TODO: invert y velocity
    ballVelY = -ballVelY;
  }
  ballX += ballVelX;
  ballY += ballVelY;
  }
  var gameLoop =  function() {
    keyboard.update();
    two.clear();
    drawFrame();
      if (keyboard.pressed("W") && player1Y > 55){
        P1up = true;
        P1down = false;
        player1Y = player1Y - PLAYERSPEED;
      }
      if (keyboard.pressed("S") && player1Y+PADDLE_HEIGHT < CANVAS_HEIGHT+45){
        player1Y = player1Y + PLAYERSPEED;
        P1up = false;
        P1down = true;
      }
      if(keyboard.pressed("up") && player2Y > 55){
        player2Y = player2Y - PLAYERSPEED;
        P2up = true;
        P2down = false;
      }
      if(keyboard.pressed("down") && player2Y+PADDLE_HEIGHT < CANVAS_HEIGHT+45){
        player2Y = player2Y + PLAYERSPEED;
        P2up = false;
        P2down = true;
      }
      makeBar(player1Y, player2Y);
      ballStateUpdate();
      drawBall();
      // redraw/reposition your object here
      // also redraw/animate any objects not controlled by the user
      two.update();
      setTimeout(gameLoop, 10);
  }
  gameLoop();
  two.update();

}
