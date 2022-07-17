import {Header} from './Componentes/Header'
import styles from './App.module.css'
import {InputBox} from './Componentes/InputBox'
import { DisplayTasksContent } from './Componentes/DisplayTasksContent'
import { useState } from 'react'

import './Global.css'


 export function App() {

  const[tasks, setTasks]=useState([

  
])

console.log(tasks)

function handleCreateTask(newTask){

   var id=0;

  if(tasks.length == 0){

    id=1;
  }else{
    id=tasks[tasks.length-1].id+1
  }

let currentTask=

  {
    id:id,
    content:newTask,
  }
  
  
  


 setTasks([...tasks,currentTask])

  
console.log(currentTask)

    
} function deleteTask(id){

  const tasksWithoutDeletedOne=tasks.filter(task =>{
    return task.id !== id;
  })
setTasks(tasksWithoutDeletedOne)
}
  
 return(

  <div>

  <Header></Header>


  <div className={styles.Wrapper}>

  <main >
  <InputBox 
  tasksContent={tasks}
  onCreateTask={handleCreateTask}
  ></InputBox>

  <section className={styles.displayTask}>

    <DisplayTasksContent 
     tasksContent={tasks}
     onDeleteTask={deleteTask}
     >

     </DisplayTasksContent>
   
  </section>
  </main>
  </div>

 
  </div>

  

 )
  
}


