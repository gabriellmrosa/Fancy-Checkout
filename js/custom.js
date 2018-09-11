let $ = document.querySelector.bind(document);

let btnComprar = document.querySelector('.btn-comprar');
let maquininha = document.querySelector(".maquininha");
let vaiSumirTodos = document.querySelectorAll('.vai-sumir');
let vaiSumir = document.querySelector('.vai-sumir');
let alturaAtual = maquininha.offsetHeight;

maquininha.style.height = `${alturaAtual}px`;

$('.numero-do-cartao-front').addEventListener('keyup', function(event){
        if(this.value.length > 3){
            $('.marca-cartao').classList.add('marca-cartao-entra');
        }

})

btnComprar.addEventListener('click', function () {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    let numeroCard = $('.numero-do-cartao-front').value
    $('.numero-do-cartao-back').insertAdjacentHTML('afterbegin', numeroCard);

    let nomeCard = $('.nome-front').value
    $('.nome-back').insertAdjacentHTML('afterbegin', nomeCard);

    let dataCard = $('.data-front').value
    $('.data-back').insertAdjacentHTML('afterbegin', dataCard);

    $('.card-area h2').classList.add('fadeOut')
    $('.titulo-area').classList.add('fadeOut')
    $('.button-area').classList.add('fadeOut')

    let flipper = document.querySelector('.flipper');
    let cartaoback = document.querySelector('.cartao-back');

    flipper.classList.add('anima-flipper')
    cartaoback.classList.add('anima-cartao-back')
    maquininha.classList.add('animacao-maquininha')


    $('.anima-cartao-back').addEventListener('animationend', function (event) {
        vaiSumirTodos.forEach(function (vaiSumir) {
            vaiSumir.style.animation = 'vaiSumir 300ms both';
        });

        vaiSumir.addEventListener('animationend', function (event) {
            vaiSumirTodos.forEach(function (vaiSumir) {
                vaiSumir.remove();
            });

            $('.total').style.cssText = "padding:15px; border:2px solid rgba(255,255,255,0.7); border-radius:4px;"

            maquininha.style.height = `100px`;

            parteDois()

        }, false)
    }, false)

});

function parteDois() {
    maquininha.addEventListener('transitionend', function (event) {
        maquininha.style.cssText = `
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
    `;

        $('.bordinha-nice').style.opacity = "1"

    });

    $('.anima-flipper').addEventListener('animationend', function (event) {
        $('.feedback-sucesso').style.cssText = "opacity:1; transform: translate(-50%, -100%);";
    });
}

