import {Header} from './Componentes/Header'
import styles from './App.module.css'
import {InputBox} from './Componentes/InputBox'
import { DisplayTasksContent } from './Componentes/DisplayTasksContent'
import { useState } from 'react'

import './Global.css'


 export function App() {

  const[tasks, setTasks]=useState([

    {
      id:1,
      content:'Trocar a caixa de areia do gato Trocar a caixa de areia do gato Trocar a caixa de areia do gato Trocar a caixa de areia do gato Trocar a caixa de areia do gato Trocar a caixa de areia do gato Trocar a caixa de areia do gato',
    },
    {
      id:2,
      content:'Alimentar o gato Trocar a caixa de areia do gato Trocar a caixa de areia do gato Trocar a caixa de areia do gato Trocar a caixa de areia do gato Trocar a caixa de areia do gato Trocar a caixa de areia do gato Trocar a caixa de areia do gato',
    },
    {
      id:3,
      content:'Colocar o gato para dormir',
    }
    
    
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

  alert('O id desta tarefa eh'+' '+id+' '+'Ponto')
  /*
  const tasksWithoutDeletedOne=tasks.filter(task =>{
    return task !== commentToDelete;
  })
*/
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


