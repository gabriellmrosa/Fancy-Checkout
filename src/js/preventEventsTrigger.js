'use strict'

import Utils from './Utils'

const preventEventsTrigger = () => {
  const cardNumber = document.getElementById('numero-do-cartao-front')
  const cardName = document.getElementById('nome-front')
  const cardDate = document.getElementById('data-front')
  const cardCVV = document.getElementById('cvv-front')

  cardNumber.addEventListener('paste', (e) => e.preventDefault())
  cardNumber.addEventListener('copy', (e) => e.preventDefault())
  cardNumber.addEventListener('cut', (e) => e.preventDefault())
  cardNumber.addEventListener('keypress', (e) => Utils.onlyRegex(e, /\d/))
  cardName.addEventListener('keypress', (e) => Utils.onlyRegex(e, /[A-z\s]/))
  cardDate.addEventListener('keypress', (e) => Utils.onlyRegex(e, /[\d]/))
  cardDate.addEventListener('keypress', (e) => Utils.onlyRegex(e, /[\d]/))
  cardCVV.addEventListener('keypress', (e) => Utils.onlyRegex(e, /[\d]/))
}

export default preventEventsTrigger
