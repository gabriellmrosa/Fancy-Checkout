'use strict'

import { cardType } from '@polvo-labs/card-type'

class CreditCardFlag {
  constructor () {
    const $ = document.querySelector.bind(document)

    // props
    this.cardFlag = $('#marca-cartao')
    this.cardNumber = $('#numero-do-cartao-front')

    // methods
    this.init = this.init.bind(this)
    this.add = this.add.bind(this)
    this.remove = this.remove.bind(this)
    this.countChars = this.countChars.bind(this)
  }

  init (e) {
    let val = e.target.value

    if (val.length <= 3) {
      this.remove()
      return
    }

    if (cardType(val)) {
      this.add(val)
    }
  }

  add (val) {
    const flag = cardType(val)
    const cardCharsNumbers = this.countChars(flag)

    this.cardFlag.setAttribute('alt', 'Logo cartão de crédito ' + flag)
    this.cardFlag.setAttribute('src', 'dist/img/flags/' + flag + '.png')
    this.cardNumber.setAttribute('minlength', cardCharsNumbers.minlength + 3)
    this.cardNumber.setAttribute('maxlength', cardCharsNumbers.maxlength + 3)

    window.setTimeout(() => {
      this.cardFlag.classList.add('marca-cartao-entra')
    }, 100)
  }

  remove () {
    this.cardFlag.classList.remove('marca-cartao-entra')

    window.setTimeout(() => {
      this.cardFlag.setAttribute('src', 'dist/img/flags/visa.png')
      this.cardFlag.setAttribute('alt', '')
      this.cardNumber.removeAttribute('minlength')
      this.cardNumber.setAttribute('maxlength', 22)
    }, 100)
  }

  countChars (flag) {
    let min
    let max

    switch (flag) {
      case 'amex':
        min = 15
        max = 15
        break

      case 'diners':
        min = 14
        max = 16
        break

      case 'discover':
        min = 16
        max = 16
        break

      case 'elo':
        min = 16
        max = 16
        break

      case 'hipercard':
        min = 13
        max = 19
        break

      case 'jcb':
        min = 16
        max = 16
        break

      case 'mastercard':
        min = 16
        max = 16
        break

      case 'visa':
        min = 13
        max = 16
        break

      default:
        break
    }

    return {
      minlength: min,
      maxlength: max
    }
  }
}

export default CreditCardFlag
