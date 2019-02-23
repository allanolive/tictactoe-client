'use strict'

const store = (require('./store'))
const logic = (require('./logic'))

const signUpSuccess = function (responseData) {
  store.user = responseData.user
  $('#messages').text('You Have Successfully Signed Up, Please Sign In'
  ).css('background-color', 'limegreen')
  $('#sign-up').hide()
}

const signUpFailure = function () {
  $('#messages').text('Error on sign up')
}

const signInSuccess = function (responseData) {
  store.user = responseData.user
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#gameBoard').show()
  $('#games-completed').show()
  $('#sign-out').show()
  $('#create-game').show()
  $('#get-index').show()
  $('#change-password').show()
  const squares = $('#gameBoard div')
  for (let i = 0; i < squares.length; i++) {
    squares[i].onclick = function () {
      $('#turn').text('INVALID MOVE')
      squares.off('click')
    }
  }
  $('#messages').text('Welcome ' + store.user.email +
  ', You Are Player X. Please Create A New Game To Start'
  ).css('background-color', 'white')
}

const signInFailure = function () {
  $('#messages').text('Please Enter Correct Email and Password'
  ).css('background-color', 'red')
  $('form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#messages').text('Changed password successfully'
  ).css('background-color', 'limegreen')
  $('form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#messages').text('Error on change password'
  ).css('background-color', 'white')
  $('form').trigger('reset')
// console.error('changePasswordFailure ran. Error is :', error)
}

const signOutSuccess = function () {
  $('#messages').html('You Are Now Signed Out')
  setTimeout(function () {
    $('#messages').html('Please Sign In'
    ).css('background-color', 'white')
  }, 3000)
  $('form').trigger('reset')
  // logic.onPlayAgain()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#gameBoard').hide()
  $('#create-game').hide()
  $('#change-password').hide()
  $('#get-index').hide()
  $('#playAgainBtn').hide()
  $('#sign-out').hide()
  $('#games-completed').hide()
  $('#messages').show()
  store.user = null
}

const signOutFailure = function () {
  $('#messages').text('Error on sign out')
  $('form').trigger('reset')
}

const createGameSuccess = function (responseData) {
  store.game = responseData.game
  $('#turn').text('Player X is Up')
  logic.onPlayAgain()
  // $('#create-game').on('click', logic.onPlayAgain())
  $('#messages').hide()
  $('#create-game').hide()
  $('#playAgainBtn').show()
  store.player = 'x'
}

const createGameFailure = function () {
  $('#messages').text('Error on creating game')
}

const updateGameSuccess = function (responseData, over) {
  store.game = responseData.game
  console.log(store.game)
  store.player === 'x' ? store.player = 'o' : store.player = 'x'
}

const updateGameFailure = function () {
  $('#messages').text('Error on update game')
  // console.error('update game failure. Error is :', error)
}

const getGameSuccess = function (responseData) {
  store.games = responseData.games
  console.log(store.games)
  $('#messages').html(store.games)
}

const getGameFailure = function () {
  $('#messages').text('Error on change password')
  // console.error('changePasswordFailure ran. Error is :', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  getGameSuccess,
  getGameFailure
}
