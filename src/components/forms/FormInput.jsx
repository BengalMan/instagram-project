const FormInput = ({
    name,
    type,
    label,
    required,
    className,
}) => {
return(
    <div className="flex flex-col gap-1">
        <label htmlFor={name}>{label}</label>
        <input
            className={`border border-black rounded px-2 py-1 ${className}`}
            id={name}
            key={name}
            name={name}
            type={type || "text"}
            required={required}
        />
    </div>

)
}

export default FormInput