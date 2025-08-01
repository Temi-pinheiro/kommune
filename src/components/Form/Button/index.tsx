import Loader from '../../UI/Loader'
import './styles.css'

interface ButtonProps {
  primary?: boolean
  mono?: boolean
  danger?: boolean
  red?: boolean
  approve?: boolean
  reject?: boolean
  rounded?: boolean
  size?: 'small' | 'medium' | 'large' | 'extra-large'
  disabled?: boolean
  loading?: boolean
  leftIcon?: boolean
  rightIcon?: boolean
  icon?: any
  effect?: any
  label?: string
  type?: 'button' | 'reset' | 'submit'
}

export const Button = ({
  primary = false,
  mono,
  approve,
  reject,
  danger = false,
  red = false,
  leftIcon,
  rightIcon,
  icon,
  size = 'medium',
  disabled = false,
  label = 'Button',
  type = 'button',
  effect,
  loading = false,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? ' bg-[#ADEC76] text-[#090C06] hover:ring-1 duration-500 transition ring-offset-1 ring-[#ADEC76]'
    : danger
      ? 'bg-white text-[#D00000] hover:bg-[#D00000] hover:text-white hover:shadow-none duration-500 transition  shadow-md border border-[#EBECF0]'
      : red
        ? 'bg-white text-white bg-[#D00000] hover:ring-1 duration-500 transition ring-offset-1 ring-[#d00000] shadow-md border border-[#EBECF0]'
        : mono
          ? 'text-[#090C06] bg-transaparent hover:ring-1 border border-black duration-500 transition disabled:bg-transparent disabled:text-[#9f9f9f] disabled:border-[#9f9f9f] disabled:hover:pointer-events-none disabled:hover:ring-0'
          : approve
            ? 'bg-green-600 text-white duration-500 transition ring-offset-1 ring-green-600 hover:ring-1'
            : reject
              ? 'bg-orange-600 text-white border border-transparent hover:ring-1 duration-500 transition ring-offset-1 ring-orange-600'
              : ' bg-[#ADEC76] text-white hover:ring-1 duration-500 transition ring-offset-1 ring-[#ADEC76]'

  return (
    <button
      type={type}
      className={[
        'btn  cursor-pointer',
        `${mode}`,
        `${size}`,
        ` rounded-3xl`,
        icon ? 'flex items-center gap-x-3' : '',
      ].join(' ')}
      disabled={disabled || loading}
      onClick={effect}
      {...props}
    >
      {loading ? (
        <span className="w-full grid place-items-center relative">
          <span className="absolute z-10">
            <Loader bgColor="#ADEC76" />
          </span>
          <span className="opacity-0">{label}</span>
        </span>
      ) : (
        <>
          {leftIcon && icon}

          <span className="truncate">{label}</span>
          {rightIcon && icon}
        </>
      )}
    </button>
  )
}
