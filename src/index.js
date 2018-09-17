'use strict'

import Checkout from './js/Checkout'
import './js'
import './scss/main.scss'

export function init () {
  new Checkout().submit()
}
