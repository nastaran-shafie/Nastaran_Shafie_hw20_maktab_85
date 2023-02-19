import { ChangeEvent, ChangeEventHandler } from "react";

export interface InputInterface{
type?:string,
placeholder?:string,
id?:string
onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
isValid ?:boolean,
showError ?:string,
pattern?:string
accept?:string

}

export interface buttonInterface{
    title:string,
    onClick?:(event:React.MouseEvent<HTMLElement>)=>void
    className?:string
    
    }

    export interface InitialStateInterFace {
      user: any;
      login: boolean;
      }
      