
const CalcButton = ({ children, onClick, disab }) => {
  return (
    <button key={children} onClick={() => { onClick() }} disabled={disab}>
      {children}
    </button>
  )
}

export default CalcButton
