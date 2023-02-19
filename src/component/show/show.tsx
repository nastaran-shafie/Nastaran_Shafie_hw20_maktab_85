import { useDispatch, useSelector } from "react-redux";

import { formdispatch } from "../../redux/store";
import img from "../../img/download.jpg";
import Button from "../button/button";

function Show() {
  const result = useSelector((state) => state.form.user);

  const dispatch = useDispatch();

  function logOut() {
    const login = false;
    dispatch(formdispatch.showUser({ login }));
  }

  return (
    <>
      <div className="profile">
        <h2>پروفایل</h2>
      </div>
      <div className="profielContainer">
        <div className="profileInfo">
          <p>
            نام : <span>{result.name}</span>
          </p>
          <p>
            ایمیل : <span> {result.email}</span>
          </p>
          <p>
            رزومه : <span>{result.resume}</span>
          </p>
          <p>
            موقعیت همکاری : <span>{result.position}</span>
          </p>
          <p>
            شماره ی تلفن : <span>{result.phone}</span>
          </p>
        </div>
        <div className="profileImg">
          <img src={img} alt="" />
          <Button title="log Out" onClick={logOut} />
        </div>
      </div>
    </>
  );
}
export default Show;
