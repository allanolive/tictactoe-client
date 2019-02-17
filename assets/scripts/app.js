const logic = require('./logic.js')

$(() => {
  $('#playAgainBtn').on('click', logic.playAgain)
})
