
import styles from './DisplayTasksContent.module.css'
import { DisplayTasksEmpty } from './DisplayTasksEmpty'
import { DisplayTasksWithContent } from './DisplayTasksWithContent'

export function DisplayTasksContent({tasksContent,onDeleteTask}){

  console.log(tasksContent)

  function deleteTask(id){

    onDeleteTask(id)

  }
 
  if(tasksContent.length == 0){

    return(
     <DisplayTasksEmpty></DisplayTasksEmpty>
     
     )


  }else{

    return(

      <DisplayTasksWithContent 
      tasksContent={tasksContent} 
      onDeleteTask={deleteTask}
      >
      
        
      </DisplayTasksWithContent>
     
     )


  }

    

}