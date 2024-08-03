import React from "react";
import { dataLis, secdata } from "../data/data";

import Home from "./home.js";
import Login from "./login.js";
import { Route, Link, Routes } from "react-router-dom";
import Browse from "./browse.js";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/login" Component={Login} />
        <Route exact path="/browse" Component={Browse} />
        {/* <Route exact path="/profile" Component={Login} /> */}
      </Routes>
    </>
  );
}
export default App;
