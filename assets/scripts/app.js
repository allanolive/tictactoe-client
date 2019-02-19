'use strict'

const authEvents = require('./events.js')
const gameLogic = require('./logic')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#create-game').on('click', authEvents.onCreateGame)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#gameBoard div').on('click', gameLogic.getWinner)
  $('#playAgainBtn').on('click', gameLogic.playAgain)
})
