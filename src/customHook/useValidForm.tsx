import { ChangeEvent, useState } from "react";

const useInput = (
  validValue: (a: string) => boolean | RegExpMatchArray | null
) => {
  const [entredValue, setEntredValue] = useState(" ");
  const [isValid, setIsValid] = useState(false);

  const valueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEntredValue(event.target.value);

    const valueIsValid = validValue(event.target.value);

    if (valueIsValid) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return {
    entredValue,
    isValid,
    valueChangeHandler,
  };
};

export default useInput;
