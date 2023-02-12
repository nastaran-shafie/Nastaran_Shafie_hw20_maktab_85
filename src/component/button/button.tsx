import { buttonInterface } from "../../typs/type";

function Button({ onClick, title }: buttonInterface) {
  return <button onClick={onClick}>{title} </button>;
}
export default Button;
