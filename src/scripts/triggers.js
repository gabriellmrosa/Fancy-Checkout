'use strict'

import Checkout from './Checkout'

const checkout = new Checkout()
const btnComprar = document.getElementById('btn-comprar')
btnComprar.addEventListener('click', checkout.submit)

document.querySelector('.numero-do-cartao-front').addEventListener('keyup', function (event) {
  if (this.value.length > 3) {
    document.querySelector('.marca-cartao').classList.add('marca-cartao-entra')
  }
})
