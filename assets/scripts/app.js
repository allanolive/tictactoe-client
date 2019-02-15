'use strict'
// const sayHi = require('./events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => { // once browser is done loading...
// player0 and player1 will be used as variables to switch between turns and
// output X and O to the game board.
  const player0 = 'X'
  const player1 = 'O'

  // I decided to represent the game board as a grid like object with two values
  // each of rows and columns, which made me visualize the board a little
  // more easily.
  const grid = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ]
  // I use this variable in order to toggle between player0 and player1 in the
  // nextTurn function
  let currentPlayer = player0
  // Here I have a really big Event listner that I might want to break down into
  // smaller parts. Basically I am listening for a click in any of the empty
  // squares, referencing the data-row and data-col in the html and target each
  // individual square and as long as the square is = ' ' then I used the this
  // keyword to reference empty-square class and input the current player which
  // either 'X' or 'O', while i was at it I also checked for winner and applied
  // a nextTurn function.
  $('.empty-square').on('click', function () {
    const row = $(this).data('row')
    const col = $(this).data('col')
    if (grid[row][col] === ' ') {
      $(this).html(currentPlayer)
      grid[row][col] = currentPlayer
      console.log(grid)
      checkForWinner()
      nextTurn()
    }
  })

  // Simple logic for the toggling of players here, most important part is
  // knowing exactly when to have it invoked.
  const nextTurn = function () {
    currentPlayer === player0 ? currentPlayer = player1 : currentPlayer = player0
  }

  // This is where most of the game logic happens
  const checkForWinner = function () {
    for (let row = 0; row < 3; row++)
      if (grid[row][0] !== ' ' && grid[row][0] === grid[row][1] && grid[row][0] === grid[row][2]) {
        $('#result').text('PLAYER ' + grid[row][0] + ' IS THE WINNER!').fadeOut(3000, function () { ('#result').text(' ') })
      }
    // check if colums are the same
    for (let col = 0; col < 3; col++)
      if (grid[0][col] !== ' ' && grid[0][col] === grid[1][col] && grid[0][col] === grid[2][col]) {
        $('#result').text('PLAYER ' + grid[0][col] + ' IS THE WINNER!').fadeOut(3000, function () { ('#result').text(' ') })
      }
    // check if diagonal top left to bottom right are the same
    if (grid[0][0] !== ' ' && grid[0][0] === grid[1][1] && grid[0][0] === grid[2][2]) {
      $('#result').text('PLAYER ' + grid[0][0] + ' IS THE WINNER!').fadeOut(3000, function () { ('#result').text(' ') })
    }
    // check if diagonal bottom left to top right is the same
    if (grid[2][0] !== ' ' && grid[2][0] === grid[1][1] && grid[2][0] === grid[0][2]) {
      $('#result').text('PLAYER ' + grid[2][0] + ' IS THE WINNER!').fadeOut(3000, function () { ('#result').text(' ') })
    }
    // I need to check if there are any empty spaces by looping through all rows and columns
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (grid[row][col] === ' ') {
          return false
        }
      }
    }
    return null
}
})
