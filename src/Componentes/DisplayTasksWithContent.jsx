import styles from './DisplayTasksWithContent.module.css'
import Trash from '../Assets/trash3.svg'
import checkBox from '../Assets/checkBox.svg'
import checkBoxDone from '../Assets/checkBoxDone.svg'
import { useState } from 'react'
 
 
 export function DisplayTasksWithContent({tasksContent, onDeleteTask}){

  const[flaggedTask , setFlaggedTask]=useState(true)

  function handleFlagTask(){

    if(flaggedTask==true){
      setFlaggedTask(false);
    }
    else{
      setFlaggedTask(true);
    }
}
  

  function onDeleteTask2(id){

    onDeleteTask(id)
    
    
  }
    
    return(

      <div>
      <header>
        <strong>
          <span className={styles.createdTasksText}>
          Tarefas criadas
          </span>
        <span className={styles.taskCount}>{tasksContent.length}</span>
        </strong>
        
        <strong className={styles.doneTasks}>
          <span className={styles.doneTasksText}>
          Concluídas
          </span>
         
        <span className={styles.taskCount}>2 de 5</span>
        </strong>
        
    </header>
      
       <div className={styles.taskContainetText}>

       <ul>

        
        {tasksContent.map(task=>{

               
      return(
  
        
           <li className={flaggedTask ? styles.pendingTask : styles.taskDone}
     key={task.id}
     >
 
     <button className={styles.buttonCheckBox} onClick={handleFlagTask}>
     <img src={flaggedTask ? checkBox : checkBoxDone} className={styles.checkBox} > 
       </img>
     </button>
      

         <p>
         {task.content}
         </p>
          
          
         <button className={styles.deleteButton} onClick={( ) => onDeleteTask2(task.id)}>
         <img src={Trash} alt="Apagar Tarefa" className={styles.trash} />
         </button>
         
     
      
            
     </li>
        
    
       
  
 
          )
         } )}
        
      </ul>
      
     </div>
      </div>
    )
}