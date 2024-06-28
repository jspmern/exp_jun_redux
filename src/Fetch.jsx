import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AllFetchThingHandler } from './Action/FetechActionCreater'

function Fetch() {
    let dispatch=useDispatch()
   let {loading,error,data}= useSelector((reducer)=>reducer.fetch)
   //this is for fetching dagta
   async function fetchDataHandler()
   {
     dispatch( AllFetchThingHandler())
    //    dispatch(intialRequest())  
    //    fetch('https://jsonplaceholder.typicode.com/users').then((data)=>data.json()).then((item)=>dispatch(dataSuccess(item))).catch((err)=>dispatch(dataFailer(err)))
   }
  return (
    <>
    <div>Fetch</div>
    <button onClick={fetchDataHandler}>fetchData</button>
    <h6>............................</h6>
    <div className="container">
        <div className="row d-flex justify-content-center">
            {loading && data.length==0 && <h1>loading.....</h1>}
            {!loading && Object.keys(error).length>0 && <h1>somthing wrong</h1>}
            {!loading && data.length>0 && 
             data.map((item)=>{
                return <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <p>{item?.username}</p>
                            <p>{item?.id}</p>
                        </div>
                    </div>
                </div>
             })
            }
        </div>
    </div>
    </>
    
    
  )
}

export default Fetch