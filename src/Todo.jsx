import React from 'react'
import Print from './Print'
import { useDispatch, useSelector } from 'react-redux'
import { setTextHandler, submitTextHandler } from './Action/todoActionCreator'

function Todo() {
     let {text}=  useSelector((reducer)=>reducer.todo)
      let dispatch=useDispatch()
   
    //this is my changeHandler
    function changeHandler(e)
    {
    dispatch( setTextHandler(e.target.value))
      
    }
    //this is for submit 
    function submitHandler()
    {
        dispatch(  submitTextHandler())
      
    }
  return (
     <>
     <h1>...........todo...............</h1>
     <input type='text' placeholder='enter your text'  onChange={changeHandler}  value={text}/>
     <button onClick={submitHandler}>submit</button>
      <Print/>
     </>
  )
}

export default Todo