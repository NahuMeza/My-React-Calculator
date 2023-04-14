
const CalcButton = ({ children, onClick, disab }) => {
  return (
    <button onClick={() => { onClick() }} disabled={disab}>
      {children}
    </button>
  )
}

export default CalcButton
