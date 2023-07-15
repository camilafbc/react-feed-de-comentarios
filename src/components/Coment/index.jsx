import styles from './styles.module.css'

function Coment({email, date, coment}){
    return (
        <div>
            <p className={styles.author}>{email}</p>
            <span className={styles.date}>em {date}</span>
            <p className={styles.coment}>{coment}</p>
            <hr/>
          </div>
    )
}

export default Coment