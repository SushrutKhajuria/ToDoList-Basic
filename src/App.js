import "./App.css";
import { useState } from "react";
import {Task} from "./Task"
function App(){
 
const [toDoList , setToDolist] = useState([]);
const [newTask , setNewTask] = useState("");

const handleChange=(event)=>{
setNewTask(event.target.value);
}

const addTask =()=>{
const task={
  id: toDoList.length === 0 ? 1:toDoList[toDoList.length-1].id +1,
  taskName: newTask,
  completed : false
};
setToDolist([...toDoList,task]);
};

const deleteTask=(id)=>{
setToDolist(toDoList.filter((task) =>task.id !==id ))
};

const completeTask=(id)=>{
  setToDolist(
    toDoList.map((task)=>{
      if(task.id === id){
        return{...task , completed: true}
      }
      else{
         return task;
      } 
    })
  );
};


return(
<div className="App">
  <div className="addTask">
  <input onChange={handleChange} />
  <button onClick={addTask}>Add Task</button>
  </div>
  
  <div className="list">
  {
    toDoList.map((task)=>{
      return(
        <Task
        taskName={task.taskName} 
        id={task.id} 
        deleteTask={deleteTask} 
        completed = {task.completed}
        completeTask ={completeTask}
        /> 
      );
    })
  }
    
  </div>
  
</div>

)
}

export default App;