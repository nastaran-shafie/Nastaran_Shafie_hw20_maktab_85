import { InputInterface } from "../../interface/interface";

function Input({
  type,
  placeholder,
  id,
  onChange,
  isValid,
  showError,
  pattern,
  accept,
}: InputInterface) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        pattern={pattern}
        accept={accept}
      />
      {!isValid && <p className="error">{showError}</p>}
    </>
  );
}
export default Input;
