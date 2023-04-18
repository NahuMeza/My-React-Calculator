import './App.css'
import { useState, useEffect } from 'react'
import { useValues } from '../../Hooks/useValues.js'
import CalcButton from '../CalcButton/CalcButton.jsx'

function App () {
  const { firstValue, secondValue, updateValue, resetValues } = useValues()
  const [wichValue, setWichValue] = useState(1)
  const [operation, setOperation] = useState('')
  const [displayNumber, setDisplayNumber] = useState(0)
  const [numDisabled, setNumDisabled] = useState(false)
  const calcNumbs = [['9', '8', '7'], ['6', '5', '4'], ['3', '2', '1'], ['0', '.', '=']]
  const calcOps = ['+', '-', 'x', '/']

  useEffect(() => {
    if (wichValue === 1) {
      setDisplayNumber(firstValue)
    } else if (wichValue === 2) {
      setDisplayNumber(secondValue)
    }
  }, [firstValue, secondValue, wichValue])

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

  return (
    <main>
      <section className='calc-case'>
        <article className='calc-display'>
          <button onClick={() => { setWichValue(1); resetValues(); setNumDisabled(false) }} className='acButton'>
            AC
          </button>
          <div className='displayn'>
            {displayNumber || 0}
          </div>
        </article>
        <article className='calc-numbpad'>
          <div>
            {calcNumbs.map((numb, index) => {
              return (
                <div key={index + numb}>
                  {numb.map((num) => {
                    return (
                      <CalcButton
                        key={num}
                        onClick={() => { return num !== '=' ? updateValue(num, wichValue) : calculate() }}
                        disab={numDisabled}
                        arrName={num !== '=' ? 'nums' : 'equalButton'}
                      >
                        {num}
                      </CalcButton>
                    )
                  })}
                </div>
              )
            })}
          </div>
          <div className='calc-ops'>
            {calcOps.map((op) => {
              return (
                <CalcButton
                  key={op}
                  onClick={() => { setWichValue(2); setOperation(op) }}
                  disab={wichValue === 2 ? true : null}
                  arrName='calcOps'
                >
                  {op}
                </CalcButton>
              )
            })}
          </div>
        </article>
      </section>
    </main>
  )
}

export default App
