import Mask from './Mask'

const cardNumber = document.getElementById('numero-do-cartao-front')
cardNumber.addEventListener('keypress', function (event) {
  Mask.init(this, Mask.creditCardPattern)
})

const cardDate = document.getElementById('data-front')
cardDate.addEventListener('keypress', function (event) {
  Mask.init(this, Mask.datePattern)
})
