import { InputInterface } from "../../interface/interface";

function Input({
  type,
  placeholder,
  id,
  onChange,
  isValid,
  showError,
}: InputInterface) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
      />
      {!isValid && <p className="error">{showError}</p>}
    </>
  );
}
export default Input;
