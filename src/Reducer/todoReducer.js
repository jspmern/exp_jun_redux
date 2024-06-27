
import { ADD_TEXT, SET_TEXT } from "../Action/Constant"

let initalState={
    text:'',
    todo:[]
}
function todoReducer(state=initalState,action)
{
     if(action.type==SET_TEXT)
        {
            
            return{...state,text:action.payload}
        }
         if(action.type==ADD_TEXT){
            let obj={
                id:new Date().getMilliseconds(),
                msg:state.text
            }
            return {...state,todo:[...state.todo,obj],text:''}
        }
        else{
            return state
        }
        
}
export default todoReducer