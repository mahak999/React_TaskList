import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([])


const deleteTask=(id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminderValue = (id) => {
  setTasks(tasks.map((task) => task.id === id ?
  {...task, reminder: !task.reminder} : task))
}

const addTask = (task) => {
  const id = Math.floor(Math.random()*1000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}


  return (
    <div className="container">
      <Header/>
      <AddTask onAdd={addTask}/>
      {tasks.length > 0? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminderValue}/> : 'No Tasks To Do'}
    </div>
  );
}

export default App;
