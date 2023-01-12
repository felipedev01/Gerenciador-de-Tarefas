import styles from './DisplayTasksWithContent.module.css'
import Trash from '../Assets/trash3.svg'
import checkBox from '../Assets/checkBox.svg'
import checkBoxDone from '../Assets/checkBoxDone.svg'
import { useState } from 'react'
import { Tasks } from './Tasks'
 
 
 export function DisplayTasksWithContent({tasksContent, onDeleteTask,taskCount3}){

 
  console.log(tasksContent)
 const[doneTaskCount,setDoneTaskCount]=useState(0)

 

 function taskCount(n){
  taskCount3(n)
  
    setDoneTaskCount(doneTaskCount+n)
  
  
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
         
        <span className={styles.taskCount}>{doneTaskCount} de {tasksContent.length}</span>
        </strong>
        
    </header>
      
       <div className={styles.taskContainetText}>
      
       {
                tasksContent.map(task =>{
                        return(
                            <Tasks  content={task} 
                            onDeleteTask={onDeleteTask2}
                            taskCount={taskCount}
                            />
                            
                    )
                    })
                }

      
     </div>
      </div>
    )
}