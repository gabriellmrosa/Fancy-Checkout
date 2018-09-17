'use strict'

import CreditCardFlag from './CreditCardFlag'

const creditCardFlagTrigger = () => {
  const creditCardFlag = new CreditCardFlag()
  const cardNumber = document.getElementById('numero-do-cartao-front')
  cardNumber.addEventListener('keyup', creditCardFlag.init)
}

export default creditCardFlagTrigger
