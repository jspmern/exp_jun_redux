import { DEC, INC } from "./Constant";

export function incrementHandler(value)
{
    return {type:INC,payload:value}
}
export function decrementHandler(value)
{
    return {type:DEC,payload:value}
}