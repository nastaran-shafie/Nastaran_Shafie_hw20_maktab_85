import { InputInterface } from "../../typs/type";

function Input({ type, placeholder, id }: InputInterface) {
  return <input type={type} placeholder={placeholder} id={id} />;
}
export default Input;
