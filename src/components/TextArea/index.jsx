function TextArea({label, textLabel, value, setValue}){
    return (
        <div>
            <label htmlFor={label}>{textLabel}</label>
            <textarea 
                cols="30" 
                rows="10"
                required
                id={label} 
                value={value}
                onChange={(ev) => setValue(ev.target.value)}
            ></textarea>
        </div>
    )
}

export default TextArea