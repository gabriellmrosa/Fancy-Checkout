import { cardType } from '@polvo-labs/card-type'

var $ = document.querySelector.bind(document)

var willDisappearAll = document.querySelectorAll('.vai-sumir')
var buyButton = document.getElementById('btn-comprar')
var machine = document.getElementById('maquininha')
var willDisappear = $('.vai-sumir')
var cardNumber = document.getElementById('numero-do-cartao-front')
var cardName = document.getElementById('nome-front')
var cardDate = document.getElementById('data-front')
var cardCVV = document.getElementById('cvv-front')
var flipper = document.getElementById('flipper')
var cardBack = document.getElementById('cartao-back')
var cardFlag = document.getElementById('marca-cartao')
var currentHeight = machine.offsetHeight

var cardNumberBack = document.getElementById('numero-do-cartao-back')
var cardNameBack = document.getElementById('nome-back')
var cardDateBack = document.getElementById('data-back')
var cardArea = document.getElementById('card-area')
var cardAreaTitle = document.getElementById('titulo-area')
var areaButton = document.getElementById('button-area')

var total = document.getElementById('total')

// var onlyRegex = function (event, regex) {
//   let key = event.keyCode || event.which
//   key = String.fromCharCode(key)

//   if (!regex.test(key)) {
//     event.returnValue = false
//     if (event.preventDefault) {
//       event.preventDefault()
//     }
//   }
// }

// var cardMinMaxCharsNumbers = function (bandeira) {
//   let min
//   let max

//   switch (bandeira) {
//     case 'amex':
//       min = 15
//       max = 15
//       break

//     case 'diners':
//       min = 14
//       max = 16
//       break

//     case 'discover':
//       min = 16
//       max = 16
//       break

//     case 'elo':
//       min = 16
//       max = 16
//       break

//     case 'hipercard':
//       min = 13
//       max = 19
//       break

//     case 'jcb':
//       min = 16
//       max = 16
//       break

//     case 'mastercard':
//       min = 16
//       max = 16
//       break

//     case 'visa':
//       min = 13
//       max = 16
//       break

//     default:
//       break
//   }

//   return {
//     minlength: min,
//     maxlength: max
//   }
// }

// var addCardInputAttrs = function (value) {
//   var flag = cardType(value)
//   var cardCharsNumbers = cardMinMaxCharsNumbers(cardType(value))

//   cardFlag.setAttribute('alt', 'Logo cartão de crédito ' + flag)
//   cardFlag.setAttribute('src', 'img/bandeiras/' + flag + '.png')
//   cardNumber.setAttribute('minlength', cardCharsNumbers.minlength + 3)
//   cardNumber.setAttribute('maxlength', cardCharsNumbers.maxlength + 3)

//   window.setTimeout(function () {
//     cardFlag.classList.add('marca-cartao-entra')
//   }, 100)
// }

// var removeCardInputAttrs = function () {
//   cardFlag.classList.remove('marca-cartao-entra')

//   window.setTimeout(function () {
//     cardFlag.removeAttribute('src')
//     cardFlag.removeAttribute('alt')
//     cardNumber.removeAttribute('minlength')
//     cardNumber.setAttribute('maxlength', 22)
//   }, 100)
// }

// var cardFlagToggle = function (event) {
//   var value = event.target.value

//   if (value.length <= 3 || !cardType(value)) {
//     removeCardInputAttrs()
//     return
//   }

//   addCardInputAttrs(value)
// }

var secondStep = function () {
  machine.addEventListener('transitionend', function (event) {
    machine.style.cssText = `
    height:auto;
    z-index: 999;
    padding: 50px 35px 90px 35px;
    width: 80%;
    margin:0px auto;
    background: #362563;
    background: -moz-linear-gradient(360deg, #362563 0%, #4b2563 100%);
    background: -webkit-linear-gradient(360deg, #362563 0%,#4b2563 100%);
    background: linear-gradient(360deg, #362563 0%,#4b2563 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#362563', endColorstr='#4b2563',GradientType=1 );
    border-bottom: 6px solid #20163d;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.45);
    `

    $('.bordinha-nice').style.opacity = '1'
  })

  $('.anima-flipper').addEventListener('animationend', function (event) {
    $('.feedback-sucesso').style.cssText = 'opacity:1; transform: translate(-50%, -100%);'
  })
}

var submit = function () {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })

  cardNumberBack.insertAdjacentHTML('afterbegin', cardNumber.value)
  cardNameBack.insertAdjacentHTML('afterbegin', cardName.value)
  cardDateBack.insertAdjacentHTML('afterbegin', cardDate.value)
  cardArea.querySelector('h2').classList.add('fadeOut')
  cardAreaTitle.classList.add('fadeOut')
  areaButton.classList.add('fadeOut')

  flipper.classList.add('anima-flipper')
  cardBack.classList.add('anima-cartao-back')
  machine.classList.add('animacao-machine')

  document.querySelector('.anima-cartao-back').addEventListener('animationend', function (event) {
    willDisappearAll.forEach(function (willDisappear) {
      willDisappear.style.animation = 'vaiSumir 300ms both'
    })

    willDisappear.addEventListener('animationend', function (event) {
      willDisappearAll.forEach(function (willDisappear) {
        willDisappear.remove()
      })

      total.style.cssText = 'padding:15px; border:2px solid rgba(255,255,255,0.7); border-radius:4px;'
      machine.style.height = `100px`
      secondStep()
    }, false)
  }, false)
}

machine.style.height = `${currentHeight}px`

// prevent events
cardNumber.addEventListener('paste', function (event) {
  event.preventDefault()
})

cardNumber.addEventListener('copy', function (event) {
  event.preventDefault()
})

cardNumber.addEventListener('cut', function (event) {
  event.preventDefault()
})

// prevent insert chars
cardNumber.addEventListener('keypress', function (event) {
  onlyRegex(event, /\d/)
})

cardCVV.addEventListener('keypress', function (event) {
  onlyRegex(event, /\d/)
})

cardName.addEventListener('keypress', function (event) {
  onlyRegex(event, /[a-z\s]+/)
})

cardNumber.addEventListener('keyup', cardFlagToggle)

buyButton.addEventListener('click', submit)
