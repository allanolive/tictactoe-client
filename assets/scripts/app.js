'use strict'

const authEvents = require('./events.js')
const gameLogic = require('./logic')

$(() => {
  $('#gameBoard').hide()
  $('#games-completed').hide()
  $('#create-game').hide()
  $('#sign-out').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#create-game').on('click', authEvents.onCreateGame)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#gameBoard div').on('click', authEvents.onUpdateGame)
  $('#gameBoard div').on('click', gameLogic.ongetWinner)
  $('#playAgainBtn').on('click', gameLogic.onPlayAgain)
})
