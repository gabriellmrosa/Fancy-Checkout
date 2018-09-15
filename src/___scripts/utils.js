'use strict'

const Utils = {
  onlyRegex (event, regex) {
    let key = event.keyCode || event.which
    key = String.fromCharCode(key)

    if (!regex.test(key)) {
      event.returnValue = false
      if (event.preventDefault) {
        event.preventDefault()
      }
    }
  }
}

export default Utils
