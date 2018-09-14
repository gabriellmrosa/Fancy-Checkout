'use strict'

import { cardType } from '@polvo-labs/card-type'

// cardFlagToggle
// CreditCardFlag.init
class CreditCardFlag {
  constructor () {
    this.addCardInputAttrs = this.addCardInputAttrs.bind(this)
    this.removeCardInputAttrs = this.removeCardInputAttrs.bind(this)
    this.cardMinMaxCharsNumbers = this.cardMinMaxCharsNumbers.bind(this)
  }

  init (event) {
    const value = event.target.value

    if (value.length <= 3 || !cardType(value)) {
      this.removeCardInputAttrs()
      return
    }

    this.addCardInputAttrs(value)
  }

  addCardInputAttrs (cardFlag, cardNumber, value) {
    const flag = cardType(value)
    const cardCharsNumbers = this.cardMinMaxCharsNumbers(cardType(value))

    cardFlag.setAttribute('alt', 'Logo cartão de crédito ' + flag)
    cardFlag.setAttribute('src', 'img/bandeiras/' + flag + '.png')
    cardNumber.setAttribute('minlength', cardCharsNumbers.minlength + 3)
    cardNumber.setAttribute('maxlength', cardCharsNumbers.maxlength + 3)

    window.setTimeout(function () {
      cardFlag.classList.add('marca-cartao-entra')
    }, 100)
  }

  removeCardInputAttrs (cardFlag, cardNumber) {
    cardFlag.classList.remove('marca-cartao-entra')

    window.setTimeout(function () {
      cardFlag.removeAttribute('src')
      cardFlag.removeAttribute('alt')
      cardNumber.removeAttribute('minlength')
      cardNumber.setAttribute('maxlength', 22)
    }, 100)
  }

  cardMinMaxCharsNumbers (bandeira) {
    let min
    let max

    switch (bandeira) {
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
