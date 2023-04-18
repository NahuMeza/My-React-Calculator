
const CalcButton = ({ children, onClick, disab, arrName = null }) => {
  return (
    <button onClick={() => { onClick() }} disabled={disab} className={disab ? null : arrName}>
      {children}
    </button>
  )
}

export default CalcButton
