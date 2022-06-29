import styles from './InputBox.module.css'
import createLogo from '../Assets/Layer 2.svg'

export function InputBox(){

    return(
        <form className={styles.InputBox}>
           <textarea 
           placeholder='Adicione uma nova tarefa'
           required
           >

           </textarea>
           <button>

            Criar
             <img src={createLogo} size={40} alt="" />
           </button>
        </form>
    )
}