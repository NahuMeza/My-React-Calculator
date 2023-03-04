import './App.css'
import { useState, useEffect } from 'react'

function App () {
  const [firstValue, setFirstValue] = useState('')
  const [secondValue, setSecondValue] = useState('')
  const [wichValue, setWichValue] = useState(1)
  const [displayNumber, setDisplayNumber] = useState(0)
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
        <article className='calc-display'>{displayNumber || 0}</article>
        <article className='calc-numbpad'>
          <div>
            {calcNumbs.map((numb, index) => {
              return (
                <div key={index + numb}>
                  {numb.map((num) => { return (<button key={num} onClick={() => { return num !== '=' ? setValues(num) : null }}>{num}</button>) })}
                </div>
              )
            })}
          </div>
          <div className='calc-ops'>{calcOps.map((op) => { return (<button key={op} onClick={() => { setWichValue(2) }} disabled={wichValue === 2 ? true : null}>{op}</button>) })}</div>
        </article>
      </section>
    </main>
  )
}

export default App