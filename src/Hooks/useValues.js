import { useState } from 'react'

export function useValues () {
  const [firstValue, setFirstValue] = useState('')
  const [secondValue, setSecondValue] = useState('')

  const checkPeriod = (value, setValue, sumN) => {
    if (!value.includes('.')) {
      return setValue(value + sumN)
    }
    return sumN !== '.' ? setValue(value + sumN) : null
  }
  const resetAll = () => {
    setFirstValue('')
    setSecondValue('')
  }
  const updateValue = (n, wichValue) => {
    if (wichValue !== 2) {
      checkPeriod(firstValue, setFirstValue, n)
    } else { checkPeriod(secondValue, setSecondValue, n) }
  }
  return { firstValue, secondValue, updateValue, resetAll }
}
