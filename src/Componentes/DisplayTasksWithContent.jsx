import styles from './DisplayTasksWithContent.module.css'
import Trash from '../Assets/trash3.svg'
import checkBox from '../Assets/checkBox.svg'
import checkBoxDone from '../Assets/checkBoxDone.svg'
import { useState } from 'react'
import { Tasks } from './tasks'
 
 
 export function DisplayTasksWithContent({tasksContent, onDeleteTask}){

 
  console.log(tasksContent)

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
       {
        tasksContent.map(task=>{

          <Tasks tasksContent={task}/>
        })
       }
       
      
     </div>
      </div>
    )
}