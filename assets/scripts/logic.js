'use strict'

const store = require('./store.js')

const squares = $('#gameBoard div')
const turn = $('#turn')
const square = $('.square')
let gameOver = false
let currentPlayer = 0
let numberOfMoves = 0
let gamesPlayed = 0

const isGameOver = function () {
  if (gameOver === true) {
    return true
  } else if (gameOver === false) {
    return false
  }
}

const getValue = function () {
  if (currentPlayer === 0) {
    return 'x'
  } else if (currentPlayer === 1) {
    return 'o'
  }
}
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
  // for (let i = 0; i < squares.length; i++) {
  if (gameOver !== true && numberOfMoves === 9) {
    turn.html('GAME IS A DRAW')
    gameOver = true
    disableClick()
  }
}
// }

const disableClick = function () {
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
          currentPlayer += 1
          numberOfMoves += 1
          $(this).html('X')
          turn.html('O TURN NOW')
        } else {
          gameBoard[i] = ('o')
          currentPlayer -= 1
          numberOfMoves += 1
          $(this).html('O')
          turn.html('X TURN NOW')
        }
      }

      checkForDraw()
      onGetWinner()
      countGamesplayed()
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

  if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[1] &&
  gameBoard[0] === gameBoard[2]) {
    winningSequence(square1, square2, square3)
    gameOver = true
    disableClick()
  } if (gameBoard[3] !== '' && gameBoard[3] === gameBoard[4] &&
  gameBoard[3] === gameBoard[5]) {
    winningSequence(square4, square5, square6)
    gameOver = true
    disableClick()
  } if (gameBoard[6] !== '' && gameBoard[6] === gameBoard[7] &&
  gameBoard[6] === gameBoard[8]) {
    winningSequence(square7, square8, square9)
    gameOver = true
    disableClick()
  } if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[3] &&
  gameBoard[0] === gameBoard[6]) {
    winningSequence(square1, square4, square7)
    gameOver = true
    disableClick()
  } if (gameBoard[1] !== '' && gameBoard[1] === gameBoard[4] &&
  gameBoard[1] === gameBoard[7]) {
    winningSequence(square2, square5, square8)
    gameOver = true
    disableClick()
  } if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[5] &&
  gameBoard[2] === gameBoard[8]) {
    winningSequence(square3, square6, square9)
    gameOver = true
    disableClick()
  } if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[4] &&
  gameBoard[0] === gameBoard[8]) {
    winningSequence(square1, square5, square9)
    gameOver = true
    disableClick()
  } if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[4] &&
  gameBoard[2] === gameBoard[6]) {
    winningSequence(square3, square5, square7)
    gameOver = true
    disableClick()
    checkForDraw()
  }
}

enableClick()

const onPlayAgain = function () {
  console.log(store.game.id)
  for (let i = 0; i < squares.length; i++) {
    square.css('background', 'white')
    square.html('')
    turn.html('PLAYER X START!')
    turn.css('font-size', '25px')
    // numberOfMoves = 0
    // gameOver = false
    // currentPlayer = 0
    // $('#gamesPlayed').html(gamesPlayed)
    // checkForDraw()
    // enableClick()
    // gameBoard = ['', '', '', '', '', '', '', '', '']
  }
  numberOfMoves = 0
  gameOver = false
  currentPlayer = 0
  checkForDraw()
  enableClick()
  gameBoard = ['', '', '', '', '', '', '', '', '']
  $('#gamesPlayed').html(gamesPlayed) // CHECK IF THIS IS NEEDED
  store.player = 'o' // CHECK WHATS UP HERE
}

module.exports = {
  onPlayAgain,
  onGetWinner,
  getValue,
  isGameOver
}
