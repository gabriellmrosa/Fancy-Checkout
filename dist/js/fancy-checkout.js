var FancyCheckout =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;_e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }return _arr;
  }return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

exports.default = cardType;

var _cards = require('./cards');

var _cards2 = _interopRequireDefault(_cards);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function cardType(card) {
  var bin = getBin(card);
  var detectedTypes = [];

  _cards2.default.forEach(function (card) {
    card.pattern.forEach(function (pattern) {
      if (checkCard(bin, pattern)) {
        detectedTypes.unshift(card.name);
      }
    });
  });

  return detectedTypes[0] || '';
}

function getBin(value) {
  return value.toString().replace(/\D/g, '').substr(0, 6);
}

function checkCard(bin, pattern) {
  return Array.isArray(pattern) ? checkRange(bin, pattern) : checkPattern(bin, pattern);
}

function checkPattern(bin, pattern) {
  if (pattern instanceof RegExp) {
    return pattern.test(bin);
  }

  pattern = pattern.toString();
  return bin.substr(0, pattern.length) === pattern;
}

function checkRange(bin, _ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      min = _ref2[0],
      max = _ref2[1];

  var length = min.toString().length;
  var value = parseInt(bin.substr(0, length));

  return value >= min && value <= max;
}

},{"./cards":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  name: 'visa',
  pattern: [4]
}, {
  name: 'mastercard',
  pattern: [[51, 55], [2221, 2720]]
}, {
  name: 'amex',
  pattern: [34, 37]
}, {
  name: 'diners',
  pattern: [36, 309, [300, 305], [38, 39]]
}, {
  name: 'unionpay',
  pattern: [62]
}, {
  name: 'discover',
  pattern: [6011, [622126, 622925], [644, 649], 65]
}, {
  name: 'jcb',
  pattern: [35]
}, {
  name: 'maestro',
  pattern: [5018, 502, 503, 506, 56, 57, 58, 639, 6220, 67]
}, {
  name: 'elo',
  pattern: [401178, 401179, 431274, 438935, 451416, 457393, 457631, 457632, 504175, 627780, 636297, 636297, 636368, [506699, 506778], [509000, 509999], [650031, 650033], [650035, 650051], [650405, 650439], [650485, 650538], [650541, 650598], [650700, 650718], [650720, 650727], [650901, 650920], [651652, 651679], [655000, 655019], [655021, 655058], [650921, 650978]]
}, {
  name: 'hipercard',
  pattern: [384100, 384140, 384160, /^60(?!11)/]
}];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cards = require('./cards');

Object.defineProperty(exports, 'cards', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cards).default;
  }
});

var _cardType = require('./cardType');

