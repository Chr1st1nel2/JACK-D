angular.module('ngSnake', [])

  .controller('snakeCtrl', function($scope, $timeout, $window) {
    var elem = document.getElementById('gameContainer');
    var BOARD_SIZE = 20;
    var CANVAS_HEIGHT = 400;
    var CANVAS_WIDTH = 600;
    var PIECE_WIDTH = 10;
    var PIECE_HEIGHT = 10;
    var keyboard = new KeyboardState();

    var params = { width: 600, height: 400 };

    var two = new Two(params).appendTo(elem);

    var DIRECTIONS = {
      LEFT: 65,
      UP: 87,
      RIGHT: 68,
      DOWN: 83
    };

    two.update();

   var drawFrame = function(){

     var frameRect = two.makeRectangle(CANVAS_WIDTH/2, CANVAS_HEIGHT/2, CANVAS_WIDTH, CANVAS_HEIGHT);

     frameRect.stroke = 'black';
     frameRect.linewidth = 10;
     // frameRect.opacity = 0.25;
   }

    var makeHead = function(col, row){
      col = col*10;
      row = row*10;
      var newHead = two.makeRectangle(col, row, PIECE_WIDTH, PIECE_HEIGHT);
      newHead.fill = 'rgb(43, 209, 100)';
      newHead.opacity = 0.75;
      newHead.stroke = 'rgb(0, 150, 0)'; // Accepts all valid css color
      newHead.linewidth = 4;
    }
    var makeBody = function(col, row){
      col = col*10;
      row = row*10;
      var newBody = two.makeRectangle(col, row, PIECE_WIDTH, PIECE_HEIGHT);
      newBody.fill = 'rgb(58, 255, 126)';
      newBody.opacity = 0.75;
      newBody.stroke = 'rgb(0, 150, 0)'; // Accepts all valid css color
      newBody.linewidth = 4;
    }

    var COLORS = {
      GAME_OVER: '#820303',
      FRUIT: '#E80505',
      SNAKE_HEAD: makeHead,
      SNAKE_BODY: '#0DFF00',
      BOARD: '#fff'
    };

    var snake = {
      direction: DIRECTIONS.LEFT,
      parts: [{
        x: -1,
        y: -1
      }]
    };

    var fruit = {
      x: -1,
      y: -1
    };

    var interval, tempDirection, isGameOver;

    $scope.score = 0;

    $scope.setStyling = function(col, row) {
      if (isGameOver)  {
        return COLORS.GAME_OVER;
      } else if (fruit.x == row && fruit.y == col) {
        return COLORS.FRUIT;
      } else if (snake.parts[0].x == row && snake.parts[0].y == col) {
        makeHead(col, row);
      } else if ($scope.board[col][row] === true) {
        makeBody(col, row);
      }
      return COLORS.BOARD;
    };

    function update() {
      two.update;
      drawFrame();
      var newHead = getNewHead();

      if (boardCollision(newHead) || selfCollision(newHead)) {
        return gameOver();
      } else if (fruitCollision(newHead)) {
        eatFruit();
      }

      // Remove tail
      var oldTail = snake.parts.pop();
      $scope.board[oldTail.y][oldTail.x] = false;

      // Pop tail to head
      snake.parts.unshift(newHead);
      $scope.board[newHead.y][newHead.x] = true;

      // Do it again
      snake.direction = tempDirection;
      $timeout(update, interval);
    }

    function getNewHead() {
      var newHead = angular.copy(snake.parts[0]);

      // Update Location
      if (tempDirection === DIRECTIONS.LEFT) {
          newHead.x -= 1;
      } else if (tempDirection === DIRECTIONS.RIGHT) {
          newHead.x += 1;
      } else if (tempDirection === DIRECTIONS.UP) {
          newHead.y -= 1;
      } else if (tempDirection === DIRECTIONS.DOWN) {
          newHead.y += 1;
      }
      return newHead;
    }

    function boardCollision(part) {
      return part.x === BOARD_SIZE || part.x === -1 || part.y === BOARD_SIZE || part.y === -1;
    }

    function selfCollision(part) {
      return $scope.board[part.y][part.x] === true;
    }

    function fruitCollision(part) {
      return part.x === fruit.x && part.y === fruit.y;
    }

    function resetFruit() {
      var x = Math.floor(Math.random() * BOARD_SIZE);
      var y = Math.floor(Math.random() * BOARD_SIZE);

      if ($scope.board[y][x] === true) {
        return resetFruit();
      }
      fruit = {x: x, y: y};
    }

    function eatFruit() {
      $scope.score++;

      // Grow by 1
      var tail = angular.copy(snake.parts[snake.parts.length-1]);
      snake.parts.push(tail);
      resetFruit();

      if ($scope.score % 5 === 0) {
        interval -= 15;
      }
    }

    function gameOver() {
      isGameOver = true;

      $timeout(function() {
        isGameOver = false;
      },500);

      setupBoard();
    }

    function setupBoard() {
      $scope.board = [];
      for (var i = 0; i < BOARD_SIZE; i++) {
        $scope.board[i] = [];
        for (var j = 0; j < BOARD_SIZE; j++) {
          $scope.board[i][j] = false;
        }
      }
    }
    setupBoard();

    $window.addEventListener("keyup", function(e) {
      if (e.keyCode == DIRECTIONS.LEFT && snake.direction !== DIRECTIONS.RIGHT) {
        tempDirection = DIRECTIONS.LEFT;
      } else if (e.keyCode == DIRECTIONS.UP && snake.direction !== DIRECTIONS.DOWN) {
        tempDirection = DIRECTIONS.UP;
      } else if (e.keyCode == DIRECTIONS.RIGHT && snake.direction !== DIRECTIONS.LEFT) {
        tempDirection = DIRECTIONS.RIGHT;
      } else if (e.keyCode == DIRECTIONS.DOWN && snake.direction !== DIRECTIONS.UP) {
        tempDirection = DIRECTIONS.DOWN;
      }
    });

    $scope.startGame = function() {
      $scope.score = 0;
      snake = {direction: DIRECTIONS.LEFT, parts: []};
      tempDirection = DIRECTIONS.LEFT;
      isGameOver = false;
      interval = 150;

      // Set up initial snake
      for (var i = 0; i < 5; i++) {
        snake.parts.push({x: 10 + i, y: 10});
      }
      resetFruit();
      update();
    };

  });
