import { useState } from 'react'
import styles from "./styles.module.css"
import InputEmail from "../InputEmail"
import TextArea from "../TextArea"

function Form({addComentario}){

    const [email, setEmail] = useState("")
    const [texto, setTexto] = useState("")

    const handleSubmit = (ev) => {
        ev.preventDefault()
        addComentario({email, texto})
        setEmail("")
        setTexto("")
      }

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.input_container}>
                <InputEmail 
                    label="email"
                    textLabel="E-mail"
                    value={email}
                    setValue={setEmail}
                />
            </div>
            <div className={styles.input_container}>
                <TextArea
                    label="comentario"
                    textLabel="Comentário"
                    value={texto}
                    setValue={setTexto}
                />
            </div>
            <button type="submit">Enviar Comentário</button>
        </form>
    )
}

export default Form