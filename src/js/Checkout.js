'use strict'

class Checkout {
  constructor () {
    const $ = document.querySelector.bind(document)

    // props
    this.cardNumber = $('#numero-do-cartao-front')
    this.cardNumberBack = $('#numero-do-cartao-back')
    this.cardName = $('#nome-front')
    this.cardNameBack = $('#nome-back')
    this.cardDate = $('#data-front')
    this.cardDateBack = $('#data-back')
    this.cardBack = $('#cartao-back')
    this.areaTitle = $('#titulo-area')
    this.cardAreaTitle = $('#card-area-titulo')
    this.areaButton = $('#button-area')
    this.flipper = $('#flipper')
    this.littleMachine = $('#maquininha')
    this.niceEdge = $('#bordinha-nice')
    this.successFeedback = $('#feedback-sucesso')
    this.total = $('#total')
    this.willDisappearAll = document.querySelectorAll('.vai-sumir')
    this.willDisappear = $('.vai-sumir')

    // methods
    this.scrolTop = this.scrolTop.bind(this)
    this.secondStep = this.secondStep.bind(this)
    this.submit = this.submit.bind(this)
  }

  scrolTop () {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  secondStep () {
    this.littleMachine.addEventListener('transitionend', () => {
      this.littleMachine.style.cssText = `
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

      this.niceEdge.style.opacity = '1'
    })

    this.flipper.addEventListener('animationend', () => {
      this.successFeedback.classList.add('confirmado')
    })
  }

  submit () {
    this.littleMachine.style.height = `${this.littleMachine.offsetHeight}px`

    this.scrolTop()

    this.cardNumberBack.insertAdjacentHTML('afterbegin', this.cardNumber.value)
    this.cardNameBack.insertAdjacentHTML('afterbegin', this.cardName.value.toUpperCase())
    this.cardDateBack.insertAdjacentHTML('afterbegin', this.cardDate.value)
    this.cardAreaTitle.classList.add('fadeOut')
    this.areaTitle.classList.add('fadeOut')
    this.areaButton.classList.add('fadeOut')

    this.flipper.classList.add('anima-flipper')
    this.cardBack.classList.add('anima-cartao-back')
    this.littleMachine.classList.add('animacao-maquininha')

    this.cardBack.addEventListener('animationend', () => {
      this.willDisappearAll.forEach(item => {
        item.style.animation = 'vaiSumir 300ms both'
      })

      this.willDisappear.addEventListener('animationend', () => {
        this.willDisappearAll.forEach(item => item.remove())
        this.total.style.cssText = 'padding:15px; border:2px solid rgba(255,255,255,0.7); border-radius:4px;'
        this.littleMachine.style.height = '100px'
        this.secondStep()
      }, false)
    }, false)
  }
}

export default Checkout
