
import styles from './DisplayTasksContent.module.css'
import { DisplayTasksEmpty } from './DisplayTasksEmpty'
import { DisplayTasksWithContent } from './DisplayTasksWithContent'
import { useState } from 'react'

export function DisplayTasksContent({tasksContent,onDeleteTask}){

  const [doneTaskTotalCount,setDoneTaskTotalCount]=useState(0)

  console.log(tasksContent)

  function deleteTask(id){

    onDeleteTask(id)

  }function taskCount3(n){
    setDoneTaskTotalCount(doneTaskTotalCount+n)
  }
 
  if(tasksContent.length == 0){

    return(
     <DisplayTasksEmpty
     doneTaskTotalCount={doneTaskTotalCount}
     ></DisplayTasksEmpty>
     
     )


  }else{

    return(

      <DisplayTasksWithContent 
      tasksContent={tasksContent} 
      onDeleteTask={deleteTask}
      taskCount3={taskCount3}
      >
      
        
      </DisplayTasksWithContent>
     
     )


  }

    

}