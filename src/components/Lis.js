import React, { Children } from "react";
import { Route, Link } from "react-router-dom";

function Li1({ datas, children, isLogin, class2 }) {
  return (
    <li className={`${datas.class ? datas.class : ""}`}>
      <Link to={datas.src}>{datas.title}</Link>
    </li>
  );
}

export default Li1;
