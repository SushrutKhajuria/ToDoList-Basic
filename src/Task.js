// creating an event for task as it is ebing called repeatedly so it'll be managed better

export const Task = (props)=>{
    return(
        <div className="task"
        style={{backgroundColor:props.completed ?"green":"white"}}
        >

        <h1>{props.taskName}</h1>
        <button onClick={() => props.deleteTask(props.id) }> X </button>
        <button onClick={() =>props.completeTask(props.id)} > Completed</button>
    
        
        
    
      </div>
     
    )
    
    
    } 
    