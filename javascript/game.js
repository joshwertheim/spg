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

var enemyRadius = 3;
var enemyX = (canvas.width)/2 + playerRadius*2;
var enemyY = (canvas.height)/2 + playerRadius*2;

var player = new Player(playerX, playerY, playerRadius, context);
var weapon = new Weapon(weaponX, weaponY, weaponRadius, context);

var enemies = [];

document.addEventListener("mousemove", mouseMoveHandler, false);

function mouseMoveHandler(e) {
    var pos = getMousePos(canvas, e);
    player.setX(pos.x);
    player.setY(pos.y);
}

function drawWeaponConnector() {
    // draw the weapon's attachment
    context.beginPath();
    context.lineTo(weapon.x, weapon.y);
    context.lineTo(player.x, player.y);
    context.closePath();
    context.stroke();
}

var MAX_ENEMIES = 5;

function generateEnemies() {
    for(count = 0; count < MAX_ENEMIES; count++) {
        var pos = getRandomPos();
        var enemy = new Enemy(pos.x, pos.y, enemyRadius, context);
        enemy.draw();
        enemies.push(enemy);
    }
}

function getRandomPos() {
    // generate random coordinates
    return { x: Math.random() * (canvas.width), y: Math.random() * (canvas.height) };
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    var curr_x = evt.clientX - rect.left;
    if(curr_x < 0) {
        curr_x = 0;
    } else if(curr_x > rect.width) {
        curr_x = rect.width;
    }
    var curr_y = evt.clientY - rect.top;
    if(curr_y < 0) {
        curr_y = 0;
    } else if(curr_y > rect.height) {
        curr_y = rect.height;
    }
    
    return { x: curr_x, y: curr_y };
}

function updateEnemyPositions() {
    for(count = 0; count < MAX_ENEMIES; count++) {
        enemies[count].draw();
    }
}

function draw() {
    // update canvas loop
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawWeaponConnector();
    player.draw();
    weapon.draw();
    if(enemies.length < MAX_ENEMIES) {
        generateEnemies();
    }
    updateEnemyPositions();
    requestAnimationFrame(draw);
}
draw();