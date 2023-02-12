export interface InputInterface{
type:string,
placeholder:string,
id:string

}
export interface buttonInterface{
    title:string,
    onClick:(event:React.MouseEvent<HTMLElement>)=>void
    
    }