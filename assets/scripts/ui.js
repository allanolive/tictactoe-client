'use strict'

const store = (require('./store'))

const signUpSuccess = function (data) {
  $('#messages').text('Signed up successfully')
  $('#messages').removeClass()
  $('#messages').addClass('success')
  console.log('signUpSuccess worked. Data is :', data)
}

const signUpFailure = function (error) {
  $('#messages').text('Error on sign up')
  $('#messages').removeClass()
  $('#messages').addClass('failure')
  console.error('signUpFailure worked. Error is :', error)
}

const signInSuccess = function (data) {
  $('#messages').text('Signed in successfully')
  $('#messages').removeClass()
  $('#messages').addClass('success')
  console.log('signIn Success worked. Data is :', data)
  store.user = data.user
}

const signInFailure = function (error) {
  $('#messages').text('Error on sign in')
  $('#messages').removeClass()
  $('#messages').addClass('failure')
  console.error('signUpFailure worked. Error is :', error)
}

const signOutSuccess = function () {
  $('#messages').text('Signed out successfully')
  $('#messages').removeClass()
  $('#messages').addClass('success')
  $('form').trigger('reset')
  console.log('signOutSuccess ran and nothing was returned!')
  store.user = null
}

const signOutFailure = function (error) {
  $('#messages').text('Error on sign out')
  $('#messages').removeClass()
  $('#messages').addClass('failure')
  console.error('signOutFailure ran. Error is :', error)
}

const changePasswordSuccess = function () {
  $('#messages').text('Changed password successfully')
  $('#messages').removeClass()
  $('#messages').addClass('success')
  console.log('changePasswordSuccess ran and nothing was returned!')
}

const changePasswordFailure = function (error) {
  $('#messages').text('Error on change password')
  $('#messages').removeClass()
  $('#messages').addClass('failure')
  console.error('changePasswordFailure ran. Error is :', error)
}

const createGameSuccess = function (responseData) {
  $('#messages').text('New Game')
  $('#messages').removeClass()
  $('#messages').addClass('success')
  store.data = responseData.data
  console.log('changePasswordSuccess ran and nothing was returned!')
}

const createGameFailure = function (error) {
  $('#messages').text('Error On Creating New Game')
  $('#messages').removeClass()
  $('#messages').addClass('failure')
  console.error('changePasswordFailure ran. Error is :', error)
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
  createGameFailure
}
