'use strict'

const squares = $('#gameBoard div')
const turn = $('#turn')
const square = $('.square')
let gameOver = false
let currentPlayer = 0
let numberOfMoves = 0
let gamesPlayed = 0

const countGamesplayed = function () {
  if (gameOver !== true && numberOfMoves === 9) {
    gamesPlayed += 1
  } else if (gameOver === true) {
    gamesPlayed += 1
  }
}

const winningSequence = function (sqr1, sqr2, sqr3) {
  sqr1.css('background', 'red')
  sqr2.css('background', 'red')
  sqr3.css('background', 'red')
  turn.html('Player ' + sqr1.html() + ' Won')
  turn.css('font-size', '32px')
}

const checkForDraw = function () {
  for (let i = 0; i < squares.length; i++) {
    if (gameOver !== true && numberOfMoves === 9) {
      turn.html('GAME IS A DRAW')
      gameOver = true
      diasableClick()
    }
  }
}

const diasableClick = function () {
  for (let i = 0; i < squares.length; i++) {
    squares[i].onclick = function () {
      squares.off('click')
    }
  }
}

const enableClick = function () {
  for (let i = 0; i < squares.length; i++) {
    squares[i].onclick = function () {
      if ($(this).html() !== 'X' && $(this).html() !== 'O') {
        if (currentPlayer % 2 === 0) {
          gameBoard[i] = 'x'
          console.log(gameBoard)
          currentPlayer += 1
          numberOfMoves += 1
          $(this).html('X')
          turn.html('O TURN NOW')
          checkForDraw()
          onGetWinner()
          countGamesplayed()
          console.log(numberOfMoves)
          console.log(gameOver)
        } else {
          gameBoard[i] = ('o')
          console.log(gameBoard)
          currentPlayer -= 1
          numberOfMoves += 1
          $(this).html('O')
          turn.html('X TURN NOW')
          checkForDraw()
          onGetWinner()
          countGamesplayed()
          console.log(numberOfMoves)
          console.log(gameOver)
        }
      }
    }
  }
}

let gameBoard = ['', '', '', '', '', '', '', '', '']
// this function will find the all the possible winning combos
const onGetWinner = function () {
  const square1 = $('#square1')
  const square2 = $('#square2')
  const square3 = $('#square3')
  const square4 = $('#square4')
  const square5 = $('#square5')
  const square6 = $('#square6')
  const square7 = $('#square7')
  const square8 = $('#square8')
  const square9 = $('#square9')

  // if (square1.html() !== '' &&
  // square1.html() === square2.html() &&
  // square1.html() === square3.html()) {
  //   winningSequence(square1, square2, square3)
  //   gameOver = true
  //   diasableClick()
  if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[1] &&
  gameBoard[0] === gameBoard[2]) {
    winningSequence(square1, square2, square3)
    gameOver = true
    diasableClick()
  } if (gameBoard[3] !== '' && gameBoard[3] === gameBoard[4] &&
  gameBoard[3] === gameBoard[5]) {
    winningSequence(square4, square5, square6)
    gameOver = true
    diasableClick()
  } if (gameBoard[6] !== '' && gameBoard[6] === gameBoard[7] &&
  gameBoard[6] === gameBoard[8]) {
    winningSequence(square7, square8, square9)
    gameOver = true
    diasableClick()
  } if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[3] &&
  gameBoard[0] === gameBoard[5]) {
    winningSequence(square1, square4, square7)
    gameOver = true
    diasableClick()
  } if (gameBoard[1] !== '' && gameBoard[1] === gameBoard[4] &&
  gameBoard[1] === gameBoard[7]) {
    winningSequence(square2, square5, square8)
    gameOver = true
    diasableClick()
  } if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[5] &&
  gameBoard[2] === gameBoard[8]) {
    winningSequence(square3, square6, square9)
    gameOver = true
    diasableClick()
  } if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[4] &&
  gameBoard[0] === gameBoard[8]) {
    winningSequence(square1, square5, square9)
    gameOver = true
    diasableClick()
  } if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[4] &&
  gameBoard[2] === gameBoard[6]) {
    winningSequence(square3, square5, square7)
    gameOver = true
    diasableClick()
    checkForDraw()
    // enableClick()
  // } if (gameOver === true) {
  //   diasableClick()
  }
}

enableClick()

const onPlayAgain = function () {
  for (let i = 0; i < squares.length; i++) {
    square.css('background', 'white')
    square.html('')
    $().html('')
    turn.html('PLAY')
    turn.css('font-size', '25px')
    numberOfMoves = 0
    gameOver = false
    currentPlayer = 0
    $('#gamesPlayed').html(gamesPlayed)
    checkForDraw()
    enableClick()
    gameBoard = ['', '', '', '', '', '', '', '', '']
  }
}

module.exports = {
  onPlayAgain,
  onGetWinner
}
