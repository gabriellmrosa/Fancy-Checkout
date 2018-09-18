'use strict'

import mask from './Mask'

const maskTrigger = () => {
  const cardNumber = document.getElementById('numero-do-cartao-front')
  const cardDate = document.getElementById('data-front')

  cardNumber.addEventListener('keypress', function (event) {
    mask.init(this, mask.creditCardPattern)
  })

  cardDate.addEventListener('keypress', function (event) {
    mask.init(this, mask.datePattern)
  })
}

export default maskTrigger
