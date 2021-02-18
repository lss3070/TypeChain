import { on } from "events";
import React, { Children } from "react";

interface IInputIProps{
    value:string;
    onChange:(event:React.SyntheticEvent<HTMLInputElement>)=>void;
}

    export const Input:React.FunctionComponent<IInputIProps>=({value,onChange})=>(
        <input type="text" placeholder="Name" value={value} onChange={onChange}/>
    );
    interface IFormProps{
        onFormSubmit:(event:React.FormEvent)=>void;
    }

    export const Form :React.FunctionComponent<IFormProps>=
    ({children,onFormSubmit})=>(<form onSubmit={onFormSubmit}>{children}</form>)
    

