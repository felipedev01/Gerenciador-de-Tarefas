import styles from './InputBox.module.css'
import createLogo from '../Assets/Layer 2.svg'
import { useState } from 'react'


export function InputBox(props){

 
  console.log(props.tasksContent)
    
     
    const [newTask,setNewTask] =useState('')

    function handleNewTask(){
   
        event.target.setCustomValidity('')
        setNewTask(event.target.value)
        console.log(newTask)
      }

     

      
    return(

       
        <form className={styles.InputBox} >
           <textarea 
           placeholder='Adicione uma nova tarefa'
           required
           onChange={handleNewTask}
           >

           </textarea>
           <button>

            Criar
             <img src={createLogo} size={40} alt="" />
           </button>
        </form>
    )
}