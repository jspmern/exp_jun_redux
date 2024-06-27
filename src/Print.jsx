import React from 'react'
import { useSelector } from 'react-redux'

function Print() {
  let {todo}=  useSelector((reducer)=>reducer.todo)
 
  return (
   <>
   {todo.length>0 && todo.map((item)=>{
    return <h6>{item.msg}</h6>
   })}
   </>
  )
}

export default Print