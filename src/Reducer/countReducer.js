import { DEC, INC } from "../Action/Constant"

let initalState={inc:1,dec:10}
function countReducer(state=initalState,action)
{
  if(action.type==INC)
    {
      return {...state,inc:state.inc+action.payload}
    }
    else if(action.type==DEC)
      {
        return {...state,dec:state.dec-action.payload}
      }
      else{
        return state
      }
 
}
export default countReducer