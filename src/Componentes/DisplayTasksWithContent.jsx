import styles from './DisplayTasksWithContent.module.css'
import Trash from '../Assets/trash3.svg'
import checkBox from '../Assets/checkBox.svg'
 
 
 export function DisplayTasksWithContent({tasksContent, onDeleteTask}){


  

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
        <span className={styles.taskCount}>0</span>
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
  
        
           <li
     key={task.id}
     >
 
      <img src={checkBox} className={styles.checkBox} > 
       </img>

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