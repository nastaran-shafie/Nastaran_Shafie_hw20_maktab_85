import { buttonInterface } from "../../interface/interface";

function Button({ onClick, title }: buttonInterface) {
  return <button onClick={onClick}>{title} </button>;
}
export default Button;
