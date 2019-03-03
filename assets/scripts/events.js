'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./store')
const logic = require('./logic')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onCreateGame = function () {
  event.preventDefault()
  api.createGame()
    // .then(logic.onPlayAgain())
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
    // logic.onPlayAgain()
}

const onUpdateGame = function () {
  event.preventDefault()
  const index = $(event.target).data('cell-index') // index
  const value = store.player // player
  api.updateGame(index, value)
    .then(logic.enableClick)
    .then(ui.updateGameSuccess)
    .catch(ui.upGameFailure)
}

const onGetGames = function () {
  event.preventDefault()
  api.getGames()
    .then(ui.getGameSuccess)
    .catch(ui.getGameFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onCreateGame,
  onUpdateGame,
  onGetGames
}
