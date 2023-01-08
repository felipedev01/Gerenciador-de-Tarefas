import { useState } from 'react'
import styles from './tasks.module.css'
import Trash from '../Assets/trash3.svg'
import checkBox from '../Assets/checkBox.svg'
import checkBoxDone from '../Assets/checkBoxDone.svg'

export function Tasks({tasksContent}){

    console.log(tasksContent)

    const[flaggedTask , setFlaggedTask]=useState(true)

    function handleFlagTask(){
  
      if(flaggedTask==true){
        setFlaggedTask(false);
      }
      else{
        setFlaggedTask(true);
      }
  }

    return(
        <ul>

           <li className={flaggedTask ? styles.pendingTask : styles.taskDone}
     key={task.id}
     >
 
     <button className={styles.buttonCheckBox} onClick={handleFlagTask}>
     <img src={flaggedTask ? checkBox : checkBoxDone} className={styles.checkBox} > 
       </img>
     </button>
      

         <p>
         {tasksContent}
         </p>
          
          
         <button className={styles.deleteButton} onClick={( ) => onDeleteTask2(task.id)}>
         <img src={Trash} alt="Apagar Tarefa" className={styles.trash} />
         </button>
         
     
      
            
     </li>
        
        
      </ul>
    )
}