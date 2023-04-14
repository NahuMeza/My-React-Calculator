
const CalcButton = ({ children, onClick, disab, arrName = null }) => {
  return (
    <button onClick={() => { onClick() }} disabled={disab} className={children !== '=' ? arrName : 'equalButton'}>
      {children}
    </button>
  )
}

export default CalcButton
