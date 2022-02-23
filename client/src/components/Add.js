import React,{useState} from 'react'
import { Input } from 'antd';
import { Button } from 'antd';
import {useDispatch} from "react-redux";
import  {addTodos} from  "../reducer"




const Add = () => {

  const [state,setState]=useState();
  const dispatch=useDispatch();


  const handleChange=(event)=>{
    setState(event.target.value);

  }

  const addTaskLocal=()=>{
    dispatch(addTodos({title:state}))

  }

  return (
    <div style={{display:"flex" ,justifyContent:"space-between",justifyItems:"center"}}>

<Input placeholder="Basic usage" onChange={handleChange} />
<Button type="primary" onClick={addTaskLocal}>Add Task</Button>




    </div>
  )
}

export default Add