import React from "react";
import logstyle from "../css/log.css";
import welcomeImage from "../img/welcome.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="content-box">
        <h1>سجل دخولك !</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <Input placeName={"البريد الالكتروني"} />
          <Input placeName={"كلمة السر"} />
          <button className="btn">
            <Link to={"/browse"}>تسجيل</Link>
          </button>
        </form>
      </div>
      <div className="img-box">
        <div className="img-conatiner">
          <img src={welcomeImage} />
        </div>
        <h3>أهلا بعودتك !</h3>
      </div>
    </div>
  );
}

function Input({ placeName }) {
  return (
    <div className="input">
      <input placeholder={placeName} />
    </div>
  );
}
export default Login;
