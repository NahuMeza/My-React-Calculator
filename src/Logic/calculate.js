import { useState } from 'react'

const useCalculate = () => {
  const calculate = (op) => {
    setNumDisabled(true)
    switch (op) {
      case '+':
        return setDisplayNumber(parseFloat(firstValue) + parseFloat(secondValue))
      case '-':
        return setDisplayNumber(parseFloat(firstValue) - parseFloat(secondValue))
      case 'x':
        return setDisplayNumber(parseFloat(firstValue) * parseFloat(secondValue))
      case '/':
        return setDisplayNumber(parseFloat(firstValue) / parseFloat(secondValue))
      default:
        return null
    }
  }
  return { calculate }
}

export default useCalculate
