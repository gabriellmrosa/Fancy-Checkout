var FancyCheckout=function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=3)}([function(t,e,n){var r;t.exports=function t(e,n,a){function i(c,s){if(!n[c]){if(!e[c]){var u="function"==typeof r&&r;if(!s&&u)return r(c,!0);if(o)return o(c,!0);var d=new Error("Cannot find module '"+c+"'");throw d.code="MODULE_NOT_FOUND",d}var l=n[c]={exports:{}};e[c][0].call(l.exports,function(t){var n=e[c][1][t];return i(n||t)},l,l.exports,t,e,n,a)}return n[c].exports}for(var o="function"==typeof r&&r,c=0;c<a.length;c++)i(a[c]);return i}({1:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=t[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(t){a=!0,i=t}finally{try{!r&&c.return&&c.return()}finally{if(a)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")};n.default=function(t){var e=function(t){return t.toString().replace(/\D/g,"").substr(0,6)}(t),n=[];return i.default.forEach(function(t){t.pattern.forEach(function(a){(function(t,e){return Array.isArray(e)?function(t,e){var n=r(e,2),a=n[0],i=n[1],o=a.toString().length,c=parseInt(t.substr(0,o));return c>=a&&c<=i}(t,e):function(t,e){return e instanceof RegExp?e.test(t):(e=e.toString(),t.substr(0,e.length)===e)}(t,e)})(e,a)&&n.unshift(t.name)})}),n[0]||""};var a=t("./cards"),i=function(t){return t&&t.__esModule?t:{default:t}}(a)},{"./cards":2}],2:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=[{name:"visa",pattern:[4]},{name:"mastercard",pattern:[[51,55],[2221,2720]]},{name:"amex",pattern:[34,37]},{name:"diners",pattern:[36,309,[300,305],[38,39]]},{name:"unionpay",pattern:[62]},{name:"discover",pattern:[6011,[622126,622925],[644,649],65]},{name:"jcb",pattern:[35]},{name:"maestro",pattern:[5018,502,503,506,56,57,58,639,6220,67]},{name:"elo",pattern:[401178,401179,431274,438935,451416,457393,457631,457632,504175,627780,636297,636297,636368,[506699,506778],[509e3,509999],[650031,650033],[650035,650051],[650405,650439],[650485,650538],[650541,650598],[650700,650718],[650720,650727],[650901,650920],[651652,651679],[655e3,655019],[655021,655058],[650921,650978]]},{name:"hipercard",pattern:[384100,384140,384160,/^60(?!11)/]}]},{}],3:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("./cards");Object.defineProperty(n,"cards",{enumerable:!0,get:function(){return i(r).default}});var a=t("./cardType");function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"cardType",{enumerable:!0,get:function(){return i(a).default}})},{"./cardType":1,"./cards":2}]},{},[3])(3)},function(t,e,n){},,function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.r(e);var a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var e=document.querySelector.bind(document);this.cardNumber=e("#numero-do-cartao-front"),this.cardNumberBack=e("#numero-do-cartao-back"),this.cardName=e("#nome-front"),this.cardNameBack=e("#nome-back"),this.cardDate=e("#data-front"),this.cardDateBack=e("#data-back"),this.cardBack=e("#cartao-back"),this.areaTitle=e("#titulo-area"),this.cardAreaTitle=e("#card-area-titulo"),this.areaButton=e("#button-area"),this.flipper=e("#flipper"),this.littleMachine=e("#maquininha"),this.niceEdge=e("#bordinha-nice"),this.successFeedback=e("#feedback-sucesso"),this.total=e("#total"),this.willDisappearAll=document.querySelectorAll(".vai-sumir"),this.willDisappear=e(".vai-sumir"),this.scrolTop=this.scrolTop.bind(this),this.secondStep=this.secondStep.bind(this),this.submit=this.submit.bind(this)}return function(t,e,n){e&&r(t.prototype,e),n&&r(t,n)}(t,[{key:"scrolTop",value:function(){window.scroll({top:0,left:0,behavior:"smooth"})}},{key:"secondStep",value:function(){var t=this;this.littleMachine.addEventListener("transitionend",function(){t.littleMachine.style.cssText="\n        height:auto;\n        z-index: 999;\n        padding: 50px 35px 90px 35px;\n        width: 80%;\n        margin:0px auto;\n        background: #362563;\n        background: -moz-linear-gradient(360deg, #362563 0%, #4b2563 100%);\n        background: -webkit-linear-gradient(360deg, #362563 0%,#4b2563 100%);\n        background: linear-gradient(360deg, #362563 0%,#4b2563 100%);\n        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#362563', endColorstr='#4b2563',GradientType=1 );\n        border-bottom: 6px solid #20163d;\n        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.45);\n      ",t.niceEdge.style.opacity="1"}),this.flipper.addEventListener("animationend",function(){t.successFeedback.style.cssText="opacity:1; transform: translate(-50%, -100%);"})}},{key:"submit",value:function(){var t=this;this.littleMachine.style.height="".concat(this.littleMachine.offsetHeight,"px"),this.scrolTop(),this.cardNumberBack.insertAdjacentHTML("afterbegin",this.cardNumber.value),this.cardNameBack.insertAdjacentHTML("afterbegin",this.cardName.value.toUpperCase()),this.cardDateBack.insertAdjacentHTML("afterbegin",this.cardDate.value),this.cardAreaTitle.classList.add("fadeOut"),this.areaTitle.classList.add("fadeOut"),this.areaButton.classList.add("fadeOut"),this.flipper.classList.add("anima-flipper"),this.cardBack.classList.add("anima-cartao-back"),this.littleMachine.classList.add("animacao-maquininha"),this.cardBack.addEventListener("animationend",function(){t.willDisappearAll.forEach(function(t){t.style.animation="vaiSumir 300ms both"}),t.willDisappear.addEventListener("animationend",function(){t.willDisappearAll.forEach(function(t){return t.remove()}),t.total.style.cssText="padding:15px; border:2px solid rgba(255,255,255,0.7); border-radius:4px;",t.littleMachine.style.height="100px",t.secondStep()},!1)},!1)}}]),t}(),i={init:function(t,e){var n=t,r=e;window.setTimeout(function(){n.value=r(n.value)},1)},creditCardPattern:function(t){var e=t;return e=(e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{4})(\d)/g,"$1 $2")).replace(/^(\d{4})\s(\d{4})(\d)/g,"$1 $2 $3")).replace(/^(\d{4})\s(\d{4})\s(\d{4})(\d)/g,"$1 $2 $3 $4")},datePattern:function(t){var e=t;return e=e.replace(/^(\d{2})(\d{4})/g,"$1/$2")}},o=function(){var t=document.getElementById("numero-do-cartao-front"),e=document.getElementById("data-front");t.addEventListener("keypress",function(t){i.init(this,i.creditCardPattern)}),e.addEventListener("keypress",function(t){i.init(this,i.datePattern)})},c={onlyRegex:function(t,e){var n=t.keyCode||t.which;n=String.fromCharCode(n),e.test(n)||(t.returnValue=!1,t.preventDefault&&t.preventDefault())}},s=function(){var t=document.getElementById("numero-do-cartao-front"),e=document.getElementById("nome-front"),n=document.getElementById("data-front"),r=document.getElementById("cvv-front");t.addEventListener("paste",function(t){return t.preventDefault()}),t.addEventListener("copy",function(t){return t.preventDefault()}),t.addEventListener("cut",function(t){return t.preventDefault()}),t.addEventListener("keypress",function(t){return c.onlyRegex(t,/\d/)}),e.addEventListener("keypress",function(t){return c.onlyRegex(t,/[A-z\s]/)}),n.addEventListener("keypress",function(t){return c.onlyRegex(t,/[\d]/)}),n.addEventListener("keypress",function(t){return c.onlyRegex(t,/[\d]/)}),r.addEventListener("keypress",function(t){return c.onlyRegex(t,/[\d]/)})},u=n(0);function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var e=document.querySelector.bind(document);this.cardFlag=e("#marca-cartao"),this.cardNumber=e("#numero-do-cartao-front"),this.init=this.init.bind(this),this.add=this.add.bind(this),this.remove=this.remove.bind(this),this.countChars=this.countChars.bind(this)}return function(t,e,n){e&&d(t.prototype,e),n&&d(t,n)}(t,[{key:"init",value:function(t){var e=t.target.value;e.length<=3?this.remove():Object(u.cardType)(e)&&this.add(e)}},{key:"add",value:function(t){var e=this,n=Object(u.cardType)(t),r=this.countChars(n);this.cardFlag.setAttribute("alt","Logo cartão de crédito "+n),this.cardFlag.setAttribute("src","dist/img/flags/"+n+".png"),this.cardNumber.setAttribute("minlength",r.minlength+3),this.cardNumber.setAttribute("maxlength",r.maxlength+3),window.setTimeout(function(){e.cardFlag.classList.add("marca-cartao-entra")},100)}},{key:"remove",value:function(){var t=this;this.cardFlag.classList.remove("marca-cartao-entra"),window.setTimeout(function(){t.cardFlag.setAttribute("src","dist/img/flags/visa.png"),t.cardFlag.setAttribute("alt",""),t.cardNumber.removeAttribute("minlength"),t.cardNumber.setAttribute("maxlength",22)},100)}},{key:"countChars",value:function(t){var e,n;switch(t){case"amex":e=15,n=15;break;case"diners":e=14,n=16;break;case"discover":case"elo":e=16,n=16;break;case"hipercard":e=13,n=19;break;case"jcb":case"mastercard":e=16,n=16;break;case"visa":e=13,n=16}return{minlength:e,maxlength:n}}}]),t}(),f=function(){var t=new l;document.getElementById("numero-do-cartao-front").addEventListener("keyup",t.init)};o(),s(),f();n(1);function h(){(new a).submit()}n.d(e,"init",function(){return h})}]);
//# sourceMappingURL=fancy-checkout.js.map