'use strict'

const store = (require('./store'))
const logic = (require('./logic'))

const signUpSuccess = function (responseData) {
  store.user = responseData.user
  $('#messages').text('You Have Successfully Signed Up, Please Sign In')
  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('#messages').text('Error on sign up')
  $('form').trigger('reset')
}

const signInSuccess = function (responseData) {
  store.user = responseData.user
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#games-completed').show()
  $('#sign-out').show()
  $('#create-game').show()
  $('#get-index').show()
  $('#change-password').show()
  $('#games-completed').hide()
  $('#messages').text('Press Create Game To Start'
  ).css('background-color', 'white')
  $('#username').show()
  $('#username').html(store.user.email.split('@').slice(0, -1))
}

const signInFailure = function () {
  $('#messages').text('Please Enter Correct Email and Password')
  $('form').trigger('reset')
  $('#messages').show()
}

const changePasswordSuccess = function () {
  $('#messages').text('Changed password successfully')
  $('form').trigger('reset')
  $('#messages').show()
}

const changePasswordFailure = function () {
  $('#messages').text('Error on change password'
  ).css('background-color', 'white')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('#messages').html('You Are Now Signed Out')
  setTimeout(function () {
    $('#messages').html('Please Sign In'
    ).css('background-color', 'white')
  }, 3000)
  $('form').trigger('reset')
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
  $('#username').hide()
  $('#total-games').hide()
  store.user = null
  store.game = null
  logic.gameBoard = ['', '', '', '', '', '', '', '', '']
}

const signOutFailure = function () {
  $('#messages').text('Error on sign out')
  $('form').trigger('reset')
}

const createGameSuccess = function (responseData) {
  store.game = responseData.game
  store.player = 'X'
  $('#gameBoard').show()
  $('#turn').text('Player X is Up')
  logic.onPlayAgain()
  $('#messages').hide()
  $('#create-game').hide()
  $('#playAgainBtn').show()
  $('#gamesPlayed').hide()
  $('#games-completed').hide()
  $('#get-index').show()
  $('#total-games').show()
  $('#total-games').html('game id:' + ' ' + store.game.id)
}

const createGameFailure = function () {
  $('#messages').text('Please sign out of any other device first')
}

const updateGameSuccess = function (responseData, over) {
  store.game = responseData.game
  store.player === 'X' ? store.player = 'O' : store.player = 'X'
}

const updateGameFailure = function () {
  $('#messages').text('Error on update game')
}

const getGameSuccess = function (responseData) {
  store.games = responseData.games
  $('#gamesPlayed').text(store.games.length)
  $('#games-completed').show()
  $('#gamesPlayed').show()
  $('#get-index').hide()
}

const getGameFailure = function () {
  $('#messages').text('Error on change password')
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
