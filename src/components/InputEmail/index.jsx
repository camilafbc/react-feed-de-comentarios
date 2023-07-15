function InputEmail({label, textLabel, value, setValue}){
    return (
        <div>
            <label htmlFor={label}>{textLabel}</label>
            <input 
                type="email"
                required 
                id={label} 
                value={value}
                onChange={(ev) => setValue(ev.target.value)}
            />
        </div>
    )
}

export default InputEmail