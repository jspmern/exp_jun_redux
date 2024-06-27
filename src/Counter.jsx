import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DEC, INC } from './Action/Constant'
import { decrementHandler, incrementHandler } from './Action/counterActionCreator'

function Counter() {
    //useSelector - it consumes store
   let {inc,dec}= useSelector((reducer)=>{
        return reducer.countReducer
    })
   //this is for dispatching your action
   let dispatch=useDispatch()
 
  //function for incHandler
  function incHandler()
  {
       dispatch(incrementHandler(2))
  }
  function decHandler()
  {
       dispatch(decrementHandler(1))
  }
  return (
    <>
    <h1>inc:{inc}</h1>
    <h1>dec:{dec}</h1>
    <button onClick={incHandler}>inc</button>
    <button onClick={decHandler}>dec</button>

    </>
  )
}

export default Counter