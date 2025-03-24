import React, { useState } from 'react'
import Heading from './components/Heading'
import CreateTask from './components/CreateTask'
import TaskList from './components/TaskList'

const App = () => {
  const [tasks,setTasks] = useState([
    "Buy groceries",
    "Finish project report",
    "Call mom",
    "Workout",
    "Read a book"
  ]);

  const addTask = (job) => {
    setTasks([...tasks, job]);
  }
  const removeTask = (removeJob) => {
    setTasks(tasks.filter(task => task !== removeJob))
  }
  return (
    <div className='p-10 w-[500px] mx-auto'>
      <Heading />
      <CreateTask addTask={addTask} />
      <TaskList removeTask={removeTask} key={tasks.id} tasks={tasks} />
    </div>
  )
}

export default App
