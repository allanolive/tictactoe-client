'use strict'

const store = (require('./store'))
const logic = (require('./logic'))

const signUpSuccess = function (data) {
  $('#messages').text('You Have Successfully Signed Up, Please Sign In'
  ).css('background-color', 'limegreen')
  $('#sign-up').hide()
  store.gamePlayed = -1
  // console.log('signUpSuccess worked. Data is :', data)
}

const signUpFailure = function () {
  $('#messages').text('Error on sign up')
  // console.error('signUpFailure worked. Error is :', error)
}

const signInSuccess = function (data) {
  // $('#messages').text('Hello' + store.user
  // ).css('background-color', 'limegreen')
  $('#gameBoard').show()
  $('#games-completed').show()
  $('#sign-out').show()
  $('#create-game').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#get-index').show()
  const squares = $('#gameBoard div')
  for (let i = 0; i < squares.length; i++) {
    squares[i].onclick = function () {
      squares.off('click')
    }
  }
  store.user = data.user
  $('#messages').text('Welcome ' + store.user.email +
  ', You Are Player X. Please Create A New Game To Start'
  ).css('background-color', 'white')
}

const signInFailure = function () {
  $('#messages').text('Please Enter Correct Email and Password'
  ).css('background-color', 'red')
  $('#messages').trigger('reset')
  // console.error('signUpFailure worked. Error is :', error)
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
  $('#gameBoard').hide()
  $('#create-game').hide()
  $('#playAgainBtn').hide()
  $('#sign-out').hide()
  $('#games-completed').hide()
  $('#messages').show()
  store.user = null
}

const signOutFailure = function () {
  $('#messages').text('Error on sign out')
  // console.error('signOutFailure ran. Error is :', error)
}

const changePasswordSuccess = function () {
  $('#messages').text('Changed password successfully'
  ).css('background-color', 'limegreen')
}

const changePasswordFailure = function () {
  $('#messages').text('Error on change password')
  // console.error('changePasswordFailure ran. Error is :', error)
}

const createGameSuccess = function (responseData) {
  $('#turn').text('Player X is Up')
  $('#create-game').on('click', logic.onPlayAgain())
  $('#messages').hide()
  $('#create-game').hide()
  $('#playAgainBtn').show()
  store.game = responseData.game
  store.player = 'o'
  console.log(store.game)
}

const createGameFailure = function () {
  $('#messages').text('Error on create game')
  // console.error('createGameFailure ran. Error is :', error)
}

const updateGameSuccess = function (responseData, over) {
  store.player === 'x' ? store.player = 'o' : store.player = 'x'
  store.game = responseData.game
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
