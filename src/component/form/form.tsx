import Button from "../button/button";
import Input from "../Input/input";

function Form() {
  return (
    <form action="">
      <div className="formContainer">
        <div className="rightContainer">
          {" "}
          <label htmlFor="name">نام</label>
          <Input type="text" placeholder="نام" id="name" />
          <p></p>
          <label htmlFor="family">موقعیت همکاری</label>
          <Input
            type="text"
            placeholder="موقعیت همکاری مد نظر خود را وارد کنید ..."
            id="family"
          />
          <p></p>
          <label htmlFor="resome">فایل رزومه</label>
          <div className="fileContainer">
            {" "}
            <Input
              type="file"
              placeholder="موقعیت همکاری مد نظر خود را وارد کنید ..."
              id="resome"
            />
          </div>
        </div>
        <div className="leftContainer">
          <label htmlFor="email">ایمیل</label>
          <Input type="eamil" placeholder="ایمیل" id="email" />
          <p></p>
          <label htmlFor="phone">شماره تماس</label>
          <Input type="tell" placeholder="موبایل" id="phone" />
          <p></p>
        </div>
      </div>
      <div className="buttonConatainer">
        <Button title="ارسال درخواست" />
      </div>
    </form>
  );
}
export default Form;
