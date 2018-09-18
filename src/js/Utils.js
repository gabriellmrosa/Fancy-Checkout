'use strict'

const Utils = {
  onlyRegex (e, regex) {
    let key = e.keyCode || e.which
    key = String.fromCharCode(key)

    if (!regex.test(key)) {
      e.returnValue = false

      if (e.preventDefault) {
        e.preventDefault()
      }
    }
  }
}

export default Utils
