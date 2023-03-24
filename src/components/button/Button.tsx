
import './Button.scss'

interface ButtonProps {
  value: string
  btn: string
  type?: boolean
}

const Button: React.FC<ButtonProps> = ({ value, btn, type }) => {
  return <button className={btn} type={type ? 'button' : 'submit'}>{value}</button>
}

export default Button