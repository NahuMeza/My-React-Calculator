import './App.css'
import { useState, useEffect } from 'react'

function App () {
  const [firstValue, setFirstValue] = useState('')
  const [secondValue, setSecondValue] = useState('')
  const [wichValue, setWichValue] = useState(1)
  const [operation, setOperation] = useState('')
  const [displayNumber, setDisplayNumber] = useState(0)
  const [numDisabled, setNumDisabled] = useState(false)
  const calcNumbs = [['9', '8', '7'], ['6', '5', '4'], ['3', '2', '1'], ['0', '.', '=']]
  const calcOps = ['+', '-', 'x', '/']

  const checkPeriod = (value, setValue, sumN) => {
    if (!value.includes('.')) {
      return setValue(value + sumN)
    }
    return sumN !== '.' ? setValue(value + sumN) : null
  }

  const setValues = (n) => {
    if (wichValue !== 2) {
      return checkPeriod(firstValue, setFirstValue, n)
    }
    return checkPeriod(secondValue, setSecondValue, n)
  }

  const calculate = () => {
    setNumDisabled(true)
    switch (operation) {
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

  useEffect(() => {
    if (wichValue === 1) {
      setDisplayNumber(firstValue)
    } else if (wichValue === 2) {
      setDisplayNumber(secondValue)
    }
  }, [firstValue, secondValue, wichValue])

  return (
    <main>
      <section>
        <article className='calc-display'>
          <button onClick={() => { setWichValue(1); setFirstValue(''); setSecondValue(''); setNumDisabled(false) }}>AC</button>
          {displayNumber || 0}
        </article>
        <article className='calc-numbpad'>
          <div>
            {calcNumbs.map((numb, index) => {
              return (
                <div key={index + numb}>
                  {numb.map((num) => { return (<button key={num} onClick={() => { return num !== '=' ? setValues(num) : calculate() }} disabled={numDisabled}>{num}</button>) })}
                </div>
              )
            })}
          </div>
          <div className='calc-ops'>{calcOps.map((op) => { return (<button key={op} onClick={() => { setWichValue(2); setOperation(op) }} disabled={wichValue === 2 ? true : null}>{op}</button>) })}</div>
        </article>
      </section>
    </main>
  )
}

export default App