Object.defineProperty(exports, 'cardType', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cardType).default;
  }
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

},{"./cardType":1,"./cards":2}]},{},[3])(3)
});
//# sourceMappingURL=card-type.js.map


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/js/Checkout.js


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Checkout =
/*#__PURE__*/
function () {
  function Checkout() {
    _classCallCheck(this, Checkout);

    var $ = document.querySelector.bind(document); // props

    this.cardNumber = $('#numero-do-cartao-front');
    this.cardNumberBack = $('#numero-do-cartao-back');
    this.cardName = $('#nome-front');
    this.cardNameBack = $('#nome-back');
    this.cardDate = $('#data-front');
    this.cardDateBack = $('#data-back');
    this.cardBack = $('#cartao-back');
    this.areaTitle = $('#titulo-area');
    this.cardAreaTitle = $('#card-area-titulo');
    this.areaButton = $('#button-area');
    this.flipper = $('#flipper');
    this.littleMachine = $('#maquininha');
    this.niceEdge = $('#bordinha-nice');
    this.successFeedback = $('#feedback-sucesso');
    this.total = $('#total');
    this.willDisappearAll = document.querySelectorAll('.vai-sumir');
    this.willDisappear = $('.vai-sumir'); // methods

    this.scrolTop = this.scrolTop.bind(this);
    this.secondStep = this.secondStep.bind(this);
    this.submit = this.submit.bind(this);
  }

  _createClass(Checkout, [{
    key: "scrolTop",
    value: function scrolTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, {
    key: "secondStep",
    value: function secondStep() {
      var _this = this;

      this.littleMachine.addEventListener('transitionend', function () {
        _this.littleMachine.style.cssText = "\n        height:auto;\n        z-index: 999;\n        padding: 50px 35px 90px 35px;\n        width: 80%;\n        margin:0px auto;\n        background: #362563;\n        background: -moz-linear-gradient(360deg, #362563 0%, #4b2563 100%);\n        background: -webkit-linear-gradient(360deg, #362563 0%,#4b2563 100%);\n        background: linear-gradient(360deg, #362563 0%,#4b2563 100%);\n        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#362563', endColorstr='#4b2563',GradientType=1 );\n        border-bottom: 6px solid #20163d;\n        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.45);\n      ";
        _this.niceEdge.style.opacity = '1';
      });
      this.flipper.addEventListener('animationend', function () {
        _this.successFeedback.style.cssText = 'opacity:1; transform: translate(-50%, -100%);';
      });
    }
  }, {
    key: "submit",
    value: function submit() {
      var _this2 = this;

      this.littleMachine.style.height = "".concat(this.littleMachine.offsetHeight, "px");
      this.scrolTop();
      this.cardNumberBack.insertAdjacentHTML('afterbegin', this.cardNumber.value);
      this.cardNameBack.insertAdjacentHTML('afterbegin', this.cardName.value.toUpperCase());
      this.cardDateBack.insertAdjacentHTML('afterbegin', this.cardDate.value);
      this.cardAreaTitle.classList.add('fadeOut');
      this.areaTitle.classList.add('fadeOut');
      this.areaButton.classList.add('fadeOut');
      this.flipper.classList.add('anima-flipper');
      this.cardBack.classList.add('anima-cartao-back');
      this.littleMachine.classList.add('animacao-maquininha');
      this.cardBack.addEventListener('animationend', function () {
        _this2.willDisappearAll.forEach(function (item) {
          item.style.animation = 'vaiSumir 300ms both';
        });

        _this2.willDisappear.addEventListener('animationend', function () {
          _this2.willDisappearAll.forEach(function (item) {
            return item.remove();
          });

          _this2.total.style.cssText = 'padding:15px; border:2px solid rgba(255,255,255,0.7); border-radius:4px;';
          _this2.littleMachine.style.height = '100px';

          _this2.secondStep();
        }, false);
      }, false);
    }
  }]);

  return Checkout;
}();

/* harmony default export */ var js_Checkout = (Checkout);
// CONCATENATED MODULE: ./src/js/Mask.js


var Mask = {
  init: function init(obj, func) {
    var newObj = obj;
    var newFunc = func;
    window.setTimeout(function () {
      newObj.value = newFunc(newObj.value);
    }, 1);
  },
  creditCardPattern: function creditCardPattern(val) {
    var newVal = val;
    newVal = newVal.replace(/\D/g, '');
    newVal = newVal.replace(/^(\d{4})(\d)/g, '$1 $2');
    newVal = newVal.replace(/^(\d{4})\s(\d{4})(\d)/g, '$1 $2 $3');
    newVal = newVal.replace(/^(\d{4})\s(\d{4})\s(\d{4})(\d)/g, '$1 $2 $3 $4');
    return newVal;
  },
  datePattern: function datePattern(val) {
    var newValue = val;
    newValue = newValue.replace(/^(\d{2})(\d{4})/g, '$1/$2');
    return newValue;
  }
};
/* harmony default export */ var js_Mask = (Mask);
// CONCATENATED MODULE: ./src/js/maskTrigger.js




var maskTrigger_maskTrigger = function maskTrigger() {
  var cardNumber = document.getElementById('numero-do-cartao-front');
  var cardDate = document.getElementById('data-front');
  cardNumber.addEventListener('keypress', function (event) {
    js_Mask.init(this, js_Mask.creditCardPattern);
  });
  cardDate.addEventListener('keypress', function (event) {
    js_Mask.init(this, js_Mask.datePattern);
  });
};

/* harmony default export */ var js_maskTrigger = (maskTrigger_maskTrigger);
// CONCATENATED MODULE: ./src/js/Utils.js


var Utils = {
  onlyRegex: function onlyRegex(e, regex) {
    var key = e.keyCode || e.which;
    key = String.fromCharCode(key);

    if (!regex.test(key)) {
      e.returnValue = false;

      if (e.preventDefault) {
        e.preventDefault();
      }
    }
  }
};
/* harmony default export */ var js_Utils = (Utils);
// CONCATENATED MODULE: ./src/js/preventEventsTrigger.js




var preventEventsTrigger_preventEventsTrigger = function preventEventsTrigger() {
  var cardNumber = document.getElementById('numero-do-cartao-front');
  var cardName = document.getElementById('nome-front');
  var cardDate = document.getElementById('data-front');
  var cardCVV = document.getElementById('cvv-front');
  cardNumber.addEventListener('paste', function (e) {
    return e.preventDefault();
  });
  cardNumber.addEventListener('copy', function (e) {
    return e.preventDefault();
  });
  cardNumber.addEventListener('cut', function (e) {
    return e.preventDefault();
  });
  cardNumber.addEventListener('keypress', function (e) {
    return js_Utils.onlyRegex(e, /\d/);
  });
  cardName.addEventListener('keypress', function (e) {
    return js_Utils.onlyRegex(e, /[A-z\s]/);
  });
  cardDate.addEventListener('keypress', function (e) {
    return js_Utils.onlyRegex(e, /[\d]/);
  });
  cardDate.addEventListener('keypress', function (e) {
    return js_Utils.onlyRegex(e, /[\d]/);
  });
  cardCVV.addEventListener('keypress', function (e) {
    return js_Utils.onlyRegex(e, /[\d]/);
  });
};

/* harmony default export */ var js_preventEventsTrigger = (preventEventsTrigger_preventEventsTrigger);
// EXTERNAL MODULE: ./node_modules/@polvo-labs/card-type/dist/card-type.js
var card_type = __webpack_require__(0);

// CONCATENATED MODULE: ./src/js/CreditCardFlag.js


function CreditCardFlag_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CreditCardFlag_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CreditCardFlag_createClass(Constructor, protoProps, staticProps) { if (protoProps) CreditCardFlag_defineProperties(Constructor.prototype, protoProps); if (staticProps) CreditCardFlag_defineProperties(Constructor, staticProps); return Constructor; }



var CreditCardFlag_CreditCardFlag =
/*#__PURE__*/
function () {
  function CreditCardFlag() {
    CreditCardFlag_classCallCheck(this, CreditCardFlag);

    var $ = document.querySelector.bind(document); // props

    this.cardFlag = $('#marca-cartao');
    this.cardNumber = $('#numero-do-cartao-front'); // methods

    this.init = this.init.bind(this);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.countChars = this.countChars.bind(this);
  }

  CreditCardFlag_createClass(CreditCardFlag, [{
    key: "init",
    value: function init(e) {
      var val = e.target.value;

      if (val.length <= 3) {
        this.remove();
        return;
      }

      if (Object(card_type["cardType"])(val)) {
        this.add(val);
      }
    }
  }, {
    key: "add",
    value: function add(val) {
      var _this = this;

      var flag = Object(card_type["cardType"])(val);
      var cardCharsNumbers = this.countChars(flag);
      this.cardFlag.setAttribute('alt', 'Logo cartão de crédito ' + flag);
      this.cardFlag.setAttribute('src', 'dist/img/flags/' + flag + '.png');
      this.cardNumber.setAttribute('minlength', cardCharsNumbers.minlength + 3);
      this.cardNumber.setAttribute('maxlength', cardCharsNumbers.maxlength + 3);
      window.setTimeout(function () {
        _this.cardFlag.classList.add('marca-cartao-entra');
      }, 100);
    }
  }, {
    key: "remove",
    value: function remove() {
      var _this2 = this;

      this.cardFlag.classList.remove('marca-cartao-entra');
      window.setTimeout(function () {
        _this2.cardFlag.setAttribute('src', 'dist/img/flags/visa.png');

        _this2.cardFlag.setAttribute('alt', '');

        _this2.cardNumber.removeAttribute('minlength');

        _this2.cardNumber.setAttribute('maxlength', 22);
      }, 100);
    }
  }, {
    key: "countChars",
    value: function countChars(flag) {
      var min;
      var max;

      switch (flag) {
        case 'amex':
          min = 15;
          max = 15;
          break;

        case 'diners':
          min = 14;
          max = 16;
          break;

        case 'discover':
          min = 16;
          max = 16;
          break;

        case 'elo':
          min = 16;
          max = 16;
          break;

        case 'hipercard':
          min = 13;
          max = 19;
          break;

        case 'jcb':
          min = 16;
          max = 16;
          break;

        case 'mastercard':
          min = 16;
          max = 16;
          break;

        case 'visa':
          min = 13;
          max = 16;
          break;

        default:
          break;
      }

      return {
        minlength: min,
        maxlength: max
      };
    }
  }]);

  return CreditCardFlag;
}();

/* harmony default export */ var js_CreditCardFlag = (CreditCardFlag_CreditCardFlag);
// CONCATENATED MODULE: ./src/js/creditCardFlagTrigger.js




var creditCardFlagTrigger_creditCardFlagTrigger = function creditCardFlagTrigger() {
  var creditCardFlag = new js_CreditCardFlag();
  var cardNumber = document.getElementById('numero-do-cartao-front');
  cardNumber.addEventListener('keyup', creditCardFlag.init);
};

/* harmony default export */ var js_creditCardFlagTrigger = (creditCardFlagTrigger_creditCardFlagTrigger);
// CONCATENATED MODULE: ./src/js/index.js



js_maskTrigger();
js_preventEventsTrigger();
js_creditCardFlagTrigger();
// EXTERNAL MODULE: ./src/scss/main.scss
var main = __webpack_require__(1);

// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return src_init; });





function src_init() {
  new js_Checkout().submit();
}

/***/ })
/******/ ]);