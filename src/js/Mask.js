'use strict'

const Mask = {
  init (obj, func) {
    var newObj = obj
    var newFunc = func

    window.setTimeout(function () {
      newObj.value = newFunc(newObj.value)
    }, 1)
  },

  creditCardPattern (val) {
    let newVal = val

    newVal = newVal.replace(/\D/g, '')
    newVal = newVal.replace(/^(\d{4})(\d)/g, '$1 $2')
    newVal = newVal.replace(/^(\d{4})\s(\d{4})(\d)/g, '$1 $2 $3')
    newVal = newVal.replace(/^(\d{4})\s(\d{4})\s(\d{4})(\d)/g, '$1 $2 $3 $4')

    return newVal
  },

  datePattern (val) {
    let newValue = val
    newValue = newValue.replace(/^(\d{2})(\d{4})/g, '$1/$2')
    return newValue
  }
}

export default Mask
