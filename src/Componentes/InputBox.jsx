import styles from './InputBox.module.css'

export function InputBox(){

    return(
        <form className={styles.InputBox}>
           <textarea 
           placeholder='Adicione uma nova tarefa'
           required
           >

           </textarea>
           <button>

           </button>
        </form>
    )
}