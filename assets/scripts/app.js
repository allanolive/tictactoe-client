'use strict'
// const sayHi = require('./events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => { // once browser is done loading...
// playerX and playerO will be used as variables to switch between turns and
// output X and O to the game board.
  const playerX = 'X'
  const playerO = 'O'
  let gameOver = null
  let playerXScore = 0
  let playerOScore = 0
  let tieScore = 0

  $('#playerX').html(playerXScore)
  $('#playerO').html(playerOScore)
  $('#tie').html(tieScore)

  // I decided to represent the game board as a grid like object with two values
  // each of rows and columns, which made me visualize the board a little
  // more easily.
  let grid = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ]
  // I use this variable in order to toggle between playerX and playerO in the
  // nextTurn function
  let currentPlayer = playerX
  // Here I have a really big Event listner that I might want to break down into
  // smaller parts. Basically I am listening for a click in any of the empty
  // squares, referencing the data-row and data-col in the html and target each
  // individual square and as long as the square is = ' ' then I used the this
  // keyword to reference empty-square class and input the current player which
  // either 'X' or 'O', while i was at it I also checked for winner and applied
  // a nextTurn function.
  $('#gamePlay').hide()
  $('.restart').on('click', function () {
    $('#gamePlay').show()
  })
  const startGame = function () {
    const row = $(this).data('row')
    const col = $(this).data('col')
    if (grid[row][col] === ' ') {
      $(this).html(currentPlayer)
      grid[row][col] = currentPlayer
      nextTurn()
      checkForWinner()
    }
  }
  $('.empty-square').on('click', startGame)

  $('#replay').on('click', function () {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        grid[row][col] = ' '
        $('.square0').html(' ')
        $('.square1').html(' ')
        $('.square2').html(' ')
        $('.square3').html(' ')
        $('.square4').html(' ')
        $('.square5').html(' ')
        $('.square6').html(' ')
        $('.square7').html(' ')
        $('.square8').html(' ')
        $('.empty-square').on('click', startGame)
        currentPlayer = playerX
        // currentPlayer = playerX
        // checkForWinner()
      }
    }
  }
  )

  // Simple logic for the toggling of players here, most important part is
  // knowing exactly when to have it invoked.
  const nextTurn = function () {
    currentPlayer === playerX ? currentPlayer = playerO : currentPlayer = playerX
  }
  // const checkForInvalidClick =



  // const clickOff = function () {
  //   $('.game-board').off('click')
  // }
  // This is where most of the game logic happens
  const checkForWinner = function () {
    for (let row = 0; row < 3; row++) {
      if (grid[row][0] !== ' ' && grid[row][0] === grid[row][1] && grid[row][0] === grid[row][2]) {
        $('#result').text('PLAYER ' + grid[row][0] + ' IS THE WINNER!').fadeOut(3000)
        console.log(grid)
        $('.empty-square').off()
        // checkForInvalidClick()
        const whoWins = grid[row][0]
        if (whoWins === 'O') {
          playerOScore++
          $('#playerO').html(playerOScore)
        } else {
          playerXScore++
          $('#playerX').html(playerXScore)
        }
        // whoWins === 'O' ? playerOScore++ : playerXScore++

        console.log(playerXScore, playerOScore)
      }
      gameOver = true
    }
    // check if colums are the same
    for (let col = 0; col < 3; col++) {
      if (grid[0][col] !== ' ' && grid[0][col] === grid[1][col] && grid[0][col] === grid[2][col]) {
        $('#result').text('PLAYER ' + grid[0][col] + ' IS THE WINNER!').fadeOut(3000)
        $('.empty-square').off()
        const whoWins = grid[0][col]
        if (whoWins === 'O') {
          playerOScore++
          $('#playerO').html(playerOScore)
        } else {
          playerXScore++
          $('#playerX').html(playerXScore)
        }
      }
      gameOver = true
    }
    // check if diagonal top left to bottom right are the same
    if (grid[0][0] !== ' ' && grid[0][0] === grid[1][1] && grid[0][0] === grid[2][2]) {

      $('#result').text('PLAYER ' + grid[0][0] + ' IS THE WINNER!').fadeOut(3000)
      $('.empty-square').off()
      const whoWins = grid[0][0]
      if (whoWins === 'O') {
        playerOScore++
        $('#playerO').html(playerOScore)
      } else {
        playerXScore++
        $('#playerX').html(playerXScore)
      }
      gameOver = true
    }
    // check if diagonal bottom left to top right is the same
    if (grid[2][0] !== ' ' && grid[2][0] === grid[1][1] && grid[2][0] === grid[0][2]) {

      $('#result').text('PLAYER ' + grid[2][0] + ' IS THE WINNER!').fadeOut(3000)
      $('.empty-square').off()
      const whoWins = grid[2][0]
      if (whoWins === 'O') {
        playerOScore++
        $('#playerO').html(playerOScore)
      } else {
        playerXScore++
        $('#playerX').html(playerXScore)
      }
      gameOver = true
    }
    // I created this loop that runs after all possible winning possibilities in
    // order to find out if all 9 squares are full, but realized that if you had
    // a winning combo with the full board I would get the that the game was tied.
    // So I added a gameOver variable set to true after each winning possibilities,
    // and checked if board was full and game was not over.
    let fullBoard = 0
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (grid[row][col] === ' ') {
        } else {
          fullBoard++
        }
      }
      if (fullBoard === 9 && gameOver !== true) {
        $('#result').html('GAME IS A DRAW').fadeOut(3000)
        $('.empty-square').off()
        gameOver = true
        tieScore++
        $('#tie').html(tieScore)
      }
    }
    // gameOver === true ? replay() : gameOver = false
    // console.log(gameOver)
  }

})
