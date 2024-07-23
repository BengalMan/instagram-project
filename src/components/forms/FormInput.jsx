const FormInput = ({
    id,
    type,
    label,
    required,
    className,
}) => {
return(
    <div className="flex flex-col gap-1">
        <label htmlFor={id}>{label}</label>
        <input
            className={`border border-black rounded px-2 py-1 ${className}`}
            id={id}
            key={id}
            name={id}
            type={type || "text"}
            required={required}
        />
    </div>

)
}

export default FormInput