import {useState} from 'react'
import './App.css';



function App() {

const[toDo,setToDo]= useState('')
const[toDos,setToDos]=useState([])

const addToDo=()=>{

  setToDos([...toDos,{list:toDo, id:Date.now()}])
  console.log(toDos);
  setToDo('')
}
const onDelete=(id)=>{
  setToDos(toDos.filter((to)=>to.id!==id))
}

  return (
<div id="container">

  <h1>
    To-Do List <i  onClick={addToDo}className="fa fa-plus" />
  </h1>
  <input value={toDo} type="text" placeholder="Add New Todo" onChange={(e)=>setToDo(e.target.value)} />
  
  <ul>
  {toDos.map((to)=>(


    <li><span><i  onClick={()=>onDelete(to.id)}class="fa fa-trash"></i></span>
      {to.list}</li>
  ))}  

    
     
  
  </ul>
   
</div>


  );
}

export default App;
