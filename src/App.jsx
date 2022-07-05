import {Header} from './Componentes/Header'
import styles from './App.module.css'
import {InputBox} from './Componentes/InputBox'
import { DisplayTasksContent } from './Componentes/DisplayTasksContent'
import { useState } from 'react'

import './Global.css'


 export function App() {

  const[tasks, setTasks]=useState([

    'Trocar a caixa de areia do gato',
    'Alimentar o gato'
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


