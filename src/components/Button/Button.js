const Button = ({ children, onChange, isActive }) => {
  return (
    <button className={'rounded-lg px-5 py-2 text-white bg-slate-700  ' + (isActive ? ' bg-slate-50 text-black' : undefined)} onClick={()=>onChange('children')}>{children}</button>
  )
}

export default Button;