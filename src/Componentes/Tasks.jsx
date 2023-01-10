import { useState } from 'react'
import styles from './Tasks.module.css'
import Trash from '../Assets/trash3.svg'
import checkBox from '../Assets/checkBox.svg'
import checkBoxDone from '../Assets/checkBoxDone.svg'

export function Tasks({content, onDeleteTask}){

    console.log(content)
    function onDeleteTask3(id){

      onDeleteTask(id)
      
      
    }

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
       

           <li className={flaggedTask ? styles.pendingTask : styles.taskDone}
     
     >
 
     <button className={styles.buttonCheckBox} onClick={handleFlagTask}>
     <img src={flaggedTask ? checkBox : checkBoxDone} className={styles.checkBox} > 
       </img>
     </button>
      

         <p>
         {content.content}
         </p>
          
          
         <button className={styles.deleteButton} onClick={( ) => onDeleteTask3(content.id)}>
         <img src={Trash} alt="Apagar Tarefa" className={styles.trash} />
         </button>
         
     
      
            
     </li>
        
        
      
    )
}