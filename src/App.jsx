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
      content:'Trocar a caixa de areia do gato',
    },
    {
      id:2,
      content:'Alimentar o gato',
    },
    {
      id:3,
      content:'Colocar o gato para dormir',
    }
    
    
])

console.log(tasks)

  
 return(

  <div>

  <Header></Header>


  <div className={styles.Wrapper}>

  <main >
  <InputBox></InputBox>

  <section className={styles.displayTask}>

    <DisplayTasksContent tasksContent={tasks}></DisplayTasksContent>
   
  </section>
  </main>
  </div>

 
  </div>

  

 )
  
}


