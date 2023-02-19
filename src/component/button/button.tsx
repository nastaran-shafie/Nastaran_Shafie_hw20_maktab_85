import { buttonInterface } from "../../interface/interface";

function Button({ onClick, title, className }: buttonInterface) {
  return (
    <button onClick={onClick} className={className}>
      {title}{" "}
    </button>
  );
}
export default Button;
