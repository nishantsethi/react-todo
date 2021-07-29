import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from'./components/AddTask'
import { useState } from "react";


function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "yolo",
      day: "23 Feb",
      reminder: "false",
    },
    {
      id: 2,
      text: "yoolo",
      day: "23 Feb",
      reminder: "false",
    },
  ]);

  // Add Task

  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000) + 1

    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? 
      {...task, reminder: !task.reminder} : task))
  }

  
  return (
    <div className="container">
      <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />

      {showAddTask && <AddTask onAdd={addTask}/> }
      {
        tasks.length > 0 ?
        <Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder}/> :
        <p> No tasks are there mate</p>
      }
    </div>
  );
}

export default App;
