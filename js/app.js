// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = 2;
    this.y = 2;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function () {
    this.sprite = 'images/char-boy.png';
    this.x = 50;
    this.y = 50;
};

Player.prototype.update = function(dt) {
    player.x
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(input) {
    if (input == 'right') {
        player.x = player.x + 50
        return player.x
    }
    else if (input == 'up') {
        player.y = player.y - 50
        return player.y
    }
    else if (input == 'left') {
        player.x = player.x - 50
        return player.x
    }
    else if (input == 'down') {
        player.y = player.y + 50
        return player.y
    }
    

};

// Now instantiate your objects.
var Pete = new Player();
var baddie = new Enemy();
// Place all enemy objects in an array called allEnemies
var allEnemies = []
allEnemies.push(baddie)
// Place the player object in a variable called player
var player = Pete



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
