'use strict'

const authEvents = require('./events.js')
// const gameLogic = require('./logic')

$(() => {
  $('#gameBoard').hide()
  $('#games-completed').hide()
  $('#create-game').hide()
  $('#playAgainBtn').hide()
  $('#sign-out').hide()
  $('#get-index').hide()
  $('#change-password').hide()
  $('#gamesPlayed').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#create-game').on('click', authEvents.onCreateGame)
  $('#playAgainBtn').on('click', authEvents.onCreateGame)
  $('#gameBoard div').on('click', authEvents.onUpdateGame)
  // $('#gameBoard div').on('click', gameLogic.onGetWinner) // TRYING TO PUT FUNCTION IN UPDATE GAME SUCCESS
  $('#get-index').on('click', authEvents.onGetGames)
})
