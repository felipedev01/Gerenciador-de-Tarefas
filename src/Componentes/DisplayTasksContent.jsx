
import styles from './DisplayTasksContent.module.css'
import { DisplayTasksEmpty } from './DisplayTasksEmpty'
import { DisplayTasksWithContent } from './DisplayTasksWithContent'

export function DisplayTasksContent(props){

  console.log(props.tasksContent)
   
  if(props.tasksContent.length == 0){

    return(
     <DisplayTasksEmpty></DisplayTasksEmpty>
     
     )


  }else{

    return(

      <DisplayTasksWithContent tasksContent={props.tasksContent} ></DisplayTasksWithContent>
     
     )


  }

    

}