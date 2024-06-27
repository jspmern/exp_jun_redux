import { ADD_TEXT, SET_TEXT } from "./Constant";

export function setTextHandler(value)
{
    console.log('hello i am action creater',value)
    return {type:SET_TEXT,payload:value}
}
export function submitTextHandler()
{
    return {type:ADD_TEXT}
}