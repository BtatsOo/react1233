import React from "react";
import { useState, useEffect } from "react";
import { dataLis, dataLis2, isLoginData } from "../data/data";
import Li1 from "./Lis";
function Header({ isLogin }) {
  const [isOpen, setIsOpen] = useState(false);
  const viewportWidth = window.innerWidth;
  const [isOpactiy, setIsOpacity] = useState(false);
  useEffect(
    function () {
      if (isOpen) setIsOpacity(true);
      return () => setIsOpacity(false);
    },
    [isOpen]
  );
  return (
    <header>
      <div className="top-container">
        <nav className="small-screen">
          <div className="user-btn">
            <img
              alt="kofta"
              src="images/man.png"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          </div>
          {isOpen && (
            <div
              className={`ul-container ${
                isOpactiy ? "opacity-active" : "opacity-hidden"
              }`}
            >
              <ul>
                {isLogin
                  ? dataLis2.map((data) => (
                      <Li1 datas={data} key={data.title}></Li1>
                    ))
                  : dataLis.map((data) => (
                      <Li1 datas={data} key={data.title}></Li1>
                    ))}
              </ul>
            </div>
          )}
          <div className="logo small-screen">
            <img src="images/output-onlinepngtools1.png"></img>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
