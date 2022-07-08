import styles from './InputBox.module.css'
import createLogo from '../Assets/Layer 2.svg'
import { useState } from 'react'


export function InputBox({tasksContent ,onCreateTask}){

 
  console.log(tasksContent)
 
    
     
    const [newTask,setNewTask] =useState('')

    function handleNewTask(){
   
        event.target.setCustomValidity('')
        setNewTask(event.target.value)
        console.log(newTask)
      }
     
      function handleCreateTask(){
          
        event.preventDefault()
        onCreateTask('função passada com sucesso')
        
      }
      
     

      
    return(

       
        <form className={styles.InputBox} onSubmit={handleCreateTask} >
           <textarea 
           placeholder='Adicione uma nova tarefa'
           required
           onChange={handleNewTask}
           >

           </textarea>
           <button type='submit'>

            Criar
             <img src={createLogo} size={40} alt="" />
           </button>
        </form>
    )
}