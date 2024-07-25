import {useState} from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const FormPasswordInput = ({
  name,
  type,
  label,
  required,
  className,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      <div className={"flex justify-between"}>
        <label htmlFor={name}>{label}</label>
        <button type={'button'} onClick={() => {
          setShowPassword(!showPassword)
        }}>
          {showPassword ? <VisibilityOffIcon fontSize={"small"}/> : <VisibilityIcon fontSize={"small"}/>}
        </button>
      </div>
      <input
        className={`border border-black rounded px-2 py-1 ${className}`}
        id={name}
        key={name}
        name={name}
        type={showPassword ? 'text' : 'password'}
        required={required}
      />
    </div>

  )
}

export default FormPasswordInput