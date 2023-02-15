import { useDispatch, useSelector } from "react-redux";

import { formdispatch } from "../../redux/store";

function Show() {
  const result = useSelector((state) => state.form.user);
  const showresult = useSelector((state) => state.form.login);

  console.log(result);
  console.log(showresult);

  return (
    <>
      <p>hi</p>
    </>
  );
}
export default Show;
