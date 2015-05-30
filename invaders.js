//  ____  _                ___                     _               
// |  _ \| | __ _  ___ ___|_ _|_ ____   ____ _  __| | ___ _ __ ___ 
// | |_) | |/ _` |/ __/ _ \| || '_ \ \ / / _` |/ _` |/ _ \ '__/ __|
// |  __/| | (_| | (_|  __/| || | | \ V / (_| | (_| |  __/ |  \__ \
// |_|   |_|\__,_|\___\___|___|_| |_|\_/ \__,_|\__,_|\___|_|  |___/                                                                
///////////////////////////////////////////////////////////////////////                                                                  
// Author: Patrick Lindsay

;(function () {

	window.addEventListener('load', function() {
		document.getElementById('place-invaders').addEventListener('click', function() {
			window.theGame = new Game();
		});
	});

	var Game = function() {
		console.info('Welcome to Place Invaders');

		var self = this;

		var canvas   = document.getElementById('place-invaders');
		var screen   = canvas.getContext('2d');
		var gameSize = { x: canvas.width, y: canvas.height };

		this.gameSize = gameSize;
		this.gameOver = false;
		this.win 	  = false;
		this.bodies	  = [];
		this.bodies.push(new Player(this));

		spawnInvaders();

		var tick = function() {
			document.getElementById('fps').innerHTML = countFPS();
			self.update();
			requestAnimationFrame(tick);
		};

		tick();
	};

	Game.prototype = {
		update : function() {
			for(body in this.bodies) {
				this.bodies[body].update();
			}
		},

		draw : function(screen, gameSize) {

		},

		addBody : function(body) {

		}
	};

	var Player = function(game) {
		this.game   = game;
		this.size   = { x: 15, y: 15 };
		this.center = { x: this.game.gameSize.x / 2, y: this.game.gameSize.y - 30 };

		this.keyboarder = new Keyboarder();
	}

	Player.prototype = {
		update : function() {
			
		}
	};

	var Invader = function(game, x, y) {
		this.game   = game;
		this.size   = { x: 15, y: 15 };
		this.center = { x: x, y: y }
	}

	Invader.prototype = {
		update : function() {

		}
	};

	var spawnInvaders = function() {

	};

	var Keyboarder = function() {

	};

	window.countFPS = (function () {
		var lastLoop = (new Date()).getMilliseconds();
		var count = 1;
		var fps = 0;

		return function () {
			var currentLoop = (new Date()).getMilliseconds();
			if (lastLoop > currentLoop) {
				fps = count;
				count = 1;
			} else {
				count += 1;
			}
			lastLoop = currentLoop;
			return Math.floor(fps);
		};
	}());
})();