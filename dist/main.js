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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts */ \"./src/scripts/index.js\");\n/* harmony import */ var _scss_checkout_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/checkout.scss */ \"./src/scss/checkout.scss\");\n/* harmony import */ var _scss_checkout_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_checkout_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// import scripts\n\n\n// import main\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scripts/checkout.js":
/*!*********************************!*\
  !*** ./src/scripts/checkout.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const $ = document.querySelector.bind(document)\n\nconst vaiSumirTodos = document.querySelectorAll('.vai-sumir')\nconst btnComprar = $('.btn-comprar')\nconst maquininha = $('.maquininha')\nconst vaiSumir = $('.vai-sumir')\nconst alturaAtual = maquininha.offsetHeight\nconst numeroCard = $('.numero-do-cartao-front')\nconst nomeCard = $('.nome-front')\nconst dataCard = $('.data-front')\nconst flipper = $('.flipper')\nconst cartaoback = $('.cartao-back')\n\nconst parteDois = function () {\n  maquininha.addEventListener('transitionend', function (event) {\n    maquininha.style.cssText = `\n    height:auto;\n    z-index: 999;\n    padding: 50px 35px 90px 35px;\n    width: 80%;\n    margin:0px auto;\n    background: #362563;\n    background: -moz-linear-gradient(360deg, #362563 0%, #4b2563 100%);\n    background: -webkit-linear-gradient(360deg, #362563 0%,#4b2563 100%);\n    background: linear-gradient(360deg, #362563 0%,#4b2563 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#362563', endColorstr='#4b2563',GradientType=1 );\n    border-bottom: 6px solid #20163d;\n    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.45);\n    `\n\n    $('.bordinha-nice').style.opacity = '1'\n  })\n\n  $('.anima-flipper').addEventListener('animationend', function (event) {\n    $('.feedback-sucesso').style.cssText = 'opacity:1; transform: translate(-50%, -100%);'\n  })\n}\n\nmaquininha.style.height = `${alturaAtual}px`\n\n$('.numero-do-cartao-front').addEventListener('keyup', function (event) {\n  if (this.value.length > 3) {\n    $('.marca-cartao').classList.add('marca-cartao-entra')\n  }\n})\n\nbtnComprar.addEventListener('click', function () {\n  window.scroll({\n    top: 0,\n    left: 0,\n    behavior: 'smooth'\n  })\n\n  $('.numero-do-cartao-back').insertAdjacentHTML('afterbegin', numeroCard.value)\n  $('.nome-back').insertAdjacentHTML('afterbegin', nomeCard.value)\n  $('.data-back').insertAdjacentHTML('afterbegin', dataCard.value)\n  $('.card-area h2').classList.add('fadeOut')\n  $('.titulo-area').classList.add('fadeOut')\n  $('.button-area').classList.add('fadeOut')\n\n  flipper.classList.add('anima-flipper')\n  cartaoback.classList.add('anima-cartao-back')\n  maquininha.classList.add('animacao-maquininha')\n\n  $('.anima-cartao-back').addEventListener('animationend', function (event) {\n    vaiSumirTodos.forEach(function (vaiSumir) {\n      vaiSumir.style.animation = 'vaiSumir 300ms both'\n    })\n\n    vaiSumir.addEventListener('animationend', function (event) {\n      vaiSumirTodos.forEach(function (vaiSumir) {\n        vaiSumir.remove()\n      })\n\n      $('.total').style.cssText = 'padding:15px; border:2px solid rgba(255,255,255,0.7); border-radius:4px;'\n\n      maquininha.style.height = `100px`\n\n      parteDois()\n    }, false)\n  }, false)\n})\n\n\n//# sourceURL=webpack:///./src/scripts/checkout.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout */ \"./src/scripts/checkout.js\");\n/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_checkout__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n//# sourceURL=webpack:///./src/scripts/index.js?");

/***/ }),

/***/ "./src/scss/checkout.scss":
/*!********************************!*\
  !*** ./src/scss/checkout.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:11)\\nYou may need an appropriate loader to handle this file type.\\n> body, html {\\n|   color:rgba(255,255,255,0.7);\\n|   height:100%;\");\n\n//# sourceURL=webpack:///./src/scss/checkout.scss?");

/***/ })

/******/ });