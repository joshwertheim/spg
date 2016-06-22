var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var x = canvas.width/2;
var y = canvas.height-30;

var dx = 2;
var dy = -2;

var playerRadius = 10;
var playerX = (canvas.width)/2;
var playerY = (canvas.height)/2;

var weaponRadius = 5;
var weaponX = (canvas.width)/2 + playerRadius*2;
var weaponY = (canvas.height)/2 + playerRadius*2;

var x = canvas.width/2;
var y = canvas.height-30;

document.addEventListener("mousemove", mouseMoveHandler, false);

function mouseMoveHandler(e) {
    var pos = getMousePos(canvas, e);
    playerX = pos.x;
    playerY = pos.y;
}

function drawPlayer() {
    // draw the player
    context.beginPath();
    context.arc(playerX, playerY, playerRadius, 0, Math.PI*2);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();
}

function drawWeapon() {
    // draw the weapon
    context.beginPath();
    context.arc(weaponX, weaponY, weaponRadius, 0, Math.PI*2);
    context.fillStyle = "red";
    context.fill();
    context.closePath();
}

function drawWeaponConnector() {
    // draw the weapon's attachment
    context.beginPath();
    context.lineTo(weaponX, weaponY);
    context.lineTo(playerX, playerY);
    context.closePath();
    context.stroke();
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

function draw() {
    // drawing code
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawWeaponConnector();
    drawWeapon();
    drawPlayer();
    requestAnimationFrame(draw);
}
draw();