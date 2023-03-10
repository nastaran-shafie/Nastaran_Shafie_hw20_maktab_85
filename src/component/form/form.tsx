import Button from "../button/button";
import Input from "../Input/input";
import useInput from "../../customHook/useValidForm";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { formdispatch } from "../../redux/store";

// validation-----------------------------------------------------------------------------------------
const petternEmail = "[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+";
const patternName = "^[a-zA-Z\u0600-\u06FFs ]+$";
const PositionPattern = "^[a-zA-Z\u0600-\u06FFs ]+$";
const patternNumber = "09[0-9]";
const patternFile = " .jpg,.png,.pdf";
//  form function----------------------------------------------------------------------------------
function Form() {
  const [Resume, setResume] = useState({});
  const dispatch = useDispatch();
  // name from use input--------------------------------------------------------------------------------
  const {
    entredValue: entredName,
    isValid: isNameValid,
    valueChangeHandler: nameChanging,
  } = useInput(
    (value: string) => value.match(patternName) && value.trim().length > 3
  );
  // email from useuinput--------------------------------------------------------------------------------
  const {
    entredValue: entredEmail,
    isValid: isEmailValid,
    valueChangeHandler: emailChanging,
  } = useInput((value: string) => value.match(petternEmail));
  // position from useInput------------------------------------------------------------------------------
  const {
    entredValue: entredPosition,
    isValid: isPositionValid,
    valueChangeHandler: positionChanging,
  } = useInput(
    (value: string) => value.match(PositionPattern) && value.trim().length > 3
  );
  // phone from useInput----------------------------------------------------------------------------
  const {
    entredValue: entredPhone,
    isValid: isPhoneValid,
    valueChangeHandler: phoneChanging,
  } = useInput(
    (value: string) => value.match(patternNumber) && value.length === 11
  );
  // const file from useInput-------------------------------------------------------------------

  const fileChanging = (event: any) => {
    const fileName = event.target.value.split("\\").at(-1);

    setResume(fileName);
  };
  // login handeler-------------------------------------------------------------------------------
  const loginHandler = (event: FormEvent) => {
    event.preventDefault();

    if (isNameValid && isPhoneValid && isPhoneValid && isPositionValid) {
      event.preventDefault();
    }

    if (isNameValid && isPhoneValid && isPhoneValid && isPositionValid) {
      const user = {
        name: entredName,
        email: entredEmail,
        position: entredPosition,
        phone: Number(entredPhone),
        resume: Resume,
      };
      const login = true;
      dispatch(formdispatch.showUser({ user, login }));
    }
  };
  // return form
  return (
    <form action="" onSubmit={loginHandler}>
      <div className="formContainer">
        <div className="rightContainer">
          {" "}
          {/* input name---------------------------------- */}
          <label htmlFor="name">??????</label>
          <Input
            showError="?????? ???????? ?????? ?????????????? ??????."
            type="text"
            placeholder="??????"
            id="name"
            onChange={nameChanging}
            isValid={isNameValid}
          />
          {/* input position--------------------------------- */}
          <label htmlFor="position">???????????? ????????????</label>
          <Input
            showError="???????????? ???????????? ???????? ?????? ???? ?????????? ??????"
            type="text"
            placeholder="???????????? ???????????? ???? ?????? ?????? ???? ???????? ???????? ..."
            id="position"
            onChange={positionChanging}
            isValid={isPositionValid}
          />
          {/* input file---------------------------------------------------- */}
          <label htmlFor="resome">???????? ??????????</label>
          <div className="fileContainer">
            {" "}
            <Input
              type="file"
              onChange={fileChanging}
              id="resome"
              accept={patternFile}
            />
          </div>
        </div>
        <div className="leftContainer">
          {/* input email----------------------------------------- */}
          <label htmlFor="email">??????????</label>
          <Input
            showError="?????????? ???????? ?????? ???? ?????????? ??????"
            type="eamil"
            placeholder="??????????"
            id="email"
            onChange={emailChanging}
            isValid={isEmailValid}
          />
          {/* input phone-------------------------------------------------- */}
          <label htmlFor="phone">?????????? ????????</label>
          <Input
            showError="?????????? ?? ?????????????? ?????????????? ??????"
            type="tell"
            placeholder="????????????"
            id="phone"
            onChange={phoneChanging}
            isValid={isPhoneValid}
          />
        </div>
      </div>
      {/* button submit----------------------------------------------------------- */}
      <div className="buttonConatainer">
        <Button title="?????????? ??????????????" className="fix" />
      </div>
    </form>
  );
}
export default Form;
